import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Shield, Smartphone, Map, CreditCard, Star, Clock, CheckCircle, Car, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import autoImg from '../assets/auto1.jpg';
import carImg from '../assets/car1.jpg';
import outstationImg from '../assets/outstation1.png';
import truckImg from '../assets/truck2.png';
import customerAppImg from '../assets/playstorecustomer.png';
import driverAppImg from '../assets/playstoredriver.png';
import noSurgeImg from '../assets/No Surge Pricing, Ever.png';
import superAppImg from '../assets/superapp.png';
import paymentImg from '../assets/payment .png';
import liveTrackingImg from '../assets/livetracking.png';
import appBgImg from '../assets/main2.jpg';

const FeatureCard = ({ image, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6, type: "spring", stiffness: 50 }}
        className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-white/50 flex flex-col items-center text-center w-full max-w-[350px] relative overflow-hidden"
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div className="h-48 w-full mb-6 overflow-hidden rounded-2xl relative shadow-inner">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300 z-10"></div>
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
        </div>
        <div className="flex-1 flex flex-col items-center">
            <h3 className="text-xl font-heading font-bold mb-3 text-slate-800 group-hover:text-purple-600 transition-colors">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full bg-white">
            <Navbar />
            <Hero />

            {/* Our Services Section */}
            <section className="py-24 w-full bg-slate-50">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">
                            One App. <span className="text-purple-600">Every Way to Move.</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            Choose the perfect ride for your journey. Safe, reliable, and affordable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Auto */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group text-center border border-slate-100 flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="h-48 w-full flex items-center justify-center mb-6 relative shrink-0 overflow-hidden">
                                <img src={autoImg} alt="Auto" className="w-48 object-contain relative z-10 group-hover:scale-110 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1">Auto</h3>
                            <p className="text-purple-600 font-medium text-sm mb-3">Quick and affordable rides to your doorstep.</p>
                            <p className="text-slate-500 mb-6 flex-grow">Quick, metered-style flat rates for everyday errands. No haggling.</p>
                            <button
                                onClick={() => navigate('/ride', { state: { serviceType: 'auto' } })}
                                className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Cab */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group text-center border border-slate-100 flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="h-48 w-full flex items-center justify-center mb-6 relative shrink-0 overflow-hidden">
                                <img src={carImg} alt="Cab" className="w-64 object-contain relative z-10 group-hover:scale-110 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1">Cab (Mini / Sedan / SUV)</h3>
                            <p className="text-purple-600 font-medium text-sm mb-3">Comfortable AC rides for city travel.</p>
                            <p className="text-slate-500 mb-6 flex-grow">Top-rated AC minis, sedans, and SUVs for your comfort without unexpected price spikes.</p>
                            <button
                                onClick={() => navigate('/ride', { state: { serviceType: 'car' } })}
                                className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Outstation */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group text-center border border-slate-100 flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="h-48 w-full flex items-center justify-center mb-6 relative shrink-0 overflow-hidden">
                                <img src={outstationImg} alt="Outstation" className="w-56 object-contain relative z-10 group-hover:scale-110 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1">Outstation(Mini Bus)</h3>
                            <p className="text-purple-600 font-medium text-sm mb-3">Round trips & One-way drops</p>
                            <p className="text-slate-500 mb-6 flex-grow">Travel out of town with comfort. Choose from our wide range of cars for your weekend getaways.</p>
                            <button
                                onClick={() => navigate('/ride', { state: { serviceType: 'outstation' } })}
                                className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Truck */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group text-center border border-slate-100 flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="h-48 w-full flex items-center justify-center mb-6 relative shrink-0 overflow-hidden">
                                <img src={truckImg} alt="Truck" className="w-56 object-contain relative z-10 group-hover:scale-110 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1">Goods & Logistics (Trucks)</h3>
                            <p className="text-purple-600 font-medium text-sm mb-3">Reliable goods transport & logistics.</p>
                            <p className="text-slate-500 mb-6 flex-grow">Need to move house or send a business delivery? We have 3-Wheeler Tempos for boxes and Tata Ace trucks for furniture.</p>
                            <button
                                onClick={() => navigate('/ride', { state: { serviceType: 'truck' } })}
                                className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services/Features Section - LIGHT GRAY BG */}
            <section className="py-24 relative bg-slate-50 w-full overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Experience the Difference</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Transporter?</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            We're redefining mobility with safety, transparency, and innovation at the core.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                        <FeatureCard
                            image={noSurgeImg}
                            title="No Surge Pricing, Ever"
                            desc="Raining? Heavy traffic? Peak hours? Our rates stay the same. Stop guessing the price and start saving money."
                            delay={0.1}
                        />
                        <FeatureCard
                            image={superAppImg}
                            title="Super App Experience"
                            desc="Book rides, move furniture, and send items - all from a single, dynamically designed application."
                            delay={0.2}
                        />
                        <FeatureCard
                            image={paymentImg}
                            title="Seamless Payments"
                            desc="Go cashless with our integrated wallet. Pay via UPI, Card, or Cash securely in seconds."
                            delay={0.3}
                        />
                        <FeatureCard
                            image={liveTrackingImg}
                            title="Live Tracking"
                            desc="Share your ride details with loved ones. Watch your ride arrive in real-time on the map."
                            delay={0.4}
                        />
                        <FeatureCard
                            image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                            title="Unmatched Safety"
                            desc="Every ride is tracked in real-time. Our SOS features and vetted drivers ensure your peace of mind."
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>

            {/* App Download Section - WHITE BG */}
            <section className="py-4 md:py-8 bg-white relative overflow-hidden w-full">
                {/* Background Image with 50% Opacity */}
                <div className="absolute inset-0 z-0 opacity-50">
                    <img src={appBgImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <h2 className="text-2xl md:text-5xl font-heading font-bold text-slate-900 px-4">
                            Ready to get to your destination at the best price?
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto px-4">
                            Join thousands of Indians choosing fair prices and reliable rides. Download Transporter Today.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Customer App */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer border border-gray-100">
                            <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 gap-4">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-sm border border-gray-200 shrink-0">
                                    <img src={customerAppImg} alt="Transporter Customer App" className="w-full h-full object-contain" />
                                </div>
                                <div className="hidden md:block text-purple-600 group-hover:translate-x-2 transition-transform">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center md:text-left">Transporter</h3>
                            <p className="text-gray-600 text-sm mb-6 text-center md:text-left">Book rides, track your journey, and enjoy seamless transportation</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.transporter.customer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-slate-900 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors text-center"
                                >
                                    Play Store
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/transporter-customer/id6755738681"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-slate-900 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors text-center"
                                >
                                    App Store
                                </a>
                            </div>
                        </div>

                        {/* Driver App */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer border-2 border-purple-200">
                            <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 gap-4">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-sm border border-gray-200 shrink-0">
                                    <img src={driverAppImg} alt="Transporter Driver App" className="w-full h-full object-contain" />
                                </div>
                                <div className="hidden md:block text-purple-600 group-hover:translate-x-2 transition-transform">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center md:text-left">Transporter Partner</h3>
                            <p className="text-gray-600 text-sm mb-6 text-center md:text-left">Register as a driver, accept rides, and start earning with flexible hours</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.transporterpartner"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors text-center"
                                >
                                    Play Store
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors text-center"
                                >
                                    App Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
