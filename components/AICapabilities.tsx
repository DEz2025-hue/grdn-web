'use client';

import { 
  Brain, 
  Eye, 
  Mic, 
  Cloud, 
  TrendingUp, 
  MessageSquare,
  Zap,
  Shield,
  Globe,
  CheckCircle
} from 'lucide-react';

const capabilities = [
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced image recognition that can identify diseases, pests, and nutrient deficiencies with 98% accuracy.',
    features: ['Disease detection', 'Pest identification', 'Crop health assessment', 'Growth stage analysis']
  },
  {
    icon: Mic,
    title: 'Natural Language Processing',
    description: 'Understands and responds in 16 local dialects with real-time translation capabilities.',
    features: ['Dialect recognition', 'Real-time translation', 'Context understanding', 'Voice synthesis']
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Machine learning models that predict weather patterns, market prices, and optimal farming decisions.',
    features: ['Weather forecasting', 'Price predictions', 'Yield optimization', 'Risk assessment']
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Natural conversation flow that understands context and provides personalized agricultural advice.',
    features: ['Context awareness', 'Personalized advice', 'Follow-up questions', 'Learning from interactions']
  }
];

const technicalFeatures = [
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast AI responses with edge computing for instant results even in remote areas.'
  },
  {
    icon: Shield,
    title: 'Privacy Protection',
    description: 'End-to-end encryption and local processing ensure your farming data stays secure and private.'
  },
  {
    icon: Globe,
    title: 'Global Knowledge Base',
    description: 'Continuously updated with agricultural research and farmer insights from around the world.'
  },
  {
    icon: Cloud,
    title: 'Hybrid Architecture',
    description: 'Seamless offline-online functionality that works regardless of internet connectivity.'
  }
];

export default function AICapabilities() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the advanced artificial intelligence technologies that power GRDN AI 
            and make it the most sophisticated agricultural platform available.
          </p>
        </div>

        {/* Main Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <capability.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {capability.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Features */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Excellence
            </h3>
            <p className="text-lg text-gray-600">
              Built with enterprise-grade technology for reliability, security, and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-xl">
            <Brain className="w-6 h-6" />
            Powered by Advanced Machine Learning
          </div>
        </div>
      </div>
    </section>
  );
}