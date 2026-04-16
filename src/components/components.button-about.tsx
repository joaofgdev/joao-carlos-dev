import Link from 'next/link';

interface ButtonAboutProps {
  href: string;
  children: React.ReactNode;
}

export function ButtonAbout({ href, children }: ButtonAboutProps) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#72DCFF] text-black font-semibold tracking-wide hover:bg-[#5bc2e6] transition-colors duration-300"
    >
      {children}
    </Link>
  );
}
