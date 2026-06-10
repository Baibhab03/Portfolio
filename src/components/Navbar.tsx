"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (["hero", "reviews", "contact"].includes(entry.target.id)) {
              setActiveSection("");
            } else {
              setActiveSection(`#${entry.target.id}`);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" } 
    );

    const sections = ["hero", "reviews", "contact", ...navItems.map((item) => item.href.substring(1))];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-6 py-4 sm:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
        
        {/* Logo - Leftmost */}
        <motion.div 
          className="pointer-events-auto z-50 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-xl font-extrabold tracking-tight hidden sm:block">
            Baibhab<span className="text-[#38bdf8]">.</span>
          </a>
          {/* Mobile minimal logo to save space */}
          <a href="#" className="text-xl font-extrabold tracking-tight sm:hidden">
            B<span className="text-[#38bdf8]">.</span>
          </a>
        </motion.div>

        {/* Center Nav Pill */}
        <motion.nav
          className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-0.5 sm:gap-2 px-1 sm:px-2 py-1.5 transition-all duration-300 ${
            scrolled
              ? "rounded-full bg-[#0a0f1e]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-transparent border-transparent"
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative z-10 px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium transition-colors duration-200 rounded-full hover:text-white ${
                  isActive ? "text-white" : "text-slate-400"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.06]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </motion.nav>

        {/* Hire Me - Rightmost */}
        <motion.div 
          className="pointer-events-auto z-50 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full font-semibold transition-all duration-300 bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#050a14] text-[10px] sm:text-sm px-3 py-1.5 sm:px-5 sm:py-2 shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]">
            <Sparkles className="w-3.5 h-3.5 hidden sm:block" />
            Hire Me
          </a>
        </motion.div>
        
      </div>
    </header>
  );
}