'use client';

import { 
  Mic, 
  Scan, 
  Cloud, 
  TrendingUp, 
  GraduationCap, 
  Phone, 
  MessageCircle,
  Wifi,
  WifiOff,
  Languages
} from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Dialect-to-English Voice Interaction',
    description: 'Speak naturally in your local dialect and get instant AI responses in both your language and English.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Scan,
    title: 'AI Crop Disease Detection',
    description: 'Take a photo of your crops and get instant AI-powered disease diagnosis with treatment recommendations.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cloud,
    title: 'Smart Weather Forecasts',
    description: 'Access both offline and online weather data with AI-enhanced predictions tailored to your location.',
    gradient: 'from-purple-500 to-violet-500',
    features: ['Offline Mode', 'Online Updates']
  },
  {
    icon: TrendingUp,
    title: 'Market Price Insights',
    description: 'Get real-time market prices and AI-driven predictions to optimize your selling strategy.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: GraduationCap,
    title: 'Voice Farm School',
    description: 'Learn modern farming techniques through interactive voice lessons in your preferred language.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Phone,
    title: 'USSD Short Code Access',
    description: 'No smartphone or internet? Access GRDN AI through simple USSD codes with AI-generated responses.',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: MessageCircle,
    title: 'Farmer-to-Farmer Messaging',
    description: 'Connect with fellow farmers worldwide with real-time AI translation breaking language barriers.',
    gradient: 'from-pink-500 to-rose-500',
    features: ['Real-time Translation', 'Global Network']
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GRDN AI combines cutting-edge artificial intelligence with agricultural expertise 
            to deliver unprecedented farming solutions accessible to everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {/* Feature Tags */}
              {feature.features && (
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full"
                    >
                      {tag === 'Offline Mode' && <WifiOff className="w-3 h-3" />}
                      {tag === 'Online Updates' && <Wifi className="w-3 h-3" />}
                      {tag === 'Real-time Translation' && <Languages className="w-3 h-3" />}
                      {tag === 'Global Network' && <MessageCircle className="w-3 h-3" />}
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-gray-200 group-hover:ring-emerald-300 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium">
            <Mic className="w-4 h-4" />
            Available in 16 Local Dialects
          </div>
        </div>
      </div>
    </section>
  );
}