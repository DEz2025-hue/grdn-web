'use client';

import { Mail, Phone, MapPin, Globe, MessageCircle, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-green-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">GRDN AI</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Empowering farmers worldwide with AI-driven agriculture solutions. 
              Bridging the gap between traditional farming and modern technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">16 Languages</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Real-time Translation</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-300">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 transition-colors duration-200">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">michaelcollins1406@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 transition-colors duration-200">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+231 88 620 5601</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 transition-colors duration-200">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">USSD Code</p>
                  <p className="font-medium">*123*GRDN#</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 transition-colors duration-200">
                <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Headquarters</p>
                  <p className="font-medium">Paynesville, Liberia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'Download App',
                'User Guide',
                'Supported Languages',
                'Farmer Stories',
                'API Documentation',
                'Privacy Policy',
                'Terms of Service'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-emerald-300 transition-colors duration-200 text-sm font-medium hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 GRDN AI. All rights reserved. Revolutionizing agriculture through artificial intelligence.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                Made with <span className="text-emerald-400">❤️</span> for farmers in Liberia 🇱🇷
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500"></div>
    </footer>
  );
}