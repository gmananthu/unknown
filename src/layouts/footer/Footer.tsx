import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">C</span>
                            </div>
                            <span className="ml-3 text-xl font-bold">Company</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Building the future of digital experiences with innovation, creativity, and excellence.
                        </p>
                    </div>

                    {[
                        {
                            title: "Services",
                            links: ["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"]
                        },
                        {
                            title: "Company",
                            links: ["About Us", "Careers", "Blog", "Contact"]
                        },
                        {
                            title: "Support",
                            links: ["Help Center", "Documentation", "API", "Community"]
                        }
                    ].map((section, i) => (
                        <div key={i}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Company. All rights reserved. Built with passion and precision.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer