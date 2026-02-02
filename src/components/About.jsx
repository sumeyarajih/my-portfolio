import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side - Animated from Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-72 h-80 md:w-96 md:h-[450px]">
                            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-2xl z-0"></div>
                            <img
                                src="/my-image.jpg"
                                alt="Sumeya Rajih Abass"
                                className="w-full h-full object-cover rounded-2xl shadow-lg relative z-10"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side - Animated from Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">About Me</span>
                        <h2 className="text-4xl font-header font-bold text-dark mb-6">Passionate about creating <br /> meaningful digital solutions.</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            I am Sumeya Rajih Abass, a multi-disciplinary developer and designer. With a background in both software engineering and UI/UX design, I bring a unique perspective to every project.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Whether it's building a complex mobile application with Flutter, crafting a responsive website with React, or designing a user-centric interface, I am dedicated to delivering high-quality results that solve real problems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                            <a
                                href="/cv.pdf"
                                download
                                className="btn-primary flex items-center gap-2"
                            >
                                <FaDownload />
                                Download CV
                            </a>

                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300">
                                    <FaGithub size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-pink-600 hover:text-white transition-all duration-300">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-blue-400 hover:text-white transition-all duration-300">
                                    <FaTwitter size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
