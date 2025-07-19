import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const BuildPage: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Form */}
      <section className="pt-24 pb-12 bg-white relative overflow-hidden">
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
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-12">
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
        </div>

        {/* Google Form Embed */}
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdd_zLvDkLEoVeKM1NY9MSVRajt-jJV9uj2Zc1ko7LOh_5_8A/viewform?embedded=true" 
              width="640" 
              height="1580" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="border border-gray-200 rounded-lg shadow-sm"
              title="RippleCoreOS Build Application"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};