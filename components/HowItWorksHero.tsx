'use client';

import { ArrowRight, Brain, Mic, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HowItWorksHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:32px_32px] opacity-30"></div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 animate-pulse flex items-center justify-center">
        <Brain className="w-10 h-10 text-white" />
      </div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-20 animate-pulse delay-1000 flex items-center justify-center">
        <Mic className="w-8 h-8 text-white" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-15 animate-bounce flex items-center justify-center">
        <Smartphone className="w-12 h-12 text-white" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-emerald-300/30 text-emerald-200 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Brain className="w-4 h-4" />
            Advanced AI Technology Explained
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            How <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">GRDN AI</span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-emerald-200">Works</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary technology that makes farming smarter, more accessible, 
            and more profitable for farmers worldwide.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/" className="flex items-center gap-3">
                Try GRDN AI Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-emerald-300 text-emerald-200 hover:bg-emerald-500/20 hover:border-emerald-200 px-10 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              Watch Demo Video
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}