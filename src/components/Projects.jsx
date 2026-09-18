import React, { useState } from 'react';
import { BsGithub, BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            title: "pregnancy-App",
            category: "Mobile",
            image: ["/pregnanacy-image1.jpg", "/pregnanacy-image2.jpg"],
            description: "A mobile app for pregnancy tracking and information.",
            tags: ["Flutter", "Node.js", "Postgres"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "arifacademy app",
            category: "Mobile",
            image: ["/arif-academy-image1.jpg", "/arif-academy-image2.jpg"],
            description: "An educational mobile app for Arif Academy.",
            tags: ["Flutter", "Node.js", "Postgres"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "orderUP App",
            category: "Mobile",
            image: ["/order-image1.jpg", "/order-image2.jpg"],
            description: "A mobile app for ordering food or items.",
            tags: ["React Native", "Node.js", "Postgres"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "lostfound App",
            category: "Mobile",
            image: ["/lostfound-image1.jpg", "/lostfound-image2.jpg"],
            description: "A mobile app to report and find lost items.",
            tags: ["Supabase", "Flutter"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "polychat",
            category: "Mobile",
            image: ["/polychat-image1.jpg", "/ploychat-image2.jpg"],
            description: "A mobile chat application for real-time communication.",
            tags: ["Firebase", "Flutter"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "ASK AI App",
            category: "Mobile",
            image: ["/Askai-image1.jpg"],
            description: "An AI-powered mobile application for asking questions.",
            tags: ["Python", "Flutter", "Postgres"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "food recipe",
            category: "Mobile",
            image: ["/foodrecipe-image1.jpg", "/foodrecipe-image2.jpg"],
            description: "A mobile app for discovering and sharing food recipes.",
            tags: ["Node.js", "Flutter"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "hicafe system",
            category: "Website",
            image: "/hicafe system.jpg",
            description: "A web-based system for managing cafe operations.",
            tags: ["React.js", "Node.js", "Postgres"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "hicafe website",
            category: "Website",
            image: "/hicafe web.jpg",
            description: "The official website for Hicafe.",
            tags: ["React"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "wedding card digital",
            category: "Website",
            image: "/wedding card.jpg",
            description: "A platform for creating digital wedding invitations.",
            tags: ["React", "Node.js", "Supabase"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "gorgor gym",
            category: "Website",
            image: "/gorgor gym web.jpg",
            description: "A website for Gorgor Gym.",
            tags: [],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "arif academy",
            category: "UI/UX",
            image: "/figma arif.jpg",
            description: "UI and UX design for the Arif Academy platform.",
            tags: ["Figma"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        },
        {
            title: "pregnanacy App",
            category: "UI/UX",
            image: "/figma pregnanacy.jpg",
            description: "UI and UX design for a pregnancy tracking application.",
            tags: ["Figma"],
            github: "https://github.com/sumeya-rajih",
            demo: ""
        }
    ];

    const categories = ["All", "Mobile", "Website", "UI/UX"];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

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
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="section-padding bg-gray-50 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="mb-6 md:mb-0"
                    >
                        <h2 className="text-4xl font-header font-bold text-dark mb-4">Featured <span className="text-primary">Projects</span></h2>
                        <p className="text-gray-600 max-w-xl">
                            Explore my latest work across different domains.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="flex flex-wrap gap-2"
                    >
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    key={activeCategory}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            {/* Image Placeholder */}
                            <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                                {Array.isArray(project.image) ? (
                                    <div className="flex justify-center items-center gap-4 h-full transform group-hover:scale-105 transition-transform duration-500 w-full relative">
                                        {/* Background blur effect for mobile mockups */}
                                        <div className="absolute inset-0 bg-primary/5 blur-xl"></div>
                                        {project.image.map((img, i) => (
                                            <div key={i} className={`relative w-[90px] h-[180px] border-[4px] border-gray-800 rounded-[1.2rem] overflow-hidden bg-black shadow-xl z-10 ${project.image.length === 2 ? (i === 1 ? 'mt-8 rotate-3' : '-mt-8 -rotate-3') : ''}`}>
                                                {/* Notch */}
                                                <div className="absolute top-0 inset-x-0 h-3 bg-gray-800 rounded-b-lg w-[40px] mx-auto z-20"></div>
                                                <img src={img} className="w-full h-full object-cover" alt="" />
                                            </div>
                                        ))}
                                    </div>
                                ) : typeof project.image === 'string' && (project.image.startsWith('/') || project.image.startsWith('http')) ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">{project.image}</div>
                                )}

                                {/* Overlay (Desktop) */}
                                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-dark hover:text-primary transition-colors cursor-pointer"
                                        title="View Code on GitHub"
                                    >
                                        <BsGithub size={20} />
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-dark hover:text-primary transition-colors cursor-pointer"
                                            title="View Live Demo"
                                        >
                                            <BsArrowUpRight size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider py-1 px-2 bg-primary/10 rounded">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Mobile Actions */}
                                <div className="flex gap-3 mb-4 md:hidden">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-3 rounded-full flex items-center gap-2">
                                        <BsGithub /> Code
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-3 rounded-full flex items-center gap-2">
                                            <BsArrowUpRight /> Live
                                        </a>
                                    )}
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
