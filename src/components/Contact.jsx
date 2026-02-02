import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-gray-50 overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Get in Touch</span>
                    <h2 className="text-4xl font-header font-bold text-dark">Let's Work Together</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="bg-dark p-10 text-white flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-gray-400 mb-12">
                                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg">Phone</h4>
                                        <p className="text-gray-400">0960989364</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg">Email</h4>
                                        <p className="text-gray-400">sumeyarajih@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg">Location</h4>
                                        <p className="text-gray-400">Available Remote</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-gray-500">© 2026 Sumeya Rajih Abass</p>
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="p-10"
                    >
                     <form
  action="https://formspree.io/f/xvzqbdel"
  method="POST"
  className="space-y-6"
>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Your Name
    </label>
    <input
      type="text"
      name="name"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300"
      placeholder="John Doe"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300"
      placeholder="john@example.com"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Message
    </label>
    <textarea
      name="message"
      rows="4"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none"
      placeholder="Tell me about your project..."
    />
  </div>

  <motion.button
    type="submit"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full btn-primary flex items-center justify-center gap-2"
  >
    Send Message <FaPaperPlane />
  </motion.button>
</form>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
