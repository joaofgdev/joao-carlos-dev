"use client";

import React from 'react';

interface ButtonAboutProps {
  href: string;
  children: React.ReactNode;
}

export function ButtonAbout({ href, children }: ButtonAboutProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Se o href for um ID na mesma página (começa com #)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#72DCFF] text-black font-semibold tracking-wide hover:bg-[#5bc2e6] transition-colors duration-300"
    >
      {children}
    </a>
  );
}
