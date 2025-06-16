import React from 'react';
import { Eye, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NextGen E-Commerce Platform',
    description: 'A high-performance shopping experience with AI recommendations, real-time stock updates, and blazing speed.',
    image: 'https://source.unsplash.com/800x600/?ecommerce,website',
    link: '#',
  },
  {
    title: 'FinTech Dashboard',
    description: 'Interactive analytics and live data sync for a global fintech solution. Built with React, Tailwind, and D3.',
    image: 'https://source.unsplash.com/800x600/?finance,web',
    link: '#',
  },
  {
    title: 'AI Resume Builder',
    description: 'AI-powered CV generator that creates perfect resumes with one click. Loved by job seekers and HRs.',
    image: 'https://source.unsplash.com/800x600/?resume,technology',
    link: '#',
  },
  {
    title: 'SaaS Landing Page',
    description: 'Conversion-optimized landing page for a SaaS startup. Minimalist, fast, and stunning on mobile.',
    image: 'https://source.unsplash.com/800x600/?saas,landingpage',
    link: '#',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Our <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="mt-6 text-lg text-blue-100">
            We don’t just build websites. We forge digital experiences that slap harder than Monday morning bugs.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
