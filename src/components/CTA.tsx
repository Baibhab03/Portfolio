"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <>
      {/* PRE-FOOTER CTA CARD */}
      <section className="pt-20 pb-10 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <TiltCard className="px-8 sm:px-14 py-16 sm:py-20 text-center">
            {/* Removed ambient glows */}

            <p className="relative z-10 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-6">
              Frontend Developer • Mobile UI • Modern Experiences
            </p>

            <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight max-w-3xl mx-auto">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-white to-slate-400">
                Ready to design your next major breakthrough?
              </span>
            </h2>

            <p className="relative z-10 mt-5 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Frontend-focused websites and mobile interfaces designed for modern
              brands and startups.
            </p>

            <div className="relative z-10 mt-10 flex flex-col items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-bold text-sm shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Let&apos;s Build
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-[0.65rem] text-zinc-600 tracking-wide">
                Personally reviewed • Confidentiality Guaranteed
              </p>
            </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM CTA CARD */}
      <section className="pb-20 pt-10 px-5" id="contact">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <TiltCard className="px-8 sm:px-14 py-14 sm:py-16">
            {/* Removed ambient glows */}

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* Left — Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600">
                  Let&apos;s Build Something{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-slate-400">
                    Modern
                  </span>
                </h2>
                <p className="mt-3 text-zinc-500 text-sm leading-relaxed max-w-sm">
                  Frontend-focused web and mobile experiences crafted with clean UI
                  and smooth interactions.
                </p>
              </div>

              {/* Right — Form */}
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Full Name</label>
                  <input type="text" required placeholder="Your name"
                    className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Email Address</label>
                  <input type="email" required placeholder="your@email.com"
                    className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Project Type</label>
                  <input type="text" placeholder="Landing page, app UI, dashboard, portfolio..."
                    className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Project Details</label>
                  <textarea rows={4} placeholder="Briefly describe your project, goals, or preferred style..."
                    className="w-full rounded-xl bg-black/40 border border-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-colors resize-y" />
                </div>

                  <button type="submit" disabled={status !== "idle"}
                    className={`self-start inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mt-1 ${
                      status === "sent"
                        ? "bg-slate-500 text-white"
                        : "bg-[#38bdf8] text-[#050a14] shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_36px_rgba(56,189,248,0.3)]"
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {status === "idle" && (<>Send Inquiry <Send className="w-4 h-4" /></>)}
                    {status === "sending" && (<span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />)}
                    {status === "sent" && (<>Sent! <CheckCircle className="w-4 h-4" /></>)}
                  </button>

                <p className="text-[0.65rem] text-zinc-600 text-center tracking-wide">
                  Usually responds within 24 hours
                </p>
              </form>
            </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
