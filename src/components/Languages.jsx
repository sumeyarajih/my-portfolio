import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
    const languages = [
        { name: "English", level: 90 },
        { name: "French", level: 75 },
        { name: "Arabic", level: 60 },
        { name: "Spanich", level: 40 }, // Using user spelling if provided, but standardizing to Spanish usually. I'll stick to 'Spanich' if user wrote it, or correct it? I'll correct to Spanish for professionalism unless specified. I'll use Spanish.
        // User requested "lanuage section with percentage progress list dsiplaying percentage like animation".
        // I will use generic languages for placeholder.
    ];

    // Refined list
    const data = [
        { name: "English", level: 95, color: "bg-blue-500" },
        { name: "German", level: 80, color: "bg-red-500" },
        { name: "Arabic", level: 85, color: "bg-green-500" },
        { name: "French", level: 60, color: "bg-purple-500" },
    ];

    return (
        <div className="section-padding bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-header font-bold text-dark mb-12 text-center">Language <span className="text-primary">Skills</span></h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {data.map((lang, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-lg font-bold text-dark">{lang.name}</span>
                                <span className="text-sm font-medium text-gray-500">{lang.level}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.level}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className={`h-full rounded-full ${lang.color}`}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Languages;
