require("dotenv").config({ path: __dirname + "/.env" });





const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Updated to use auth.js
const locationRoutes = require('./routes/locationRoutes');
const rideRoutes = require('./routes/ride'); // Changed to use the new ride.js

const app = express();
const http = require('http');
const { initSocket } = require('./socket');
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Initialize Socket.io
initSocket(server);

// Middleware
const authMiddleware = require('./middleware/auth');
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/ride', rideRoutes);

// Serve static files from the React frontend app
const frontendPath = require('path').join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(require('path').join(frontendPath, 'index.html'));
});

// Protected Route Example
app.get('/api/user/me', authMiddleware, (req, res) => {
    // req.user is populated by authMiddleware
    res.json({
        success: true,
        user: req.user
    });
});

// Start Server
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
