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
      <div
        className={`mx-auto relative max-w-7xl items-center rounded-2xl px-6 py-4 sm:px-10
        border transition-all duration-500 ease-in-out
        ${scrolled
            ? "bg-[#030812]/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.98]"
            : "bg-transparent border-transparent scale-100"
          }`}
      >
        {/* LOGO — pinned left */}
        <a href="#" className="relative z-10 inline-flex items-center gap-2 group shrink-0">
          {/* Desktop: always full name */}
          <span className="hidden sm:inline text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Baibhab<span className="text-[#38bdf8]">.</span>
          </span>
          {/* Mobile: full name at top, "B." when scrolled */}
          <span className="sm:hidden text-lg font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-300">
            {scrolled ? <>B<span className="text-[#38bdf8]">.</span></> : <>Baibhab<span className="text-[#38bdf8]">.</span></>}
          </span>
        </a>

        {/* NAV LINKS — Absolutely centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-0.5 sm:gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-xl backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-base font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/10 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
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