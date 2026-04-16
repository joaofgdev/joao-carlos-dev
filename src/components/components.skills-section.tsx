import React from 'react';
import skillsData from '@/constants/skills.json';
import { SkillCard } from './components.skill-card';

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 px-4 font-space-grotesk flex flex-col items-center relative overflow-hidden bg-[#09090B]">
      <div className="max-w-5xl w-full z-10 flex flex-col items-center">
        {/* Title */}
        <div className="mb-20 text-center relative inline-block">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-white tracking-tight">
            {skillsData.pageTitle}
          </h2>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#72DCFF] to-transparent"></span>
        </div>

        {/* CSS Grid for the Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {skillsData.skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              level={skill.level}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
