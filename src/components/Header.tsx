import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/ripple-logo.jpg" 
            alt="RippleCoreOS Logo" 
            className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-semibold text-black">
            Ripple<span className="text-[#A974FF]">Core</span>OS
          </span>
        </div>
      </div>
    </header>
  );
};