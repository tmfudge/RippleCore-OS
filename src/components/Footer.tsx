import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/ripple-logo.jpg" 
              alt="RippleCoreOS Logo" 
              className="w-6 h-6 rounded-full"
            />
            <span className="text-lg font-semibold text-black">
              Ripple<span className="text-[#A974FF]">Core</span>OS
            </span>
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="/build" className="text-gray-600 hover:text-[#A974FF] transition-colors duration-200">
              Build
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-[#A974FF] transition-colors duration-200">
              Privacy
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-[#A974FF] transition-colors duration-200">
              Terms
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2025 RippleCoreOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};