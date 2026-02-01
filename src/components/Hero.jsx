import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-primary font-bold tracking-wider uppercase mb-4">Software Engineer & UI/UX Designer</h2>
                    <h1 className="text-5xl md:text-7xl font-header font-bold text-dark leading-tight mb-6">
                        Building Digital <br />
                        Experiences with <br />
                        <span className="text-primary">Precision</span> & Passion.
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                        Hi, I'm <strong className="text-dark">Sumeya Rajih Abass</strong>. I design pixel-perfect interfaces and build robust mobile & web applications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#projects" className="btn-primary text-center">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-outline text-center">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-dark">3+</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wide">Years Exp</span>
                        </div>
                        <div className="w-px h-10 bg-gray-300"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-dark">20+</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wide">Projects</span>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center relative">
                    {/* Abstract Shape or Image Placeholder */}
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-light rounded-full flex items-center justify-center overflow-hidden">
                        {/* You can replace this with a real image later */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                        <span className="text-9xl">👩‍💻</span>
                    </div>

                    {/* Floating detail cards (decorative) */}
                    <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                        <span className="text-2xl">🎨</span>
                    </div>
                    <div className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[4000ms]">
                        <span className="text-2xl">📱</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
