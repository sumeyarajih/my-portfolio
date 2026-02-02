import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: "Bachelor in Software Engineering",
            school: "Dire Dawa University",
            year: "2022 - 2026",
            description: "Focus on Mobile Development, Algorithms, and System Design. Graduated with honors."
        },
        // {
        //     degree: "UI/UX Design Certification",
        //     school: "Google Professional Certificate",
        //     year: "2023",
        //     description: "Intensive training on user research, wireframing, prototyping, and testing."
        // }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="section-padding bg-gray-50 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-4xl font-header font-bold text-dark mb-12 text-center"
                >
                    Education <span className="text-primary">& Certification</span>
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="space-y-8"
                >
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemAnim}
                            viewport={{ once: false }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="hidden sm:flex w-16 h-16 bg-primary/10 rounded-full items-center justify-center text-primary flex-shrink-0">
                                <FaGraduationCap size={30} />
                            </div>
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                    <h3 className="text-xl font-bold text-dark">{item.degree}</h3>
                                    <span className="text-sm font-bold text-primary bg-primary/5 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{item.year}</span>
                                </div>
                                <h4 className="text-gray-500 font-medium mb-4">{item.school}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
