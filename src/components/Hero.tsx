import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        {/* Dotted connection lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          
          {/* Neural connection lines with electric lilac accents */}
          <g stroke="#A974FF" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.4">
            <path d="M100,200 Q300,100 500,300 T900,200" />
            <path d="M200,400 Q400,300 600,500 T1000,400" />
            <path d="M300,150 Q500,50 700,250 T1100,150" />
          </g>
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="2,3">
            <path d="M50,600 Q250,500 450,700 T850,600" />
            <path d="M150,750 Q350,650 550,850 T950,750" />
            <path d="M400,100 Q600,200 800,50 T1200,300" />
            <path d="M80,500 Q280,400 480,600 T880,500" />
            <path d="M250,800 Q450,700 650,900 T1050,800" />
          </g>
          
          {/* Neural nodes with electric lilac highlights */}
          <g fill="#A974FF" opacity="0.6">
            <circle cx="500" cy="150" r="2" />
            <circle cx="700" cy="250" r="2" />
            <circle cx="400" cy="450" r="2" />
          </g>
          <g fill="#000" opacity="0.4">
            <circle cx="200" cy="300" r="2" />
            <circle cx="800" cy="400" r="2" />
            <circle cx="300" cy="600" r="2" />
            <circle cx="600" cy="700" r="2" />
            <circle cx="900" cy="350" r="2" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 leading-tight">
          Your <span className="relative">
            Second Brain
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
          </span>.
          <br />
          <span className="text-gray-600">Reimagined for the <span className="text-[#A974FF] animate-pulse">AI Era</span>.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ripple<span className="text-[#A974FF]">Core</span>OS is a high-functioning second brain for people who <span className="text-[#A974FF] font-semibold">do too much</span>. More than a productivity system — Ripple<span className="text-[#A974FF]">Core</span> is your <span className="text-black font-semibold">intelligent infrastructure</span>. Built with <span className="text-[#A974FF] font-semibold">AI agents</span>. Designed for <span className="text-black font-semibold">real life</span>.
        </p>
        
        <div className="space-y-4">
          <a 
            href="/build" 
            className="inline-block border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-[#A974FF] hover:text-white hover:border-[#A974FF] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Apply for Custom Build
          </a>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            <span className="font-medium text-gray-700">Limited availability.</span> We work with a select number of clients each quarter to ensure exceptional quality.
          </p>
        </div>
      </div>
    </section>
  );
};