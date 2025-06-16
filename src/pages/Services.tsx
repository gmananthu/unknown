import React from 'react';
import { Code2, MonitorSmartphone, Sparkles, ShieldCheck, PenTool, Zap } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      title: 'Custom Software Development',
      desc: 'Scalable, secure, and high-performance applications tailored to your business needs. Built from scratch with clean code and bad intentions for bugs.',
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-indigo-600" />,
      title: 'Mobile App Development',
      desc: 'Native and cross-platform apps that live rent-free on your users’ phones. Performance so smooth it could replace moisturizer.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
      title: 'UI/UX Design',
      desc: 'Stunning designs that make users say “WOW” and competitors say “HOW?” Pixel-perfect, intuitive, and so pretty it’s illegal in some countries.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      title: 'Cybersecurity & Compliance',
      desc: 'Sleep better knowing your digital fort is guarded by certified nerds wielding firewalls like katanas. GDPR, ISO, and dark magic compliant.',
    },
    {
      icon: <PenTool className="w-8 h-8 text-indigo-600" />,
      title: 'Branding & Identity',
      desc: 'Crafting unique brand voices, visual identities, and logos that slap harder than your morning espresso.',
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: 'Digital Transformation',
      desc: 'Modernizing legacy systems into high-speed, cloud-powered, AI-integrated juggernauts. Say goodbye to slow, say hello to WOW.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Our <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto">
            Crafted with creativity. Delivered with precision. Powered by caffeine and code. Here’s what we can do for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-start group border border-gray-100 hover:-translate-y-1"
              >
                <div className="mb-4 p-3 bg-indigo-50 rounded-full group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Bring Your Idea to Life</h2>
        <p className="text-blue-200 mb-8">Whether it’s code, design, or both — we’ve got your back. Let’s build something amazing together.</p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          Start Your Project
        </button>
      </section>
    </div>
  );
}
