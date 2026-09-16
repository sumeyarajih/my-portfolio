import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
       {
    degree: "Bachelor in Software Engineering",
    school: "Dire Dawa University",
    year: "2022 - 2026",
    description: "Studied software engineering with a focus on mobile application development, algorithms, data structures, software architecture, and system design. Developed practical skills through academic projects and hands-on software development."
},
{
    degree: "AiCE Certification",
    school: "ALX Ethiopia",
    year: "2024",
    description: "Completed training in AI Career Essentials, covering artificial intelligence fundamentals, digital productivity, problem-solving, and the practical use of AI tools in professional environments."
},
{
    degree: "Android Kotlin Development Fundamentals Certification",
    school: "Udacity",
    year: "2024",
    description: "Completed hands-on training in Android development using Kotlin, covering Android fundamentals, user interfaces, activities, layouts, data handling, and building functional mobile applications."
},
{
    degree: "Internship Certification",
    school: "AIT Technology",
    year: "2025",
    description: "Gained practical  experience in Mobile Application development, designing Application using Figma."
},{
degree: "Flutter Certification",
school: "Cursa",
year: "2026",
description: "Completed hands-on training in Flutter and Dart for cross-platform mobile application development, with practical experience building responsive user interfaces and applying UI/UX design principles using Figma."
}

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
