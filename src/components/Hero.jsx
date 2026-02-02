import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12 bg-white relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full mb-4 text-sm tracking-wide uppercase">
                        Available for Freelance
                    </div>
                   <h1 className="text-4xl md:text-5xl lg:text-7xl font-header font-bold text-dark leading-tight mb-6">
  I am{' '}
  <span className="text-primary">
    <TypeAnimation
      sequence={[
        'Sumeya Rajih',
        1000,
        'a UI/UX Designer',
        1000,
        'a Software Engineer',
        1000,
        'a Mobile Developer',
        1000,
        'a Video Editor',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h1>

                    <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        I design pixel-perfect interfaces, build robust mobile & web apps, and create compelling video content.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#projects" className="btn-primary text-center">
                            View My Projects
                        </a>
                        <a href="#contact" className="btn-outline text-center">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-3xl font-bold text-dark">
                                <CountUp end={3} duration={3} />+
                            </span>
                            <span className="text-sm text-gray-500 uppercase tracking-wide">Years Exp</span>
                        </div>
                        <div className="w-px h-10 bg-gray-300"></div>
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-3xl font-bold text-dark">
                                <CountUp end={15} duration={3} />+
                            </span>
                            <span className="text-sm text-gray-500 uppercase tracking-wide">Projects</span>
                        </div>
                        <div className="w-px h-10 bg-gray-300"></div>
                        {/* <div className="flex flex-col items-center lg:items-start">
                            <span className="text-3xl font-bold text-dark">
                                <CountUp end={20} duration={3} />+
                            </span>
                            <span className="text-sm text-gray-500 uppercase tracking-wide">Clients</span>
                        </div> */}
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center relative mt-8 lg:mt-0">
                    {/* Main Image Container */}
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full flex items-center justify-center">
                        {/* Circular Gradient Background */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>

                        {/* Profile Image */}
                        <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src="/my-image.jpg"
                                alt="Sumeya Rajih Abass"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* --- MOCKUPS (Reponsive Positioning: hidden on very small screens, stacked on small) --- */}

                        {/* 1. Mobile App (Top Left) */}
                        <div className="absolute top-0 left-0 md:top-20 md:-left-4 bg-white p-2 rounded-2xl shadow-xl animate-float delay-0 scale-75 md:scale-100 hidden sm:block">
                            <div className="w-16 h-28 rounded-xl border-2 border-gray-800 bg-gray-50 relative overflow-hidden flex flex-col items-center">
                                <div className="w-6 h-1 bg-gray-800 rounded-full mt-1"></div>
                                <div className="w-full h-full p-1 mt-1 space-y-1">
                                    <div className="w-full h-3 bg-green-500 rounded-sm"></div>
                                    <div className="w-full h-2 bg-gray-200 rounded-sm"></div>
                                    <div className="w-2/3 h-2 bg-gray-200 rounded-sm"></div>
                                </div>
                            </div>
                            <p className="text-[10px] text-center font-bold text-green-600 mt-1">Mobile App</p>
                        </div>

                        {/* 2. Video Editing (Top Right) */}
                        <div className="absolute top-0 right-0 md:top-10 md:-right-8 bg-white p-2 rounded-2xl shadow-xl animate-float delay-1000 scale-75 md:scale-100 hidden sm:block">
                            <div className="w-28 h-16 md:w-32 md:h-20 rounded-lg border border-gray-200 overflow-hidden bg-gray-900 relative flex items-center justify-center group">
                                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <FaPlay className="text-white text-xs ml-0.5" />
                                </div>
                            </div>
                            <p className="text-xs font-semibold text-center mt-2 text-purple-600">Video Editing</p>
                        </div>

                        {/* 3. Web Dev (Bottom Left) */}
                        <div className="absolute bottom-0 left-0 md:bottom-12 md:-left-10 bg-white p-2 text-left rounded-2xl shadow-xl animate-float delay-2000 scale-75 md:scale-100 hidden sm:block">
                            <div className="w-28 h-20 md:w-32 md:h-24 rounded-lg border border-gray-200 overflow-hidden bg-white">
                                <div className="h-4 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                                </div>
                            </div>
                            <p className="text-xs font-semibold text-center mt-2 text-blue-600">Web Dev</p>
                        </div>

                        {/* 4. UI/UX (Bottom Right) */}
                        <div className="absolute bottom-0 right-0 md:bottom-20 md:-right-4 bg-white p-2 rounded-2xl shadow-xl animate-float delay-500 scale-75 md:scale-100 hidden sm:block">
                            <div className="w-24 h-16 md:w-28 md:h-20 rounded-lg border border-gray-200 bg-white overflow-hidden p-1 relative">
                                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-orange-100 border border-orange-200"></div>
                                <div className="w-12 h-2 bg-gray-800 rounded-sm mb-2"></div>
                            </div>
                            <p className="text-xs font-semibold text-center mt-2 text-orange-600">UI / UX Design</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
