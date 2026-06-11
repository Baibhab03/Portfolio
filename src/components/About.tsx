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
              <h3 className="text-2xl font-bold mb-4 text-white">About Me</h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-[1.8] tracking-wide font-medium relative z-10 mb-5">
                I&apos;m a frontend developer who enjoys building modern websites and mobile
                interfaces with clean design and smooth user experiences. I work with{" "}
                <span className="text-[#38bdf8] font-semibold">
                  React, Next.js, Flutter,
                </span>{" "}
                <span className="text-[#38bdf8] font-semibold">
                  Tailwind CSS,
                </span>{" "}
                and{" "}
                <span className="text-[#38bdf8] font-semibold">
                  TypeScript
                </span>{" "}
                to create responsive, visually polished, and user-friendly products.
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-[1.8] tracking-wide font-medium relative z-10">
                As I continue growing as a developer, I&apos;m always exploring new
                techniques, improving my skills, and paying attention to the small details
                that make an interface feel intuitive and enjoyable to use. My goal is
                simple: to build digital experiences that look professional, perform well,
                and work seamlessly across different devices and screen sizes.
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
                Enjoy building clean and intuitive user interfaces with attention to detail, responsiveness, and overall user experience.
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
              <h3 className="text-lg font-bold mb-2 text-white">Growth Mindset</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Continuously learning modern frontend technologies and improving through hands-on projects, experimentation, and real-world development.
              </p>
            </TiltCard>
          </motion.div>

          {/* Card 4: Code Mock */}
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
                <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">build_process.ts</span>
              </div>

              {/* Mock Code Block */}
              <div className="font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="text-blue-300">const</span>{" "}
                  <span className="text-[#38bdf8]">idea</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-slate-100">&quot;Modern Digital Experience&quot;</span>
                  <span className="text-white">;</span>
                </motion.div>

                <motion.div
                  className="pl-4 sm:pl-8"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <span className="text-blue-300">const</span>{" "}
                  <span className="text-[#38bdf8]">stack</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">[</span>
                </motion.div>

                <motion.div
                  className="pl-8 sm:pl-16"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <span className="text-slate-100">&quot;HTML&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-slate-100">&quot;CSS&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-slate-100">&quot;TypeScript&quot;</span>
                  <span className="text-white">,</span>
                </motion.div>

                <motion.div
                  className="pl-8 sm:pl-16"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <span className="text-slate-100">&quot;React&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-slate-100">&quot;Next.js&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-slate-100">&quot;Flutter&quot;</span>
                </motion.div>

                <motion.div
                  className="pl-4 sm:pl-8"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <span className="text-white">];</span>
                </motion.div>

                <motion.div
                  className="pl-4 sm:pl-8 mt-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <span className="text-blue-300">const</span>{" "}
                  <span className="text-[#38bdf8]">project</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-blue-200">build</span>
                  <span className="text-white">(</span>
                  <span className="text-[#38bdf8]">idea</span>
                  <span className="text-white">, </span>
                  <span className="text-[#38bdf8]">stack</span>
                  <span className="text-white">);</span>
                </motion.div>

                <motion.div
                  className="pl-4 sm:pl-8"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  <span className="text-[#38bdf8]">project</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-200">makeResponsive</span>
                  <span className="text-white">();</span>
                </motion.div>

                <motion.div
                  className="pl-4 sm:pl-8"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                >
                  <span className="text-[#38bdf8]">project</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-200">addSmoothInteractions</span>
                  <span className="text-white">();</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                >
                  <span className="text-blue-300">export default</span>{" "}
                  <span className="text-[#38bdf8]">project</span>
                  <span className="text-white">;</span>

                  <span
                    className="text-[#38bdf8] ml-1"
                    style={{
                      animation: "blinkCursor 1s step-end infinite",
                    }}
                  >
                    ▋
                  </span>
                </motion.div>                

              </div>
            </TiltCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
