import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Get in <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto">
            We’d love to hear from you. Drop a message, and we’ll get back faster than your backend crashes on production.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" placeholder="you@example.com" className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="5" placeholder="Your message..." className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-6 py-3 rounded-full flex items-center hover:shadow-lg transition">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Office Address</h4>
                <p className="text-gray-600">123 Startup Street, Silicon Valley, CA</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                <p className="text-gray-600">+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Email</h4>
                <p className="text-gray-600">hello@yourcompany.com</p>
              </div>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday – Friday: 9am – 6pm<br />Saturday & Sunday: Panic Deployment Team Only</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
