import React from 'react';
import { FolderOpen, Brain, Search, Calendar, Network, Shield } from 'lucide-react';

export const WhatsIncluded: React.FC = () => {
  const features = [
    {
      icon: FolderOpen,
      title: "Smart Folders",
      description: "Intelligent organization that adapts to your thinking patterns"
    },
    {
      icon: Brain,
      title: "AI Memory",
      description: "Context-aware recall that remembers what matters most"
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Find information by meaning, not just keywords"
    },
    {
      icon: Calendar,
      title: "Life Dashboard",
      description: "Unified view of your commitments, projects, and priorities"
    },
    {
      icon: Network,
      title: "Connection Mapping",
      description: "Visual relationships between people, ideas, and projects"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your data stays yours with enterprise-grade protection"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Structured background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="included-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#included-grid)" />
          
          {/* Organized grid lines */}
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="1,6" opacity="0.15">
            <path d="M200,200 L800,200" />
            <path d="M200,300 L800,300" />
            <path d="M200,400 L800,400" />
            <path d="M300,150 L300,450" />
            <path d="M500,150 L500,450" />
            <path d="M700,150 L700,450" />
          </g>
          
          {/* Connection nodes */}
          <g fill="#A974FF" opacity="0.4">
            <circle cx="300" cy="200" r="2" />
            <circle cx="500" cy="300" r="2" />
            <circle cx="700" cy="400" r="2" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What's Included in Your
            <br />
            <span className="relative">
              Custom Build
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
            </span>
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto mb-8 border border-gray-200">
            <p className="text-lg text-gray-700 font-medium mb-2">
              <span className="text-[#A974FF] font-semibold">Each build is custom and bespoke.</span>
            </p>
            <p className="text-gray-600">
              Your RippleCoreOS is designed specifically for your life, work, and thinking patterns.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-md hover:border-[#A974FF] border border-transparent transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#A974FF] group-hover:text-white transition-all duration-300 shadow-sm">
                    <feature.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-black group-hover:text-[#A974FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every component is tailored to your specific needs, workflows, and mental models. 
            <span className="text-[#A974FF] font-semibold"> No two RippleCoreOS builds are the same.</span>
          </p>
        </div>
      </div>
    </section>
  );
};