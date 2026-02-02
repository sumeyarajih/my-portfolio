import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            degree: "Bachelor in Software Engineering",
            school: "University of Technology",
            year: "2019 - 2023",
            description: "Focus on Mobile Development, Algorithms, and System Design. Graduated with honors."
        },
        {
            degree: "UI/UX Design Certification",
            school: "Google Professional Certificate",
            year: "2023",
            description: "Intensive training on user research, wireframing, prototyping, and testing."
        }
    ];

    return (
        <div className="section-padding bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-header font-bold text-dark mb-12 text-center">Education <span className="text-primary">& Certification</span></h2>

                <div className="space-y-8">
                    {education.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-lg transition-shadow duration-300">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
