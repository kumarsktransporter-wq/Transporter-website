const axios = require('axios');
const jwt = require('jsonwebtoken');
const admin = require("../config/firebaseAdmin");


// In-memory OTP Store (Production: Use Redis)
// Key: mobile_number ("+919876543210")
// Value: { otp: "123456", expiresAt: <timestamp>, attempts: 0, lastSent: <timestamp> }
const otpStore = new Map();

// Helper: Generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.sendOtp = async (req, res) => {
    try {
        const { mobile } = req.body; // Frontend sends 'mobile'
        const phone = mobile;

        if (!phone) {
            return res.status(400).json({ message: "Phone number required" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);

        const response = await axios({
            method: "POST",
            url: "https://www.fast2sms.com/dev/bulkV2",
            headers: {
                authorization: process.env.FAST2SMS_API_KEY,
                "Content-Type": "application/json"
            },
            data: {
                route: "otp",
                variables_values: otp,
                numbers: phone
            }
        });

        console.log("FAST2SMS RESPONSE:", response.data);

        if (!response.data.return) {
            return res.status(500).json({
                success: false,
                message: "SMS sending failed",
                details: response.data
            });
        }

        // Store OTP in memory for verification
        const now = Date.now();
        const expiresAt = now + 5 * 60 * 1000; // 5 minutes

        otpStore.set(phone, {
            otp: otp.toString(), // Store as string for strict comparison in verifyOtp
            expiresAt,
            lastSent: now,
            attempts: 0
        });

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully"
        });

    } catch (error) {
        console.error("SEND OTP ERROR:", error.response?.data || error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const db = require('../database/db'); // Import MySQL connection

exports.verifyOtp = async (req, res) => {
    const { mobile, otp } = req.body;
    if (!mobile || !otp) return res.status(400).json({ error: 'Mobile and OTP required' });

    const record = otpStore.get(mobile);

    if (!record) {
        return res.status(400).json({ error: 'No OTP requested or OTP expired' });
    }

    if (Date.now() > record.expiresAt) {
        otpStore.delete(mobile);
        return res.status(400).json({ error: 'OTP expired' });
    }

    if (record.otp !== otp) {
        return res.status(400).json({ error: 'Invalid OTP' });
    }

    // Success
    otpStore.delete(mobile);

    try {
        let uid = mobile; // Default UID for stateless fallback
        let user = { mobile, role: 'user' };

        // 1. Persist User in MySQL (Alternative to Firestore)
        try {
            // Check if user exists
            const [rows] = await db.query('SELECT * FROM users WHERE mobile = ?', [mobile]);

            if (rows.length > 0) {
                user = rows[0];
                uid = user.id.toString();
            } else {
                // Create new user
                const [result] = await db.query('INSERT INTO users (mobile) VALUES (?)', [mobile]);
                user = { id: result.insertId, mobile, role: 'user' };
                uid = result.insertId.toString();
            }
        } catch (dbError) {
            console.error("MySQL Error (Ignored/Fallback):", dbError.message);
            // Fallback: If MySQL fails, we still allow login but sans DB persistence
            // UID will be the mobile number
        }

        // 2. Generate Firebase Custom Token (for Client Maps/Auth)
        // Works even without Firestore!
        const firebaseCustomToken = await admin.auth().createCustomToken(uid);

        // 3. Generate Backend JWT (for API routes protection)
        const jwtToken = jwt.sign(
            { id: uid, mobile },
            process.env.JWT_SECRET || 'dev_secret_change_me',
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: 'OTP verified',
            token: jwtToken,
            firebaseToken: firebaseCustomToken,
            user: { id: uid, ...user }
        });

    } catch (err) {
        console.error('Verify OTP / User Creation Error:', err);
        // Returns 500 but now likely succeeds via MySQL or Stateless
        res.status(500).json({ error: err.message || 'Verification failed' });
    }
};
