import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
         {
            role: "Full Stack Developer",
            company: "Dire Dawa American Corner",
            period: "2025 - present",
            description: "Developed and maintained multiple client websites using laravel, Vue, and implemented database solutions with mysql."
        },
        {
            role: "Mobile App Developer (Flutter)",
            company: "AIT Technology.",
            period: "feb 2025 - septemper",
            description: "Leading the mobile development team using Flutter and integrating with node.js backend APIs."
        },
       
        {
            role: "UI/UX Designer",
            company: "AIT Technology.",
            period: "feb 2025 -  sep 2025",
            description: "Designed user-centric interfaces for mobile apps and web platforms, conducting user research and prototyping."
        }
    ];

    return (
        <div className="section-padding bg-light/30 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-4xl font-header font-bold text-dark mb-16 text-center"
                >
                    Work Experience
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ once: false }}
                        className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-ml-px origin-top"
                    ></motion.div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: false }}
                            className={`relative flex items-start mb-12 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:justify-between group`}
                        >

                            {/* Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                                viewport={{ once: false }}
                                className="absolute left-0 w-10 h-10 bg-white border-4 border-primary rounded-full z-10 md:left-1/2 md:-ml-5 flex items-center justify-center"
                            >
                                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                            </motion.div>

                            {/* Content */}
                            <div className="ml-16 md:ml-0 md:w-[45%] p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 rounded-full">
                                    {exp.period}
                                </span>
                                <h3 className="text-xl font-bold text-dark mb-1">{exp.role}</h3>
                                <h4 className="text-gray-500 font-medium mb-4">{exp.company}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
