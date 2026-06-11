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
                  href="mailto:your@email.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-5 py-4 hover:border-[#38bdf8]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#38bdf8]" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-xs text-zinc-500">
                        your@email.com
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-5 py-4 hover:border-[#38bdf8]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Link className="w-5 h-5 text-[#38bdf8]" />
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
                  href="https://github.com/Baibahb03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-5 py-4 hover:border-[#38bdf8]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-[#38bdf8]" />
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