

import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Star, Users, Award, TrendingUp, ArrowRight, Menu, X } from 'lucide-react';
import Navbar from '../layouts/navbar/Navbar';


export default function Homepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">


            {/* Hero Section */}
            <section className="relative pt-16 overflow-hidden">
                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm">
                                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                                    Trusted by 10,000+ companies worldwide
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                    Build the
                                    <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                                        Future
                                    </span>
                                    Together
                                </h1>

                                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                                    We craft exceptional digital experiences that drive growth, inspire innovation, and transform businesses in the modern era.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-200 shadow-xl flex items-center justify-center group">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center group">
                                        <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                        Watch Demo
                                    </button>
                                </div>

                                <div className="flex items-center space-x-8 pt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white">500+</div>
                                        <div className="text-blue-200 text-sm">Projects Delivered</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white">98%</div>
                                        <div className="text-blue-200 text-sm">Client Satisfaction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white">24/7</div>
                                        <div className="text-blue-200 text-sm">Support</div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                                        <TrendingUp className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-semibold">Revenue Growth</div>
                                                        <div className="text-blue-200 text-sm">+127% this quarter</div>
                                                    </div>
                                                </div>
                                                <div className="text-2xl font-bold text-green-400">↗</div>
                                            </div>

                                            <div className="h-24 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl flex items-end justify-around p-4">
                                                {[40, 65, 45, 80, 95, 70, 100].map((height, i) => (
                                                    <div
                                                        key={i}
                                                        className="bg-gradient-to-t from-blue-400 to-cyan-300 rounded-sm w-3 transition-all duration-1000 delay-[${i * 100}ms]"
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-white/5 rounded-xl p-4">
                                                    <div className="text-white text-lg font-semibold">1.2M+</div>
                                                    <div className="text-blue-200 text-xs">Active Users</div>
                                                </div>
                                                <div className="bg-white/5 rounded-xl p-4">
                                                    <div className="text-white text-lg font-semibold">99.9%</div>
                                                    <div className="text-blue-200 text-xs">Uptime</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-12 opacity-80 animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
                            </div>
                        </div>
                    </div>

                    {/* Curved slope transition */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                        <svg
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="relative block w-full h-16"
                            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                        >
                            <path
                                d="M0,0 C360,120 840,120 1200,0 L1200,120 L0,120 Z"
                                fill="white"
                                className="transition-all duration-300"
                            ></path>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            What We Do Best
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From strategy to execution, we deliver comprehensive solutions that drive meaningful results for your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Digital Strategy",
                                description: "Comprehensive roadmaps that align technology with your business goals and market opportunities."
                            },
                            {
                                icon: <Award className="w-8 h-8" />,
                                title: "Product Design",
                                description: "User-centered design that creates intuitive experiences and drives engagement across all touchpoints."
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Development",
                                description: "Scalable, secure, and performant solutions built with cutting-edge technologies and best practices."
                            }
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                                    <span className="font-semibold">Learn More</span>
                                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "500+", label: "Projects Completed" },
                            { number: "50+", label: "Team Members" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "5", label: "Years Experience" }
                        ].map((stat, i) => (
                            <div key={i} className="group">
                                <div className="text-5xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help you achieve your goals and create something extraordinary together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center group">
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </section>

           
        </div>
    );
}
