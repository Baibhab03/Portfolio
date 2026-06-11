/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TypewriterHeadline from "@/components/ui/TypewriterHeadline";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-5 sm:px-8 pt-28 pb-10">
      
      {/* Removed ambient glow since BlueprintCanvas handles background */}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full w-full max-w-7xl mx-auto">
        
        {/* Left Column - Text Area */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
          <motion.p
            className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#38bdf8] mb-4 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello, It&apos;s Me
          </motion.p>
          
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05] mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 drop-shadow-sm">
              Baibhab
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-8 flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-zinc-400">I build</span>
              <TypewriterHeadline />
          </motion.div>

          <motion.p
            className="max-w-xl text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide mb-10 px-2 lg:px-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
           Crafting responsive websites and modern mobile experiences with clean UI, smooth interactions, and attention to detail.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto px-4 lg:px-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-[#050a14] font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:scale-105"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#38bdf8]" />
              <span className="relative z-10">View My Work</span>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-zinc-600/50 bg-[#0a0f1e]/80 backdrop-blur-sm text-zinc-300 font-medium text-sm sm:text-base hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:text-white transition-all duration-300"
            >
              Start a Project &rarr;
            </a>
          </motion.div>
        </div>

        {/* Right Column - Orbital Avatar */}
        <motion.div 
          className="flex justify-center items-center order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] mx-auto lg:ml-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Blueprint Glow Behind Avatar */}
          <div className="absolute inset-0 bg-[#38bdf8]/10 blur-[80px] mix-blend-screen rounded-full" />
          
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Inner Ring (Clockwise) - Electric Blue */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-[#38bdf8]/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            {/* Outer Dashed Ring (Counter-clockwise) - Chrome */}
            <motion.div 
              className="absolute -inset-6 rounded-full border border-dashed border-zinc-500/50 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Image Container */}
            <div className="absolute inset-5 sm:inset-6 rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/10 group cursor-pointer">
              <img 
                src="/Avatar.jpeg" 
                alt="Baibhab Avatar"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}