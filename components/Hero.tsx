'use client';

import { Download, Smartphone, Sparkles, Leaf, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(6,95,70,0.1)_1px,transparent_0)] bg-[size:24px_24px] opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-br from-lime-200 to-green-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      {/* Animated Background Icons */}
      <div className="absolute top-1/4 left-1/6 opacity-5 animate-float">
        <Leaf className="w-16 h-16 text-green-600" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 opacity-5 animate-float-delayed">
        <MessageSquare className="w-14 h-14 text-emerald-600" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-200 text-emerald-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Sparkles className="w-4 h-4" />
            Next-Generation AI Agriculture Platform
          </div>
          
          {/* Main Heading */}
          <div className="mb-8 flex items-center justify-center">
            <Image
              src="/GRDN AI Logo.png"
              alt="GRDN AI Logo"
              width={500}
              height={180}
              className="mx-auto w-auto h-auto max-w-[80vw]"
              priority
            />
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionize agriculture with AI-powered crop diagnosis, real-time weather insights, 
            and seamless farmer communication. <span className="text-emerald-700 font-medium">Speak your dialect, grow your future.</span>
          </p>
          
          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              'Voice Interaction', 
              'Disease Detection', 
              'Weather Forecasts', 
              'Market Insights',
              'USSD Access',
              'Real-time Translation'
            ].map((feature, index) => (
              <span 
                key={feature} 
                className="bg-white/90 backdrop-blur-sm border border-emerald-200 text-emerald-700 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:bg-emerald-50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {feature}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
              asChild
            >
              <a href="/grdn-ai.apk" download="grdn-ai.apk" className="flex items-center gap-3">
                <Download className="w-6 h-6" />
                Download GRDN AI
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 px-10 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              asChild
            >
              <Link href="/how-it-works" className="flex items-center gap-3">
                <Smartphone className="w-5 h-5" />
                How It Works
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}