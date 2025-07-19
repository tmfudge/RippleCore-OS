import React from 'react';

export const BuildAudience: React.FC = () => {
  const audience = [
    "CEOs and Founders",
    "C-suite Leaders", 
    "Private Equity and VC operators",
    "Consultants and Advisors",
    "Diplomats and High-stakes Decision-makers",
    "Family Office Leaders and Wealth Managers"
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Professional network background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="audience-dots" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#audience-dots)" />
          
          {/* Professional network pattern */}
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="1,6" opacity="0.2">
            <circle cx="500" cy="300" r="80" />
            <circle cx="500" cy="300" r="120" />
            <path d="M500,300 L420,220" />
            <path d="M500,300 L580,220" />
            <path d="M500,300 L580,380" />
            <path d="M500,300 L420,380" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Designed for
          <br />
          <span className="relative">
            high-functioning professionals
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
          </span>.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {audience.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-[#A974FF] border border-transparent transition-all duration-300 group">
              <p className="text-lg text-gray-700 font-medium group-hover:text-[#A974FF] transition-colors duration-300">{item}</p>
            </div>
          ))}
        </div>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          If you're building something complex — and want <span className="text-[#A974FF] font-semibold">clarity, memory, and capacity</span> — Ripple<span className="text-[#A974FF]">Core</span>OS was made for you.
        </p>
      </div>
    </section>
  );
};