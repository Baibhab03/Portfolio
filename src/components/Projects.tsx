/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  {
    title: "My-Shop Storefront",
    description:
      "A high-converting digital storefront built from raw web fundamentals. Features optimized DOM trees, asset compression, custom CSS grid layouts, and pixel-perfect interactive animation feedback hooks.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    gradient: "from-sky-950/40 to-slate-900/80",
    image: "",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Click On",
    description:
      "An ultra-fast, real-time hyper-local delivery cross-platform application. Integrates complex state management architectures and modular interface components designed for instantaneous checkout transactions.",
    tags: ["React Native", "JavaScript", "Mobile UI"],
    gradient: "from-slate-800/60 to-blue-900/40",
    image: "",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "CourseCompass",
    description:
      "A high-performance mobile attendance tracking dashboard built with cross-platform primitives. Utilizes clean reactive logic streams, asynchronous data models, and native UI caching for zero-latency operations.",
    tags: ["Flutter", "Dart", "Mobile Architecture"],
    gradient: "from-blue-900/30 to-slate-900/90",
    image: "",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Ant Learning Hub",
    description:
      "A premium corporate educational platform engineered for seamless resource distribution. Optimized with Next.js Server-Side Rendering (SSR) for instantaneous page-load performance and advanced SEO structural routing.",
    tags: ["Next.js", "React", "Tailwind"],
    gradient: "from-indigo-950/50 to-slate-900/80",
    image: "/AntHub.png",
    liveLink: "https://www.antlearninghub.com/",
    githubLink: "#",
  },
  {
    title: "Weatherly",
    description:
      "A dynamic environmental telemetry interface that fetches and parses global multi-layered atmospheric API datasets in real time. Features smooth asynchronous telemetry transitions and clean layouts.",
    tags: ["React", "API Integration", "Tailwind"],
    gradient: "from-slate-800/80 to-sky-900/30",
    image: "/Weatherly.png",
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {

  return (
    <section className="py-24 px-5 relative overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 drop-shadow-sm">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-slate-400">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            A selection of projects I&apos;ve recently engineered.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className={`flex flex-col h-full ${i === projects.length - 1 ? "md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TiltCard className="h-full flex flex-col group">
                {/* Placeholder image with shimmer */}
                <div
                  className={`relative aspect-video bg-gradient-to-b ${p.gradient} overflow-hidden border-b border-white/5 group-hover:border-white/10 transition-colors`}
                >
                  {p.image ? (
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm font-medium tracking-widest uppercase">
                        Placeholder
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col relative z-20">
                  <h3 className="text-lg font-bold mb-2 text-white">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {p.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold bg-[#050a14] text-[#38bdf8] border border-[#38bdf8]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </a>
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-[#38bdf8] transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}