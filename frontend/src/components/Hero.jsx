// Hero Component - Main landing section
import React from 'react';
import BookingWidget from './BookingWidget';
import { ShieldCheck, Zap } from 'lucide-react';

import HeroBg from '../assets/main2.jpg';

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col md:flex-row items-start md:items-center md:pt-20 pb-0 md:pb-20 overflow-x-hidden bg-gray-50 md:bg-transparent">

            {/* --- DESKTOP BACKGROUND (Hidden on Mobile) --- */}
            <div className="hidden md:absolute md:inset-0 md:z-0 md:block">
                <img
                    src={HeroBg}
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* --- MOBILE HEADER (Title) with Background --- */}
            <div className="md:hidden pt-28 pb-32 w-full text-center z-20 px-2 relative">
                {/* Background Image for Mobile Header Only */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBg}
                        alt="Background"
                        className="w-full h-full object-cover object-[50%_20%]"
                    />
                </div>
                <div className="relative z-10">
                    <h1 className="text-lg font-black font-heading text-orange-500 leading-tight mb-0 drop-shadow-lg text-left">
                        Stop Paying Surge.<br />Start Moving Fair.
                    </h1>
                </div>
            </div>

            {/* --- MOBILE SUBTEXT (Moved Down) --- */}
            <div className="md:hidden w-full px-6 pt-0 pb-4 text-center z-10 relative">
                <p className="text-black text-sm font-medium leading-relaxed drop-shadow-sm">
                    Book Autos, Cabs, and Trucks at flat rates all day, every day.
                </p>
            </div>

            {/* --- DESKTOP TITLE (Updated) --- */}
            <div className="hidden md:block absolute top-[15%] right-8 lg:right-16 z-10 text-right max-w-2xl">
                <h1 className="text-lg lg:text-xl font- font-heading text-white leading-tight layer-shadow drop-shadow-lg mb-6">
                    Stop Paying Surge.<br />Start Moving Fair.
                </h1>
                <div className="flex flex-col items-end gap-2 mr-1">
                    <p className="text-lg lg:text-xl font-medium text-white shadow-black/20 drop-shadow-md font-heading leading-relaxed">
                        Book Autos, Cabs, and Trucks at flat rates all day, every day.
                    </p>
                    <p className="text-lg lg:text-xl font-medium text-white shadow-black/20 drop-shadow-md font-heading leading-relaxed">
                        Whether you need to reach the office or shift your home,<br />
                        <span className="text-yellow-400 font-bold">Transporter</span> is India's most honest movement app.
                    </p>
                </div>
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="w-full flex-grow flex flex-col md:flex-row justify-start items-start md:items-start relative z-10 max-w-7xl mx-auto md:px-6 lg:px-8 pt-2 md:pt-12">

                {/* Booking Widget Wrapper */}
                <div className="w-full md:max-w-md px-4 md:px-0 z-20">
                    <BookingWidget />
                </div>

                {/* --- MOBILE FOOTER IMAGE (Down & After Form) --- */}


            </div>
        </div>
    );
};

export default Hero;
