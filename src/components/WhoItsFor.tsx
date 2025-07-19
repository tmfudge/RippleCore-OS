import React from 'react';

export const WhoItsFor: React.FC = () => {
  const users = [
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
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-who" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-who)" />
          
          {/* Hub and spoke network pattern with electric lilac */}
          <g stroke="#A974FF" strokeWidth="1" fill="none" strokeDasharray="1,3" opacity="0.4">
            <circle cx="600" cy="300" r="100" />
            <path d="M600,300 L500,200" />
            <path d="M600,300 L700,200" />
            <path d="M600,300 L750,300" />
          </g>
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="1,3">
            <circle cx="600" cy="300" r="150" opacity="0.2" />
            <circle cx="600" cy="300" r="200" opacity="0.1" />
            
            {/* Radiating connections */}
            <path d="M600,300 L700,400" />
            <path d="M600,300 L500,400" />
            <path d="M600,300 L450,300" />
            <path d="M600,300 L550,250" />
            <path d="M600,300 L650,250" />
          </g>
          
          {/* Professional nodes with electric lilac highlights */}
          <g fill="#A974FF" opacity="0.6">
            <circle cx="600" cy="300" r="3" />
            <circle cx="500" cy="200" r="2" />
            <circle cx="750" cy="300" r="2" />
          </g>
          <g fill="#000" opacity="0.3">
            <circle cx="700" cy="200" r="2" />
            <circle cx="700" cy="400" r="2" />
            <circle cx="500" cy="400" r="2" />
            <circle cx="450" cy="300" r="2" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Built for people with
          <br />
          <span className="text-gray-600">
            <span className="relative">
              powerful lives
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
            </span>.
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {users.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:border-[#A974FF] border border-transparent transition-all duration-300 group">
              <p className="text-lg text-gray-700 font-medium group-hover:text-[#A974FF] transition-colors duration-300">{user}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};