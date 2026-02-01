import React from 'react';

const Skills = () => {
    const designSkills = [
        "UI/UX Design", "Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"
    ];

    const devSkills = [
        "Flutter", "React Native", "React.js", "Vue.js", "Laravel", "MySQL", "PostgreSQL", "JavaScript"
    ];

    return (
        <section id="skills" className="section-padding bg-light/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-header font-bold text-dark mb-4">My Expertise</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Bridging the gap between design and clean code.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Design Skills */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-8 gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl">
                                🎨
                            </div>
                            <h3 className="text-2xl font-bold text-dark">Design</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {designSkills.map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-dark font-medium text-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Development Skills */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-8 gap-4">
                            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-dark text-2xl">
                                💻
                            </div>
                            <h3 className="text-2xl font-bold text-dark">Development</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {devSkills.map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-dark font-medium text-sm hover:border-dark hover:text-dark transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
