import { ButtonAbout } from "@/components/components.button-about";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { AboutSection } from "@/components/components.about-section";
import { ExperienceSection } from "@/components/components.experience-section";
import { SkillsSection } from "@/components/components.skills-section";
import { ContactSection } from "@/components/components.contact-section";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 font-space-grotesk pt-20">
        
        {/* Intro text */}
        <h3 className="text-[#72DCFF] text-sm uppercase tracking-[0.2em] font-medium mb-6">
          DISPONÍVEL PARA NOVOS PROJETOS
        </h3>

        {/* Main Title */}
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-2 tracking-tight">
          João Carlos
        </h1>
        
        {/* Gradient subtitle/name */}
        <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#B15EFF] mb-8 pb-2">
          Fagundez
        </h2>

        {/* Description */}
        <p className="text-[#A1A1AA] text-center max-w-2xl text-lg md:text-xl mb-12 leading-relaxed">
          Criando experiências digitais perfeitas por meio de arquitetura moderna full-stack e design intencional.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ButtonAbout href="#sobre">
            SOBRE MIM
          </ButtonAbout>

          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#18181A] border border-white/10">
            <a
              href="https://www.instagram.com/jotafagundezz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/joão-carlos-fagundez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/joaofgdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </main>

      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
