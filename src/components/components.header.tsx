import Link from 'next/link';

export function Header() {
  return (
    <header className="font-space-grotesk fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 relative">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-white font-space-grotesk text-xl tracking-wider hover:text-[#72DCFF] transition-colors duration-300"
            >
              J.C.FAGUNDEZ
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex space-x-8 text-sm font-medium text-white/80">
              <li>
                <Link href="#sobre" className="hover:text-[#72DCFF] transition-colors duration-300">
                  SOBRE MIM
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="hover:text-[#72DCFF] transition-colors duration-300">
                  EXPERIENCIA
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#72DCFF] transition-colors duration-300">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link href="#projetos" className="hover:text-[#72DCFF] transition-colors duration-300">
                  PROJETOS
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#72DCFF] transition-colors duration-300">
                  CONTATO
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
