

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Workflow" className="h-8 w-auto" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="px-6 py-8 space-y-6">
            <a href="#" className="block text-lg text-gray-900">Home</a>
            <a href="#" className="block text-lg text-gray-900">About</a>
            <a href="#" className="block text-lg text-gray-900">Services</a>
            <a href="#" className="block text-lg text-gray-900">Portfolio</a>
            <a href="#" className="block text-lg text-gray-900">Contact</a>
            <div className="pt-6 space-y-4">
              <button className="block w-full text-left text-lg text-gray-600">Sign In</button>
              <button className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}