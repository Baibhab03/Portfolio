/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, X } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  {
    title: "My-Shop Storefront",
    description:
      "A responsive e-commerce storefront built with HTML, CSS, and JavaScript. Features product listings, modern layouts, smooth interactions, and a clean shopping experience across desktop and mobile devices.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    gradient: "from-sky-950/40 to-slate-900/80",
    image: "",
    liveLink: "#",
    githubLink: "https://github.com/Baibhab03/Shop",
  },
  {
    title: "Click On",
    description:
      "A mobile-first delivery app interface designed for fast ordering and easy navigation. Built with React Native and TypeScript, focusing on clean UI, intuitive user flows, and responsive performance.",
    tags: ["React Native", "TypeScript", "Mobile UI"],
    gradient: "from-slate-800/60 to-blue-900/40",
    image: "",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "CourseCompass",
    description:
      "A student attendance and course management dashboard designed to simplify academic tracking. Features organized data views, responsive layouts, and a user-friendly interface for everyday use.",
    tags: ["Flutter", "Dart", "Cloud Firestore"],
    gradient: "from-blue-900/30 to-slate-900/90",
    image: "/CourseCompass.png",
    liveLink: "#",
    githubLink: "https://github.com/Baibhab03/Course-Compass",
  },
  {
    title: "Ant Learning Hub",
    description:
      "A responsive website built with React and Tailwind CSS, featuring modern layouts, reusable components, and a clean user experience across all screen sizes.",
    tags: ["Next.js", "React", "Tailwind"],
    gradient: "from-indigo-950/50 to-slate-900/80",
    image: "/AntHub.png",
    liveLink: "https://www.antlearninghub.com/",
    // githubLink: "#",
  },
  {
    title: "Weatherly",
    description:
      "A real-time weather dashboard that fetches live weather data through API integration. Includes location search, detailed forecasts, responsive layouts, and a polished multi-device experience.",
    tags: ["React", "API Integration", "Tailwind"],
    gradient: "from-slate-800/80 to-sky-900/30",
    image: "/Weatherly.png",
    liveLink: "https://weatherly-coral.vercel.app/",
    githubLink: "https://github.com/Baibhab03/Weatherly",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              <TiltCard className="h-full flex flex-col group cursor-pointer" onClick={() => setSelectedProject(p)}>
                {/* Placeholder image with shimmer */}
                <div
                  className={`relative aspect-video bg-gradient-to-b ${p.gradient} overflow-hidden border-b border-white/5 group-hover:border-white/10 transition-colors`}
                >
                  <div className="absolute top-3 right-3 z-30 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    Tap to Expand
                  </div>
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </a>
                    {p.githubLink && (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-[#38bdf8] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitBranch className="w-4 h-4" />
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.title}`}
              className="bg-[#0a0f1e] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`relative aspect-video sm:aspect-[21/9] bg-gradient-to-b ${selectedProject.gradient} w-full flex-shrink-0`}>
                {selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium tracking-widest uppercase">
                    Placeholder
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent h-1/2 mt-auto" />
              </div>

              <div className="p-6 sm:p-10 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-sm text-[10px] sm:text-xs uppercase tracking-widest font-bold bg-[#050a14] text-[#38bdf8] border border-[#38bdf8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 text-white">{selectedProject.title}</h3>
                
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/10">
                  {selectedProject.liveLink && selectedProject.liveLink !== "#" && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </a>
                  )}
                  {selectedProject.githubLink && selectedProject.githubLink !== "#" && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}