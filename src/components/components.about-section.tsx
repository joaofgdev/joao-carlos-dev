import Image from "next/image";
import data from "@/constants/sobre_mim.json";
import { StatCard } from "./components.stat-card";
import { FaCodeBranch, FaMugHot, FaRegClock } from "react-icons/fa6";

export function AboutSection() {
  return (
    <section id="sobre" className="w-full max-w-6xl mx-auto px-4 py-32 font-space-grotesk">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 w-full">
        {/* Left Side: Image */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-[15px] border border-white/10 shadow-2xl group">
            <Image
              src="/imagen pessoal 1.jpeg"
              alt="João Carlos"
              fill
              className="object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.about.title}
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-10 w-full max-w-2xl text-justify">
            {data.about.description}
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatCard 
              icon={<FaCodeBranch className="text-[#72DCFF]" size={28} />}
              value="60+"
              label="Repositórios completos"
            />
            <StatCard 
              icon={<FaMugHot className="text-[#D946EF]" size={28} />}
              value="1500"
              label="Copos de Café"
            />
            <StatCard 
              icon={<FaRegClock className="text-[#72DCFF]" size={28} />}
              value="300"
              label="Horas estudadas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
