'use client';

import { Image as ImageIcon, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            See GRDN AI in <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI-driven agriculture through our app screenshots 
            and discover how farmers worldwide are transforming their practices.
          </p>
        </div>

        {/* App Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {[
            {
              src: '/Screen_Recording_20250609_203830_Expo Go.jpg',
              title: 'Voice Interface',
              description: 'Speak naturally in your dialect'
            },
            {
              src: '/Screenshot_20250609_203322_Expo Go.jpg',
              title: 'Crop Analysis',
              description: 'AI-powered disease detection'
            },
            {
              src: '/Screenshot_20250609_203140_Expo Go.jpg',
              title: 'Weather Insights',
              description: 'Accurate forecasts and alerts'
            },
            {
              src: '/Screenshot_20250609_203439_Expo Go.jpg',
              title: 'Market Prices',
              description: 'Real-time pricing data'
            },
            {
              src: '/Screenshot_20250610_043147_GRDN AI.jpg',
              title: 'USSD Integration',
              description: 'Access via simple short codes'
            },
            {
              src: '/Screenshot_20250610_043126_GRDN AI.jpg',
              title: 'Farmer-to-Farmer',
              description: 'Connect with fellow farmers'
            }
          ].map((screenshot, index) => (
            <div
              key={screenshot.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-emerald-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <Smartphone className="w-12 h-12 mx-auto mb-3" />
                    <h4 className="text-lg font-bold mb-2">{screenshot.title}</h4>
                    <p className="text-sm opacity-90">{screenshot.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{screenshot.title}</h4>
                <p className="text-gray-600 text-sm">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Available Across All Platforms
              </h3>
              <p className="text-gray-600">
                Access GRDN AI on any device - smartphone, feature phone, or no phone at all
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl mb-4">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Smartphone App</h4>
                <p className="text-gray-600 text-sm">Full-featured Android application with voice and camera capabilities</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl mb-4">
                  <Monitor className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">USSD Access</h4>
                <p className="text-gray-600 text-sm">Simple short codes for feature phones and basic devices</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-2xl mb-4">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Voice Only</h4>
                <p className="text-gray-600 text-sm">Call-based service for areas with limited technology access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}