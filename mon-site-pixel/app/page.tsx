"use client";
import { motion } from "framer-motion";
import Menu from "@/components/Menu";

// Définition des types pour les projets
interface ProjectProps {
  item: string;
  title: string;
  category: string;
  imgColor?: string;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Le menu déroulant style Pixel */}
      <Menu />
      
      {/* Barre de navigation fixe (Logo) */}
      <nav className="fixed top-0 w-full flex justify-between px-6 md:px-12 py-8 z-40 bg-white/80 backdrop-blur-sm font-bold uppercase tracking-tighter text-xl">
        <span>Futur Développeur Web Front</span>
      </nav>

      {/* 1. Hero Section - Introduction massive */}
      <section className="pt-60 pb-32 px-6 md:px-12">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] leading-[0.8] font-bold tracking-tighter uppercase"
          >
            MONTEL <br /> GABRIEL.
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 max-w-lg text-lg text-neutral-500 font-medium leading-relaxed"
        >
          Moi, je transforme des concepts complexes en interfaces fluides et interactives. 
          Spécialisé dans le développement React et l'animation haut de gamme.
        </motion.p>
      </section>

      {/* 2. Section Expertise - Tes compétences techniques */}
      <section id="competences" className="py-32 px-6 md:px-12 bg-neutral-50 border-y border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <SkillBox 
            title="Developpement web" 
            tech={["HTML", "CSS", "PHP"]} 
          />
          <SkillBox 
            title="Design Graphique" 
            tech={["Photoshop", "After Effect", "Canva"]} 
          />
          <SkillBox 
            title="Webdesign" 
            tech={["UI/UX Design", "Figma", "Responsive Logic"]} 
          />
        </div>
      </section>

      {/* 3. Grille de projets - Tes réalisations */}
      <section id="projets" className="py-32 px-6 md:px-12">
        <div className="flex justify-between items-end mb-20 border-b border-black pb-6">
          <h2 className="text-sm uppercase tracking-widest font-bold text-neutral-400">/ Selected Work</h2>
          <span className="text-[10px] uppercase font-mono text-neutral-400">© 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          <Project item="01" title="Branding" category="Digital Design" imgColor="bg-zinc-900" />
          <Project item="02" title="Experience" category="Web3 Development" imgColor="bg-neutral-200" />
          <Project item="03" title="Editorial" category="Graphic Design" imgColor="bg-zinc-100" />
          <Project item="04" title="Motion" category="3D Animation" imgColor="bg-stone-200" />
        </div>
      </section>

      {/* 4. Footer - Appel à l'action massif */}
      <footer id="contact" className="bg-black text-white py-32 px-6 md:px-12">
        <div className="text-center mb-24">
          <p className="text-zinc-500 uppercase text-xs tracking-[0.3em] mb-8">Un projet en tête ?</p>
          <h2 className="text-[10vw] leading-[0.9] font-bold tracking-tighter uppercase italic">
            Discutons.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-800 gap-8">
          <div className="text-xl font-medium hover:text-zinc-400 cursor-pointer transition">
            montelgabriel@yahoo.com
          </div>
          <div className="flex gap-8 uppercase text-[10px] tracking-widest text-zinc-500 font-bold">
            <a href="https://www.linkedin.com/in/gabriel-montel-824b65358/" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/**
 * Composant pour afficher les blocs de compétences
 */
function SkillBox({ title, tech }: { title: string, tech: string[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">[{title}]</h3>
      <ul className="space-y-2">
        {tech.map((t) => (
          <li key={t} className="text-2xl font-bold tracking-tighter uppercase italic">{t}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Composant pour chaque carte de projet
 */
function Project({ item, title, category, imgColor = "bg-neutral-100" }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group cursor-pointer"
    >
      <div className="flex justify-between text-[10px] uppercase tracking-widest mb-16 font-bold text-neutral-500">
        <span>{item}</span>
        <span>{category}</span>
      </div>
      <div className={`overflow-hidden ${imgColor} aspect-[16/10] mb-8 relative`}>
        {/* Effet de zoom au survol sur le placeholder de l'image */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full opacity-30 group-hover:opacity-100 transition-opacity duration-700 bg-zinc-400" 
        />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-5xl uppercase font-bold tracking-tighter">{title}</h2>
        <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
          <span className="text-xl">→</span>
        </div>
      </div>
    </motion.div>
  );
}