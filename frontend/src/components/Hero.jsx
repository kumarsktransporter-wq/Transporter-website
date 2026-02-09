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
                    className="w-full h-full object-cover object-[58%_10%] scale-[1.5]"
                />
            </div>

            {/* --- MOBILE HEADER (Title) with Background --- */}
            <div className="md:hidden w-full relative h-[60vh] min-h-[300px] flex items-center z-20 overflow-hidden">
                {/* Background Image for Mobile Header Only */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBg}
                        alt="Background"
                        className="w-full h-full object-cover object-[68%_20%] scale-[1]"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="relative z-10 w-full px-6 flex flex-col justify-start pt-24 h-full">
                    <h1 className="text-3xl font-extrabold font-heading text-white leading-tight mb-4 drop-shadow-xl text-right">
                        Stop Paying Surge.<br />
                        <span className="text-white-400">Start Moving Fair.</span>
                    </h1>
                </div>

                <div className="absolute bottom-12 left-0 w-full px-4 py-4 text-center z-10">
                    <p className="text-black text-base font-bold leading-relaxed">
                        Book Autos, Cabs, and Trucks at flat rates all day, every day.
                    </p>
                </div>
            </div>

            {/* --- DESKTOP TITLE (Updated) --- */}
            <div className="hidden md:block absolute top-[15%] right-8 lg:right-80 z-10 text-right max-w-4xl">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold font-heading text-white leading-tight drop-shadow-2xl mb-8 tracking-tight">
                    Stop Paying Surge.<br />
                </h1>
            </div>

            <div className="hidden md:block absolute top-[15%] right-8 lg:right-52 z-10 text-right max-w-4xl">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold font-heading text-white leading-tight drop-shadow-2xl mb-8 tracking-tight">
                    <br />
                    <span className="text-white-400">Start Moving Fair.</span>
                </h1>
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
