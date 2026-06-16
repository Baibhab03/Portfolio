"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Link,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function CTA() {
  return (
    <section className="py-20 px-5" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <TiltCard className="px-8 sm:px-14 py-14 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              {/* Left Side */}
              <div>
                <p className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-5">
                  Available For Freelance Work
                </p>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                    Let&apos;s Build
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-slate-400">
                    Something Great
                  </span>
                </h2>

                <p className="mt-5 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
                  Whether you need a landing page, portfolio website,
                  dashboard, or mobile interface, I&apos;d love to hear about
                  your project and see how I can help bring it to life.
                </p>

                <div className="mt-8 space-y-2 text-sm text-zinc-500">
                  <p>✓ Responsive websites & mobile interfaces</p>
                  <p>✓ React, Next.js, Flutter & TypeScript</p>
                  <p>✓ Usually replies within 24 hours</p>
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-4">

                <a
                  href="mailto:baibhavghosh03@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-5 py-4 hover:border-[#38bdf8]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#38bdf8]" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-xs text-zinc-500">
                        baibhavghosh03@gmail.com
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/baibhab-ghosh-110187384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-5 py-4 hover:border-[#38bdf8]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#38bdf8]">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-xs text-zinc-500">
                        Connect with me
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://github.com/Baibhab03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-5 py-4 hover:border-[#38bdf8]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#38bdf8]">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"></path>
                      <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
                    </svg>
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <p className="text-xs text-zinc-500">
                        Explore my projects
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
