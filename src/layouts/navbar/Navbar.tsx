import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom

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
              <Link to="/">
                <img src="/logo.png" alt="Workflow" className="h-8 w-auto" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin" className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</Link>
              <Link to="/get-started">
                <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Get Started
                </button>
              </Link>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="px-6 py-8 space-y-6">
            <Link to="/" className="block text-lg text-gray-900" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-lg text-gray-900" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="block text-lg text-gray-900" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/portfolio" className="block text-lg text-gray-900" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link to="/contact" className="block text-lg text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="pt-6 space-y-4">
              <Link to="/signin" className="block w-full text-left text-lg text-gray-600" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              <Link to="/get-started">
                <button className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3 rounded-full" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
