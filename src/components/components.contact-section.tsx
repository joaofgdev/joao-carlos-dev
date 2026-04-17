import React from 'react';
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa6';

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-24 px-4 font-space-grotesk flex flex-col items-center justify-center bg-[#18181A]/50 border-t border-white/5">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
          Gostou de <span className="text-[#72DCFF]">Algo?</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center px-4">
          <a
            href="https://wa.me/554691069195"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300 w-full sm:w-auto"
          >
            <FaWhatsapp size={24} />
            Me chame no Whatsapp
          </a>

          <a
            href="mailto:jotafag.dev@gmail.com"
            className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-medium py-4 px-8 rounded-lg transition-colors duration-300 w-full sm:w-auto"
          >
            <FaRegEnvelope size={24} />
            Me chame no Email
          </a>
        </div>
      </div>
    </section>
  );
}
