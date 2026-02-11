import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from "../assets/customer's logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Ride', path: '/ride' },
        { name: 'Drive', path: '/drive' },
        { name: 'About', path: '/about' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/50 py-3 shadow-sm' : 'bg-white/50 backdrop-blur-sm py-5'}`}>
            <div className="w-full px-6 md:px-12 lg:px-16 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src={logoImg} alt="Transporter" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    <span className="text-xl md:text-2xl font-bold font-heading tracking-tight text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        Transporter
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-sm mr-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive(item.path)
                                    ? 'bg-white text-purple-600 shadow-sm'
                                    : 'text-gray-600 hover:text-purple-600 hover:bg-white/60'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
                <div className="p-4 flex flex-col gap-2">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`p-3 rounded-xl font-medium transition-all ${isActive(item.path)
                                ? 'bg-purple-50 text-purple-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
