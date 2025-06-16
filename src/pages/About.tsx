// pages/about.tsx or components/AboutUsPage.jsx

import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Who <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">We Are</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-blue-100 max-w-3xl">
            We're a team of passionate innovators, designers, and engineers on a mission to craft exceptional digital experiences that redefine industries and empower brands worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To transform businesses by delivering intuitive, impactful, and innovative digital solutions. We aim to simplify complexity and foster growth through design thinking, cutting-edge technology, and relentless commitment to excellence.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become a globally trusted partner for digital transformation, helping companies of all sizes to thrive in a connected and fast-paced digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <Users className="w-10 h-10 text-indigo-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600 mt-2">Expert Team Members</div>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <Award className="w-10 h-10 text-indigo-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900">15+ Awards</div>
            <div className="text-gray-600 mt-2">Recognized Globally</div>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-10 h-10 text-indigo-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900">300% Growth</div>
            <div className="text-gray-600 mt-2">In Last 2 Years</div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Culture that Breeds Innovation</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
            We believe in open communication, creative freedom, and a fearless approach to problem-solving. Our culture encourages every team member to bring their boldest ideas forward.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-gray-600">We’re honest, transparent, and committed to doing what’s best for our customers and our company.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-gray-600">We embrace new technologies and creative approaches to stay ahead of the curve and deliver real impact.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p className="text-gray-600">Great things happen when we work together — we foster team spirit and shared success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Build the Future Together?</h2>
        <p className="text-blue-200 mb-8">Let’s create something extraordinary. Reach out and let’s start your project today.</p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          Contact Us
        </button>
      </section>
    </div>
  );
}
