import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-problem" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-problem)" />
          
          {/* Scattered, disconnected lines representing chaos with some electric lilac */}
          <g stroke="#A974FF" strokeWidth="1" fill="none" strokeDasharray="3,4" opacity="0.3">
            <path d="M150,100 L300,180" />
            <path d="M600,160 L750,240" />
            <path d="M300,350 L450,270" />
          </g>
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="3,4" opacity="0.6">
            <path d="M400,120 L550,200" />
            <path d="M200,250 L350,180" />
            <path d="M100,300 L250,220" />
            <path d="M500,280 L650,200" />
            <path d="M700,320 L850,240" />
            <path d="M180,400 L330,320" />
            <path d="M520,420 L670,340" />
          </g>
          
          {/* Isolated nodes */}
          <g fill="#A974FF" opacity="0.4">
            <circle cx="400" cy="200" r="1.5" />
            <circle cx="550" cy="320" r="1.5" />
          </g>
          <g fill="#000" opacity="0.3">
            <circle cx="150" cy="150" r="1.5" />
            <circle cx="650" cy="180" r="1.5" />
            <circle cx="250" cy="300" r="1.5" />
            <circle cx="800" cy="280" r="1.5" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          You're not <span className="relative">
            forgetful
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
          </span>.
          <br />
          <span className="text-gray-600">Your <span className="text-[#A974FF]">systems</span> are.</span>
        </h2>
        <div className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-4">
          <p>Modern work is a <span className="text-[#A974FF] font-semibold">mess</span>. Tabs everywhere. Notes scattered.</p>
          <p><span className="text-[#A974FF] font-semibold">AI</span> made it worse—more noise, more apps, less clarity.</p>
          <p>What you need is memory. Structure. A brain outside your brain.</p>
          <p className="font-semibold text-black">That's <span className="text-[#A974FF]">RippleCoreOS</span>.</p>
        </div>
      </div>
    </section>
  );
};