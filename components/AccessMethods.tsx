'use client';

import { 
  Smartphone, 
  Phone, 
  MessageCircle, 
  Wifi, 
  WifiOff,
  Languages,
  Camera,
  Mic
} from 'lucide-react';

const platforms = [
  {
    icon: Smartphone,
    title: 'Android Application',
    description: 'Full-featured smartphone app with all GRDN AI capabilities in your pocket.',
    features: [
      { icon: Camera, text: 'Photo-based crop analysis' },
      { icon: Mic, text: 'Voice interaction in local dialects' },
      { icon: Wifi, text: 'Online weather and market data' },
      { icon: WifiOff, text: 'Offline mode for remote areas' }
    ],
    requirements: 'Android 6.0+, 2GB RAM',
    availability: 'Available now',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Phone,
    title: 'USSD Short Codes',
    description: 'Access GRDN AI through simple codes on any mobile phone, even without internet.',
    features: [
      { icon: MessageCircle, text: 'Text-based AI responses' },
      { icon: Languages, text: 'Multi-language support' },
      { icon: WifiOff, text: 'No internet required' },
      { icon: Phone, text: 'Works on feature phones' }
    ],
    requirements: 'Any mobile phone with USSD support',
    availability: 'Dial *123*GRDN#',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: MessageCircle,
    title: 'Voice Call System',
    description: 'Direct voice interaction with AI for farmers in areas with limited technology access.',
    features: [
      { icon: Mic, text: 'Voice-only interaction' },
      { icon: Languages, text: 'Dialect recognition' },
      { icon: Phone, text: 'No app installation needed' },
      { icon: MessageCircle, text: 'Immediate AI assistance' }
    ],
    requirements: 'Any phone with voice calling',
    availability: 'Call +254-XXX-GRDN',
    gradient: 'from-purple-500 to-indigo-600'
  }
];

export default function AccessMethods() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Access GRDN AI <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Anywhere</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you have a smartphone, feature phone, or no phone at all, 
            GRDN AI ensures every farmer can access AI-powered agricultural intelligence.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {platforms.map((platform, index) => (
            <div
              key={platform.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${platform.gradient} text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <platform.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {platform.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                {platform.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${platform.gradient} flex items-center justify-center`}>
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Requirements & Availability */}
              <div className="border-t border-gray-100 pt-6 space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">Requirements:</span>
                  <p className="text-sm text-gray-700">{platform.requirements}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Access:</span>
                  <p className="text-sm font-bold text-emerald-700">{platform.availability}</p>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-gray-200 group-hover:ring-emerald-300 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Connectivity Info */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Universal Accessibility</h3>
            <p className="text-lg mb-6 opacity-90">
              GRDN AI works in both online and offline modes, ensuring farmers in remote areas 
              can always access critical agricultural information when they need it most.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5" />
                <span className="font-medium">Online Features</span>
              </div>
              <div className="flex items-center gap-2">
                <WifiOff className="w-5 h-5" />
                <span className="font-medium">Offline Capabilities</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5" />
                <span className="font-medium">16 Local Dialects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}