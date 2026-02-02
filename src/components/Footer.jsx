import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-header font-bold mb-6">Let's build something <br /><span className="text-primary">amazing</span> together.</h2>
                        <p className="text-gray-400 text-lg max-w-md mb-8">
                            Open for opportunities in Full Stack Development and UI/UX Design.
                        </p>
                        <a href="sumeyarajih@gmail.com" className="btn-primary inline-block">
                            Say Hello 👋
                        </a>
                    </div>

                    <div className="flex flex-col gap-6 md:items-end">
                        <a href="https://www.linkedin.com/in/sumeya-rajih-1130a52b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-xl text-gray-300 hover:text-white hover:underline transition-all">LinkedIn</a>
                        <a href="https://github.com/sumeyarajih" className="text-xl text-gray-300 hover:text-white hover:underline transition-all">GitHub</a>

                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Sumeya Rajih Abass. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
