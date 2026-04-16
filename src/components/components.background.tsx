'use client';

import { useEffect } from 'react';

export function BackgroundGradient() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.setProperty('--mouse-x', `${x}%`);
      document.body.style.setProperty('--mouse-y', `${y}%`);
    };

    // Set initial custom properties centrally so it does not look broken on load
    document.body.style.setProperty('--mouse-x', '50%');
    document.body.style.setProperty('--mouse-y', '50%');

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
}
