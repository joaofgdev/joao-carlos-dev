import React from 'react';

interface ExperienceCardProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export function ExperienceCard({ year, title, description, index }: ExperienceCardProps) {
  const isLeft = index % 2 === 0;
  const isCyan = index % 2 === 0;
  const dotColorClass = isCyan ? 'bg-[#72DCFF] shadow-[0_0_15px_#72DCFF]' : 'bg-[#FF5EDC] shadow-[0_0_15px_#FF5EDC]';

  return (
    <div className={`w-full flex md:items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'} relative mb-12 md:mb-24 last:mb-0 group`}>
      {/* Mobile Dot */}
      <div className={`md:hidden absolute left-[16px] top-8 w-4 h-4 rounded-full ${dotColorClass} z-10 transform -translate-x-1/2`} />
      
      {/* Desktop Dot */}
      <div className={`hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full ${dotColorClass} z-10 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-125`} />

      {/* Card Holder */}
      <div className={`w-full pl-12 md:pl-0 md:w-[45%] ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
        <div className={`bg-[#27272A]/40 backdrop-blur-md border border-white/5 hover:border-[#72DCFF]/50 hover:bg-[#27272A]/60 transition-all duration-300 w-full rounded-xl p-8 cursor-default h-full relative overflow-hidden`}>
           <span className="text-[#72DCFF] font-medium text-lg mb-3 block">{year}</span>
           <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h3>
           <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
              {description}
           </p>
        </div>
      </div>
    </div>
  );
}
