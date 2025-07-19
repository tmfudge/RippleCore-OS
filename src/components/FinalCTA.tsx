import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Neural convergence background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-cta" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
              <circle cx="35" cy="35" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-cta)" />
          
          {/* Converging neural pathways with electric lilac highlights */}
          <g stroke="#A974FF" strokeWidth="1" fill="none" strokeDasharray="2,4" opacity="0.6">
            <path d="M100,100 Q300,200 500,150 Q700,100 900,200" />
            <path d="M300,50 Q300,150 300,250 Q300,350 300,450" />
            <path d="M600,50 Q600,150 600,250 Q600,350 600,450" />
          </g>
          <g stroke="#fff" strokeWidth="1" fill="none" strokeDasharray="2,4">
            <path d="M150,400 Q350,300 550,350 Q750,400 950,300" />
            <path d="M200,250 Q400,150 600,250 Q800,350 1000,250" />
            <path d="M50,350 Q250,250 450,300 Q650,350 850,250" />
            
            {/* Vertical connections */}
            <path d="M900,50 Q900,150 900,250 Q900,350 900,450" />
          </g>
          
          {/* Convergence nodes with electric lilac highlights */}
          <g fill="#A974FF" opacity="0.8">
            <circle cx="300" cy="200" r="2" />
            <circle cx="600" cy="250" r="3" />
            <circle cx="450" cy="300" r="2" />
          </g>
          <g fill="#fff" opacity="0.4">
            <circle cx="900" cy="200" r="2" />
            <circle cx="750" cy="300" r="2" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Stop Managing Information.
          <br />
          <span className="text-[#A974FF]">Start Thinking</span> with It.
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          RippleCoreOS isn't another productivity tool. It's the infrastructure for <span className="text-[#A974FF]">clarity</span> in a complex world.
        </p>
        <a 
          href="/build" 
          className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-[#A974FF] hover:text-white transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Begin Your Build
        </a>
      </div>
    </section>
  );
};