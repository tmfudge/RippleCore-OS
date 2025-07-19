import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { WhatsIncluded } from './components/WhatsIncluded';
import { WhoItsFor } from './components/WhoItsFor';
import { BuildPhases } from './components/BuildPhases';
import { BuildInvestment } from './components/BuildInvestment';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BuildPage } from './components/BuildPage';
import { PrivacyPage } from './components/PrivacyPage';

function App() {
  const currentPath = window.location.pathname;

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

  // Simple routing based on pathname
  if (currentPath === '/build') {
    return <BuildPage />;
  }

  if (currentPath === '/privacy') {
    return <PrivacyPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <WhatsIncluded />
      <WhoItsFor />
      <BuildPhases />
      <BuildInvestment />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;