"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const techSkills = [
  { name: "HTML5 / CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 80 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 88 },
  { name: "TypeScript", level: 75 },
  { name: "Flutter", level: 75 },
];

const proSkills = [
  { name: "Responsive Design", level: 92 },
  { name: "UI Development", level: 88 },
  { name: "Mobile Interfaces", level: 85 },
  { name: "Performance Optimization", level: 80 },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // HUD Perspective Tilt
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section className="py-28 px-5 relative overflow-hidden" id="skills">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 drop-shadow-sm">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-slate-400">
              Arsenal
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            The core tools and frameworks I use to engineer premium digital experiences.
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          style={{ rotateX, scale, transformPerspective: 1200 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          
          {/* Left Column - Linear Progress Bars (Thin Electric Blue) */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl font-bold mb-2 text-white text-center lg:text-left">Core Technologies</h3>
            {techSkills.map((skill, index) => (
              <div key={skill.name} className="w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-slate-300 tracking-wide">{skill.name}</span>
                  <span className="text-xs font-bold text-[#38bdf8]">{skill.level}%</span>
                </div>
                {/* Track */}
                <div className="w-full h-1 bg-white/[0.03] rounded-none overflow-hidden relative">
                  {/* Fill - Sharp thin line, no heavy shadow */}
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#38bdf8]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Radial Progress Cores */}
          <div className="flex flex-col gap-6 sm:gap-8 mt-4 lg:mt-0">
            <h3 className="text-2xl font-bold mb-2 text-white text-center lg:text-left">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-6 sm:gap-12 justify-items-center lg:justify-items-start">
              {proSkills.map((skill, index) => {
                const radius = 40;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (skill.level / 100) * circumference;

                return (
                  <div key={skill.name} className="flex flex-col items-center gap-3">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background Circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="transparent"
                          stroke="rgba(255,255,255,0.03)"
                          strokeWidth="2"
                        />
                        {/* Animated Progress Circle */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="transparent"
                          stroke="#38bdf8"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset: offset }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        />
                      </svg>
                      {/* Inner Text */}
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-lg font-bold text-white">{skill.level}%</span>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-slate-400 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
