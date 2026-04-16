"use client";

import React, { useState } from 'react';

interface SkillCardProps {
  name: string;
  percentage: number;
  level: string;
  index: number;
}

export function SkillCard({ name, percentage, level, index }: SkillCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // SVG Calculations
  const radius = 36;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius; // 226.19
  const targetOffset = circumference - (percentage / 100) * circumference;

  const [currentOffset, setCurrentOffset] = useState(targetOffset);

  const handleMouseEnter = () => {
    // Prevent triggering multiple times while animating
    if (isPlaying) return;
    
    setIsPlaying(true);
    setCurrentOffset(circumference); // Snap offset to 100% (hidden)
    
    // Allow DOM to process the 0ms transition snap, then animate to target
    setTimeout(() => {
      setCurrentOffset(targetOffset);
    }, 50);

    // Release the animation lock after it completes
    setTimeout(() => {
      setIsPlaying(false);
    }, 1050);
  };

  // Logic to alternate colors based on grid position (assuming 4 columns on desktop)
  const isRowEven = Math.floor(index / 4) % 2 === 0;
  const isCyan = isRowEven ? index % 2 === 0 : index % 2 !== 0;

  const colorHex = isCyan ? '#72DCFF' : '#FF5EDC';
  const textColorClass = isCyan ? 'text-[#72DCFF]' : 'text-[#FF5EDC]';

  return (
    <div 
      className="bg-[#18181A] rounded-xl p-6 flex flex-col items-center justify-center border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg cursor-default h-full relative"
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter} // Allow tapping on mobile to trigger animation
    >
      <div className="relative w-24 h-24 mb-6">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle track */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#27272A"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated progress circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={colorHex}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={currentOffset}
            strokeLinecap="round"
            className={`transition-all ${currentOffset === circumference ? 'duration-0' : 'duration-1000 ease-out'}`}
          />
        </svg>
        {/* Percentage label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{percentage}%</span>
        </div>
      </div>
      
      {/* Skill Info */}
      <h3 className="text-white font-bold text-center text-sm md:text-base leading-tight mb-2 tracking-wide uppercase">
        {name}
      </h3>
      <span className={`text-[10px] md:text-xs font-bold tracking-wider uppercase ${textColorClass}`}>
        {level}
      </span>
    </div>
  );
}
