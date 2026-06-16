"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
            if (["hero", "reviews"].includes(entry.target.id)) {
              setActiveSection("");
            } else {
              setActiveSection(`#${entry.target.id}`);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    const sections = ["hero", "reviews", ...navItems.map((item) => item.href.substring(1))];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 ${scrolled ? "py-2" : "py-4 sm:py-6"
        }`}
    >
      <div className="mx-auto relative max-w-7xl flex items-center justify-between sm:justify-start px-2 sm:px-10 py-2 sm:py-4 transition-all duration-500 ease-in-out">
        {/* Logo pill */}
        <a 
          href="#" 
          className="relative z-10 inline-flex items-center shrink-0 px-3 py-1.5 sm:px-6 sm:py-3 rounded-full transition-all duration-500 bg-[#0a0f1e]/60 border border-white/[0.08] backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <span className="hidden sm:inline text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Baibhab<span className="text-[#38bdf8]">.</span>
          </span>
          <span className="sm:hidden text-sm font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {scrolled ? <>B<span className="text-[#38bdf8]">.</span></> : <>Baibhab<span className="text-[#38bdf8]">.</span></>}
          </span>
        </a>

        {/* Nav links pill — absolutely centered on all screens */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-0.5 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-[#0a0f1e]/60 border border-white/[0.08] backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-base font-bold transition-colors duration-300 rounded-full ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}