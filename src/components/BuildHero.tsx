import React from 'react';

export const BuildHero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="build-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#build-dots)" />
          
          {/* Clean, structured lines */}
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="1,4" opacity="0.3">
            <path d="M200,200 L800,200" />
            <path d="M200,300 L800,300" />
            <path d="M200,400 L800,400" />
            <path d="M500,100 L500,500" />
          </g>
          
          {/* Intersection points */}
          <g fill="#000" opacity="0.2">
            <circle cx="500" cy="200" r="2" />
            <circle cx="500" cy="300" r="2" />
            <circle cx="500" cy="400" r="2" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 leading-tight">
          The Ripple<span className="text-[#A974FF]">Core</span>OS
          <br />
          <span className="relative">
            Build
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ripple<span className="text-[#A974FF]">Core</span>OS is a custom-built second brain for people managing complex lives, decisions, and work. We build it with you — <span className="text-[#A974FF] font-semibold">relentlessly</span>, with <span className="text-black font-semibold">precision</span>.
        </p>
        <a 
          href="/build" 
          className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-[#A974FF] transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Apply for Build
        </a>
      </div>
    </section>
  );
};