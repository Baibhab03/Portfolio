"use client";

import { motion } from "framer-motion";
import { Layers, Code, Gauge } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Crafting modern, accessible, and intuitive interfaces with pixel-perfect precision.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive web & mobile apps using React, Next.js, and modern tooling.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Ensuring lightning-fast load times and smooth 60fps animations across all devices.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-5" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & Stacked Cards */}
          <div className="order-2 lg:order-1 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#39ff14]">
                  Superpowers
                </span>
              </h2>
              <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                A relentless focus on bridging the gap between flawless design and robust, scalable frontend architecture.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="group relative rounded-2xl border border-zinc-800/60 bg-white/[0.02] backdrop-blur-sm p-5 sm:p-6 flex items-start gap-5 transition-all duration-300 hover:border-[#00e5ff]/30 hover:bg-white/[0.04]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#00e5ff] group-hover:text-zinc-950">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Multi-Device Showcase */}
          <div className="order-1 lg:order-2 w-full max-w-[600px] mx-auto lg:ml-auto">
            <motion.div 
              className="relative w-full aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 rounded-full bg-[#00e5ff]/5 blur-[100px] pointer-events-none" />

              {/* 1. Desktop */}
              <motion.div
                className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[85%] aspect-[16/10] will-change-transform"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Frame */}
                <div className="w-full h-full rounded-2xl md:rounded-3xl bg-zinc-800 border border-zinc-700/50 p-1.5 md:p-2 shadow-2xl flex flex-col">
                  {/* Screen */}
                  <div className="w-full flex-1 rounded-xl md:rounded-2xl bg-zinc-950 overflow-hidden relative">
                    {/* Abstract UI content */}
                    <div className="absolute inset-0 p-3 md:p-4 flex flex-col gap-3">
                      <div className="w-full h-4 rounded-md bg-zinc-800/50" />
                      <div className="flex gap-3 flex-1">
                        <div className="w-1/4 h-full rounded-lg bg-zinc-900 border border-zinc-800" />
                        <div className="flex-1 flex flex-col gap-3">
                          <div className="w-full h-24 rounded-lg bg-gradient-to-r from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/20" />
                          <div className="w-full flex-1 rounded-lg bg-zinc-900 border border-zinc-800" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Base / Hinge */}
                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-2 md:h-3 bg-zinc-700 rounded-b-xl shadow-xl" />
              </motion.div>

              {/* 2. Tablet */}
              <motion.div
                className="absolute bottom-[15%] left-[2%] w-[35%] aspect-[3/4] will-change-transform z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                {/* Frame */}
                <div className="w-full h-full rounded-[1.25rem] md:rounded-[1.75rem] bg-zinc-800 border border-zinc-600/50 p-1 md:p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  {/* Screen */}
                  <div className="w-full h-full rounded-[1rem] md:rounded-[1.4rem] bg-zinc-950 overflow-hidden relative border border-black">
                    {/* Abstract UI content */}
                    <div className="absolute inset-0 p-2 md:p-3 flex flex-col gap-2">
                      <div className="w-full h-16 rounded-lg bg-gradient-to-b from-[#39ff14]/10 to-transparent border border-[#39ff14]/20" />
                      <div className="w-full flex-1 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col gap-1.5 p-2">
                         <div className="w-full h-2 rounded bg-zinc-800" />
                         <div className="w-3/4 h-2 rounded bg-zinc-800" />
                         <div className="w-5/6 h-2 rounded bg-zinc-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Phone */}
              <motion.div
                className="absolute bottom-[5%] right-[8%] w-[22%] aspect-[9/19] will-change-transform z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                {/* Frame */}
                <div className="w-full h-full rounded-[1.5rem] md:rounded-[2rem] bg-zinc-700 border border-zinc-500/50 p-1 shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
                  {/* Screen */}
                  <div className="w-full h-full rounded-[1.25rem] md:rounded-[1.75rem] bg-black overflow-hidden relative border border-zinc-900">
                    {/* Dynamic Island */}
                    <div className="absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-1/3 h-3 md:h-4 bg-zinc-950 rounded-full border border-zinc-800 z-10" />
                    
                    {/* Abstract UI content */}
                    <div className="absolute inset-0 pt-7 md:pt-9 p-2 flex flex-col gap-2 bg-gradient-to-b from-zinc-900 to-black">
                      <div className="w-full h-10 rounded-lg bg-gradient-to-r from-violet-500/20 to-transparent border border-violet-500/20" />
                      <div className="w-full flex-1 rounded-lg bg-zinc-950 border border-zinc-800 flex gap-2 p-1.5 flex-wrap">
                        <div className="w-full h-8 rounded-md bg-zinc-900" />
                        <div className="w-full h-8 rounded-md bg-zinc-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
