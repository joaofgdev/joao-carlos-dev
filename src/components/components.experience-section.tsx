import React from 'react';
import experienceData from '@/constants/esperiencia.json';
import { ExperienceCard } from './components.experience-card';

export function ExperienceSection() {
  return (
    <section id="experiencias" className="w-full py-24 px-4 font-space-grotesk flex flex-col items-center relative overflow-hidden">
      <div className="max-w-6xl w-full z-10">
        {/* Title */}
        <div className="mb-24 md:pl-0 pl-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block text-white tracking-tight">
            {experienceData.pageTitle}
            <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-gradient-to-r from-[#72DCFF] to-transparent"></span>
          </h2>
        </div>

        <div className="relative w-full">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:transform md:-translate-x-1/2 z-0"></div>
          
          <div className="flex flex-col relative z-10 w-full pt-4">
            {experienceData.timeline.map((item, index) => (
              <ExperienceCard 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
