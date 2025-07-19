import React from 'react';
import { Network, Zap, Shield, Sparkles } from 'lucide-react';

export const Solution: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: "Graph-Powered Knowledge",
      description: "Every piece of information connects intelligently. No more lost context or forgotten connections."
    },
    {
      icon: Zap,
      title: "AI Agent Enhancement",
      description: "Your personal AI agents work 24/7 to surface insights, make connections, and amplify your thinking."
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your knowledge stays yours. Enterprise-grade security with local processing options."
    },
    {
      icon: Sparkles,
      title: "Built for Clarity",
      description: "Clean interfaces that reduce cognitive load and help you focus on what matters most."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Organized neural network background */}
      <div className="absolute inset-0 opacity-[0.025]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-solution" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-solution)" />
          
          {/* Organized, connected network with electric lilac highlights */}
          <g stroke="#A974FF" strokeWidth="1" fill="none" strokeDasharray="2,2" opacity="0.4">
            <path d="M200,200 Q400,150 600,200 Q800,250 1000,200" />
            <path d="M500,150 L500,450" />
            <path d="M700,150 L700,450" />
          </g>
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="2,2">
            <path d="M200,300 Q400,250 600,300 Q800,350 1000,300" />
            <path d="M200,400 Q400,350 600,400 Q800,450 1000,400" />
            <path d="M300,150 L300,450" />
            <path d="M900,150 L900,450" />
          </g>
          
          {/* Connected nodes in grid with electric lilac highlights */}
          <g fill="#A974FF" opacity="0.6">
            <circle cx="500" cy="200" r="2" />
            <circle cx="700" cy="300" r="2" />
            <circle cx="500" cy="400" r="2" />
          </g>
          <g fill="#000" opacity="0.4">
            <circle cx="300" cy="200" r="2" />
            <circle cx="900" cy="200" r="2" />
            <circle cx="300" cy="300" r="2" />
            <circle cx="900" cy="300" r="2" />
            <circle cx="300" cy="400" r="2" />
            <circle cx="700" cy="200" r="2" />
            <circle cx="700" cy="400" r="2" />
            <circle cx="900" cy="400" r="2" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            RippleCoreOS is your
            <br />
            <span className="text-gray-600">
              <span className="relative">
                thinking infrastructure
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
              </span>.
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#A974FF] group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#A974FF] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};