'use client';

import { 
  Brain, 
  Mic, 
  Cloud, 
  Database, 
  Smartphone, 
  Wifi, 
  Languages,
  Camera,
  MessageSquare
} from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Advanced AI Engine',
    description: 'Deep learning models trained on millions of agricultural data points for accurate crop diagnosis and predictions.',
    features: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics'],
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Mic,
    title: 'Voice Recognition System',
    description: 'Multi-dialect speech recognition with real-time translation capabilities supporting 16 local dialects.',
    features: ['Dialect Recognition', 'Real-time Translation', 'Voice Synthesis'],
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Camera,
    title: 'Image Analysis AI',
    description: 'Sophisticated computer vision algorithms that can identify diseases, pests, and nutrient deficiencies from photos.',
    features: ['Disease Detection', 'Pest Identification', 'Nutrient Analysis'],
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Cloud,
    title: 'Hybrid Cloud Infrastructure',
    description: 'Seamless offline-online functionality ensuring farmers always have access to critical information.',
    features: ['Offline Mode', 'Cloud Sync', 'Edge Computing'],
    gradient: 'from-teal-500 to-green-600'
  },
  {
    icon: Database,
    title: 'Agricultural Knowledge Base',
    description: 'Comprehensive database of crop information, weather patterns, and market data continuously updated by experts.',
    features: ['Crop Database', 'Weather Data', 'Market Intelligence'],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: MessageSquare,
    title: 'Communication Platform',
    description: 'Multi-channel communication system supporting voice, text, USSD, and farmer-to-farmer messaging.',
    features: ['USSD Integration', 'Real-time Messaging', 'Cross-platform'],
    gradient: 'from-pink-500 to-rose-600'
  }
];

export default function TechnologyStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Advanced Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GRDN AI combines multiple cutting-edge technologies to deliver a comprehensive 
            agricultural intelligence platform that works for everyone, everywhere.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.gradient} text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <tech.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                {tech.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {tech.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2">
                {tech.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.gradient}`}></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-gray-200 group-hover:ring-emerald-300 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}