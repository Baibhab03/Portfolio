"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Cpu, Code2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // HUD Perspective Tilt
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section className="py-28 px-5 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 drop-shadow-sm">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-slate-400">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid Container with HUD Parallax */}
        <motion.div 
          ref={containerRef}
          style={{ rotateX, scale, transformPerspective: 1200 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          
          {/* Card 1: Main Bio */}
          <motion.div 
            className="md:col-span-2 row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard className="w-full h-full p-8 sm:p-10 flex flex-col justify-center relative group">
              <h3 className="text-2xl font-bold mb-4 text-white">The Journey</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-[1.8] tracking-wide font-medium relative z-10">
                I&apos;m a frontend engineer focused on building responsive websites and modern mobile interfaces with clean UI and smooth interactions. I enjoy transforming complex ideas into polished digital experiences using <span className="text-[#38bdf8] font-semibold">React, Next.js, Flutter,</span> and <span className="text-slate-300 font-semibold">TypeScript</span>. From immersive landing pages and data-rich dashboards to sleek mobile app UIs, my goal is to create interfaces that not only look state-of-the-art but also feel intuitive, lightning-fast, and deeply user-friendly across every device.
              </p>
            </TiltCard>
          </motion.div>

          {/* Card 2: Passion */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TiltCard className="w-full h-full p-6 sm:p-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/0 to-[#38bdf8]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Passion</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Creating intuitive user experiences with obsessive attention to UI detail, motion, and accessibility.
              </p>
            </TiltCard>
          </motion.div>

          {/* Card 3: Specialization */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TiltCard className="w-full h-full p-6 sm:p-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/0 to-slate-400/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-2xl bg-slate-400/10 text-slate-300 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(148,163,184,0.2)]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Engineering</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Architecting scalable frontend systems with modern tooling, type-safety, and optimized performance.
              </p>
            </TiltCard>
          </motion.div>

          {/* Card 4: Visual Eye-Candy / Code Mock */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 row-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TiltCard className="w-full h-full p-6 sm:p-8 relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#38bdf8]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">system_architecture.ts</span>
              </div>
              
              {/* Mock Code Block */}
              <div className="font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                  <span className="text-blue-300">export const</span> <span className="text-[#38bdf8]">buildExperience</span> <span className="text-white">=</span> <span className="text-slate-300">async</span> <span className="text-white">()</span> <span className="text-blue-300">{`=>`}</span> <span className="text-white">{`{`}</span>
                </motion.div>
                <motion.div className="pl-4 sm:pl-8" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                  <span className="text-blue-300">const</span> <span className="text-[#38bdf8]">ui</span> <span className="text-white">=</span> <span className="text-slate-300">await</span> <span className="text-zinc-300">DesignSystem</span>.<span className="text-blue-200">initialize</span><span className="text-white">();</span>
                </motion.div>
                <motion.div className="pl-4 sm:pl-8" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.0 }}>
                  <span className="text-blue-300">const</span> <span className="text-[#38bdf8]">logic</span> <span className="text-white">=</span> <span className="text-slate-300">await</span> <span className="text-zinc-300">FrontendEngine</span>.<span className="text-blue-200">mount</span><span className="text-white">();</span>
                </motion.div>
                <motion.div className="pl-4 sm:pl-8 mt-2" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
                  <span className="text-blue-300">return</span> <span className="text-[#38bdf8]">ui</span>.<span className="text-blue-200">merge</span><span className="text-white">(</span><span className="text-[#38bdf8]">logic</span><span className="text-white">).</span><span className="text-blue-200">deployToProduction</span><span className="text-white">({`{`}</span>
                </motion.div>
                <motion.div className="pl-8 sm:pl-16" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.4 }}>
                  <span className="text-slate-300">performance</span><span className="text-white">:</span> <span className="text-slate-100">100</span><span className="text-white">,</span>
                </motion.div>
                <motion.div className="pl-8 sm:pl-16" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.5 }}>
                  <span className="text-slate-300">aesthetics</span><span className="text-white">:</span> <span className="text-slate-100">'flawless'</span>
                </motion.div>
                <motion.div className="pl-4 sm:pl-8" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.6 }}>
                  <span className="text-white">{`});`}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.7 }}>
                  <span className="text-white">{`};`}</span>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
