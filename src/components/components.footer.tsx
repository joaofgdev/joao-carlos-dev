import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] py-8 sm:py-12 px-4 font-space-grotesk border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Links */}
        <div className="flex gap-6 sm:gap-10 text-white/50 text-sm font-medium tracking-wide mb-8 sm:mb-10">
          <a
            href="https://www.linkedin.com/in/joão-carlos-fagundez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/joaofgdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            GITHUB
          </a>
          <a
            href="https://www.instagram.com/jotafagundezz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            INSTAGRAM
          </a>
          <a
            href="mailto:jotafag.dev@gmail.com"
            className="hover:text-white transition-colors duration-300"
          >
            EMAIL
          </a>
        </div>

        {/* JCF with animated stroke/glow */}
        <div className="relative flex items-center justify-center w-full h-20 sm:h-24 mb-6 sm:mb-8">
          <svg className="w-full max-w-[200px] sm:max-w-[240px] h-full overflow-visible" viewBox="0 0 300 100">
            <defs>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#72DCFF" />
                <stop offset="50%" stopColor="#4285F4" />
                <stop offset="100%" stopColor="#72DCFF" />
              </linearGradient>
              
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Background text fill (Gradient) */}
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="central"
              className="font-bold font-space-grotesk tracking-tighter"
              style={{ fontSize: '70px', fill: 'url(#glowGradient)' }}
            >
              JCF
            </text>

            {/* Animated white stroke outline */}
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="central"
              className="font-bold font-space-grotesk tracking-tighter"
              fill="transparent"
              stroke="white"
              strokeWidth="1.5"
              filter="url(#glow)"
              style={{ 
                fontSize: '70px', 
                strokeDasharray: '40 120', 
                animation: 'text-stroke-glow 6s linear infinite' 
              }}
            >
              JCF
            </text>
          </svg>
        </div>

        {/* Copyright text */}
        <div className="text-white/40 text-sm">
          © {new Date().getFullYear()} João Carlos Fagundez.
        </div>
      </div>
    </footer>
  );
}
