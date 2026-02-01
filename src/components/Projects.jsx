import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Mobile E-Commerce App",
            category: "Flutter",
            description: "A complete mobile shopping experience with cart and payment integration.",
            tags: ["Flutter", "Dart", "Firebase"]
        },
        {
            title: "Corporate Dashboard",
            category: "React & Laravel",
            description: "Admin panel for managing company resources and analytics visualization.",
            tags: ["React", "Laravel", "MySQL", "Tailwind"]
        },
        {
            title: "Portfolio Design System",
            category: "UI/UX",
            description: "A comprehensive design system created in Figma for a client portfolio.",
            tags: ["Figma", "Prototyping", "Design System"]
        },
        {
            title: "Recipe Sharing Platform",
            category: "Vue.js",
            description: "Social platform for chefs to share and rate recipes.",
            tags: ["Vue", "Node.js", "PostgreSQL"]
        }
    ];

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-4xl font-header font-bold text-dark mb-4">Featured Projects</h2>
                        <p className="text-gray-600 max-w-xl">
                            A selection of my recent work in mobile, web, and design.
                        </p>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center font-medium text-primary hover:text-dark transition-colors">
                        View Github <span className="ml-2">→</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Image Placeholder */}
                            <div className="h-64 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                <span className="text-4xl opacity-20">🖥️</span>
                            </div>

                            <div className="p-8 relative bg-white border-t border-gray-100">
                                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <a href="#" className="absolute top-8 right-8 w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    ↗
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="btn-outline">View Github</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
