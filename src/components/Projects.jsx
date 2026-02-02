import React, { useState } from 'react';
import { BsGithub, BsArrowUpRight } from 'react-icons/bs';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            title: "Mobile E-Commerce App",
            category: "Mobile",
            image: "📱",
            description: "A complete mobile shopping experience with cart and payment integration using Flutter.",
            tags: ["Flutter", "Dart", "Firebase"]
        },
        {
            title: "Corporate Dashboard",
            category: "Website",
            image: "💻",
            description: "Admin panel for managing company resources and analytics visualization with React & Laravel.",
            tags: ["React", "Laravel", "MySQL", "Tailwind"]
        },
        {
            title: "Portfolio Design System",
            category: "UI/UX",
            image: "🎨",
            description: "A comprehensive design system created in Figma for a client portfolio.",
            tags: ["Figma", "Prototyping", "Design System"]
        },
        {
            title: "Recipe Sharing Platform",
            category: "Website",
            image: "🍲",
            description: "Social platform for chefs to share and rate recipes built with Vue.js.",
            tags: ["Vue", "Node.js", "PostgreSQL"]
        },
        {
            title: "Cinematic Travel Vlog",
            category: "Video",
            image: "🎬",
            description: "High-energy travel vlog with advanced color grading and motion graphics.",
            tags: ["Premiere Pro", "After Effects", "Color Grading"]
        },
        {
            title: "Finance App Redesign",
            category: "UI/UX",
            image: "💳",
            description: "Modern UI redesign for a fintech application focusing on user accessibility.",
            tags: ["Figma", "User Research", "Wireframing"]
        }
    ];

    const categories = ["All", "Mobile", "Website", "UI/UX", "Video"];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-4xl font-header font-bold text-dark mb-4">Featured <span className="text-primary">Projects</span></h2>
                        <p className="text-gray-600 max-w-xl">
                            Explore my latest work across different domains.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
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
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                            {/* Image Placeholder */}
                            <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">{project.image}</div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-3 bg-white rounded-full text-dark hover:text-primary transition-colors">
                                        <BsGithub size={20} />
                                    </button>
                                    <button className="p-3 bg-white rounded-full text-dark hover:text-primary transition-colors">
                                        <BsArrowUpRight size={20} />
                                    </button>
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
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
