"use client";

import Link from 'next/link';

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // Remove hash from URL without reloading
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the home page, scroll up smoothly
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
    }
  };

  return (
    <header className="font-space-grotesk fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 relative">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={handleScrollToTop}
              className="text-white font-space-grotesk text-xl tracking-wider hover:text-[#72DCFF] transition-colors duration-300"
            >
              J.C.FAGUNDEZ
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex space-x-8 text-sm font-medium text-white/80">
              <li>
                <a href="#sobre" onClick={(e) => handleScroll(e, 'sobre')} className="cursor-pointer hover:text-[#72DCFF] transition-colors duration-300">
                  SOBRE MIM
                </a>
              </li>
              <li>
                <a href="#experiencias" onClick={(e) => handleScroll(e, 'experiencias')} className="cursor-pointer hover:text-[#72DCFF] transition-colors duration-300">
                  EXPERIÊNCIAS
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="cursor-pointer hover:text-[#72DCFF] transition-colors duration-300">
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#projetos" onClick={(e) => handleScroll(e, 'projetos')} className="cursor-pointer hover:text-[#72DCFF] transition-colors duration-300">
                  PROJETOS
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleScroll(e, 'contato')} className="cursor-pointer hover:text-[#72DCFF] transition-colors duration-300">
                  CONTATO
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
