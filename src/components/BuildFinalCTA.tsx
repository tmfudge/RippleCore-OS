import React from 'react';

export const BuildFinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="final-cta-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#final-cta-dots)" />
          
          {/* Convergence lines with electric lilac highlights */}
          <g stroke="#A974FF" strokeWidth="1" fill="none" strokeDasharray="2,6" opacity="0.6">
            <path d="M200,200 Q500,150 800,200" />
            <path d="M200,400 Q500,350 800,400" />
          </g>
          <g stroke="#fff" strokeWidth="1" fill="none" strokeDasharray="2,6" opacity="0.3">
            <path d="M300,100 L300,500" />
            <path d="M500,100 L500,500" />
            <path d="M700,100 L700,500" />
          </g>
          
          {/* Convergence points */}
          <g fill="#A974FF" opacity="0.8">
            <circle cx="500" cy="200" r="2" />
            <circle cx="500" cy="400" r="2" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to build your
          <br />
          <span className="text-[#A974FF]">second brain</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          This isn't for everyone. It's for people ready to think clearer, act faster, and remember everything that matters.
        </p>
        <a 
          href="/build" 
          className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-[#A974FF] hover:text-white transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Apply for Your Build →
        </a>
      </div>
    </section>
  );
};