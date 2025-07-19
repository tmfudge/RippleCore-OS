import React from 'react';

export const BuildPhases: React.FC = () => {
  const phases = [
    {
      number: "01",
      title: "Discovery & Design",
      items: [
        "Personal onboarding and life + work clarity session",
        "Systems mapping and structural design",
        "Secure access setup and preparation",
        "Define your unique mental model hierarchy"
      ]
    },
    {
      number: "02",
      title: "Memory Architecture",
      items: [
        "Organize what matters: people, projects, information, commitments",
        "Build personalized workflows and retrieval systems",
        "Create frictionless interface tailored to your rhythm",
        "Establish context and connection patterns"
      ]
    },
    {
      number: "03",
      title: "Intelligent Flow",
      items: [
        "Simplify how you operate, decide, and communicate",
        "Align decisions, documents, and routines into clarity",
        "Set up daily, weekly, and event-based workflows",
        "Create space for deep focus and informed action"
      ]
    },
    {
      number: "04",
      title: "Calibration & Continuity",
      items: [
        "Weekly working sessions and refinement",
        "Personalization and rhythm tracking",
        "Complete documentation and training",
        "Final handoff with ongoing support options"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Structured background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="phases-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#phases-grid)" />
          
          {/* Process flow lines */}
          <g stroke="#000" strokeWidth="1" fill="none" strokeDasharray="2,6" opacity="0.2">
            <path d="M100,300 Q300,250 500,300 Q700,350 900,300" />
            <path d="M200,200 L200,400" />
            <path d="M400,200 L400,400" />
            <path d="M600,200 L600,400" />
            <path d="M800,200 L800,400" />
          </g>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How We Build Your
            <br />
            <span className="relative">
              RippleCoreOS
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A974FF] to-transparent opacity-60"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured 4-month process designed to create your personalized thinking infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-[#A974FF]">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-[#A974FF] transition-colors duration-300">
                  {phase.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black group-hover:text-[#A974FF] transition-colors duration-300">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0 group-hover:bg-[#A974FF] transition-colors duration-300"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};