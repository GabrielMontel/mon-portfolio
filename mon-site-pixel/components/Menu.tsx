"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // Typing explicite des variants
  const menuVariants: Variants = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1, 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      scaleY: 0, 
      transition: { duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const linkVariants: Variants = {
    initial: { y: 80, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }),
    exit: (i: number) => ({
      y: 80,
      opacity: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    })
  };

  const links = [
    { name: "Projets", href: "#projets" },
    { name: "Competences", href: "#competences" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Bouton Trigger - On ajoute mix-blend-difference pour le style Pixel */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-6 md:right-12 z-[100] cursor-pointer group mix-blend-difference"
      >
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            {isOpen ? "Fermer" : "Menu"}
          </span>
          <div className="flex flex-col gap-1 w-6">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-full bg-white origin-center"
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-[2px] w-full bg-white"
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-full bg-white origin-center"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-zinc-900 text-white z-[90] origin-top flex flex-col justify-center px-6 md:px-24"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.a
                    custom={i}
                    variants={linkVariants}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[12vw] md:text-[8vw] font-bold uppercase leading-none tracking-tighter hover:italic transition-all inline-block"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}