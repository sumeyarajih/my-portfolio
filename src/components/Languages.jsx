import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
    // Refined list
    const data = [
        { name: "English", level: 75, color: "bg-[#b46a45]" },
        { name: "Harari", level: 100, color: "bg-[#b46a45]" },
        { name: "Arabic", level: 85, color: "bg-[#b46a45]" },
        { name: "Amharic", level: 95, color: "bg-[#b46a45]" },
        { name: "Somali", level: 80, color: "bg-[#b46a45]" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="section-padding bg-white overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-4xl font-header font-bold text-dark mb-12 text-center"
                >
                    Language <span className="text-primary">Skills</span>
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    {data.map((lang, index) => (
                        <motion.div key={index} variants={item} viewport={{ once: false }} className="mb-6">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-lg font-bold text-dark">{lang.name}</span>
                                <span className="text-sm font-medium text-gray-500">{lang.level}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.level}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    viewport={{ once: false }}
                                    className={`h-full rounded-full ${lang.color}`}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Languages;
