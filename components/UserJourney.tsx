'use client';

import { 
  Mic, 
  Camera, 
  Brain, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Smartphone,
  Phone
} from 'lucide-react';

const journeySteps = [
  {
    step: 1,
    icon: Mic,
    title: 'Speak Your Question',
    description: 'Ask GRDN AI anything about your crops in your local dialect. Our AI understands 16 local dialects.',
    details: ['Voice recognition in local dialects', 'Natural conversation flow', 'No technical jargon required'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    step: 2,
    icon: Camera,
    title: 'Show Your Crops',
    description: 'Take a photo of your crops, leaves, or any agricultural concern. Our AI analyzes images instantly.',
    details: ['Disease detection', 'Pest identification', 'Nutrient deficiency analysis'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    step: 3,
    icon: Brain,
    title: 'AI Analysis',
    description: 'Our advanced AI processes your input using millions of agricultural data points to provide accurate insights.',
    details: ['Real-time analysis', 'Expert-level accuracy', 'Contextual recommendations'],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    step: 4,
    icon: MessageCircle,
    title: 'Get Personalized Advice',
    description: 'Receive detailed recommendations in your preferred language, including treatment options and prevention tips.',
    details: ['Actionable solutions', 'Local context awareness', 'Follow-up support'],
    color: 'from-emerald-500 to-green-600'
  }
];

const accessMethods = [
  {
    icon: Smartphone,
    title: 'Smartphone App',
    description: 'Full-featured Android application with voice, camera, and messaging capabilities.',
    features: ['Voice interaction', 'Photo analysis', 'Offline mode', 'Real-time chat']
  },
  {
    icon: Phone,
    title: 'USSD Short Codes',
    description: 'Simple *123*GRDN# codes work on any phone, even without internet or smartphone.',
    features: ['No internet required', 'Works on feature phones', 'AI-generated responses', 'Text-based interaction']
  },
  {
    icon: MessageCircle,
    title: 'Voice Calls',
    description: 'Call our AI system directly for voice-only interaction in areas with limited technology.',
    features: ['Voice-only access', 'Dialect support', 'No app required', 'Immediate assistance']
  }
];

export default function UserJourney() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        {/* User Journey Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">4-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting agricultural insights has never been easier. Follow these simple steps 
              to transform your farming with AI-powered intelligence.
            </p>
          </div>

          {/* Journey Steps */}
          <div className="max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-24 bg-gradient-to-b from-emerald-300 to-green-400 transform -translate-x-1/2 z-0"></div>
                )}
                
                <div className={`flex flex-col lg:flex-row items-center gap-12 mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      Step {step.step}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3 justify-center lg:justify-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className={`relative w-64 h-64 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                      <step.icon className="w-24 h-24 text-white" />
                      
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-gray-900">{step.step}</span>
                      </div>
                      
                      {/* Arrow for next step */}
                      {index < journeySteps.length - 1 && (
                        <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                          <ArrowRight className="w-6 h-6 text-emerald-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access Methods Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiple <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Access Methods</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              GRDN AI works on any device, ensuring every farmer can access AI-powered agricultural insights 
              regardless of their technology level or internet connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {accessMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white mb-4 shadow-lg">
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{method.description}</p>
                </div>
                
                <div className="space-y-3">
                  {method.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}