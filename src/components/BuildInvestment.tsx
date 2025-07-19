import React from 'react';

export const BuildInvestment: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="investment-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#investment-pattern)" />
          
          {/* Elegant geometric lines */}
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="1,8" opacity="0.15">
            <rect x="300" y="200" width="400" height="200" rx="8" />
            <path d="M500,150 L500,450" />
            <path d="M250,300 L750,300" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          <span className="relative">
            Investment & Commitment
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          We work with a small number of clients each quarter. RippleCoreOS is not an app—it's <span className="text-[#A974FF] font-semibold">infrastructure</span> for your brain, business, and bandwidth.
        </p>
        
        <div className="bg-gray-50 p-12 rounded-lg max-w-2xl mx-auto mb-12 border border-gray-100">
          <div className="space-y-6">
            <div className="text-3xl font-bold text-black">$3,000 per month</div>
            <div className="text-lg text-gray-600">4-month minimum commitment</div>
            <div className="text-sm text-gray-500 pt-4">
              Includes all phases, weekly sessions, and complete system handoff
            </div>
          </div>
        </div>
        
        <a 
          href="/build" 
          className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-[#A974FF] transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6"
        >
          Apply for Your Build →
        </a>
        
        <p className="text-sm text-gray-500">
          We'll review your application and follow up for a brief consultation.
        </p>
      </div>
    </section>
  );
};