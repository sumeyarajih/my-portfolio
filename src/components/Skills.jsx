import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Skills = () => {
    const services = [
        {
            title: "UI/UX Design",
            description: "Creating intuitive and visually appealing user interfaces.",
            skills: [
                { name: "Figma", level: 95 },
                { name: "Adobe XD", level: 90 },
                { name: "Prototyping", level: 85 },
                { name: "User Research", level: 80 },
                { name: "Wireframing", level: 90 },
            ]
        },
        {
            title: "Web Development",
            description: "Building responsive and robust web applications.",
            skills: [
                { name: "React.js", level: 90 },
                { name: "Vue.js", level: 85 },
                { name: "Laravel", level: 80 },
                { name: "Tailwind CSS", level: 95 },
                { name: "MySQL / PostgreSQL", level: 75 },
            ]
        },
        {
            title: "Mobile Development",
            description: "Developing cross-platform mobile apps.",
            skills: [
                { name: "Flutter", level: 95 },
                { name: "React Native", level: 80 },
                { name: "Dart", level: 90 },
                { name: "Firebase", level: 85 },
                { name: "State Management", level: 85 },
            ]
        },
        {
            title: "Video Editing",
            description: "Professional video  editing and post-production.",
            skills: [
                { name: "Adobe Premiere", level: 85 },
                { name: "After Effects", level: 75 },
                { name: "Color Grading", level: 80 },
                { name: "Motion Graphics", level: 70 },
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-dark text-white relative overflow-hidden">
            {/* Background aesthetics */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="mb-12">
                    <h2 className="text-4xl font-header font-bold mb-4">My <span className="text-primary">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl">
                        I offer a comprehensive range of design and development services to bring your ideas to life.
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="overflow-hidden relative w-full">
                    <div className="flex gap-8 animate-scroll hover:pause w-max">
                        {/* Duplicate content for seamless scrolling */}
                        {[...services, ...services].map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[320px] md:min-w-[400px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 group flex flex-col"
                            >
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{service.description}</p>

                                <div className="space-y-4 mb-8 flex-grow">
                                    {service.skills.map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-200">{skill.name}</span>
                                                <span className="text-primary font-bold">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="bg-primary h-full rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a href="#projects" className="inline-flex items-center justify-between w-full p-4 bg-gray-800 rounded-2xl group-hover:bg-primary transition-colors duration-300">
                                    <span className="font-medium">View Projects</span>
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20">
                                        <BsArrowRight className="text-xl" />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
