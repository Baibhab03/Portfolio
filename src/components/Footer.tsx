import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#050a14]/80 backdrop-blur-xl relative z-10 pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-16">
          {/* Column 1 - Brand */}
          <div className="md:col-span-5 lg:col-span-6">
            <h3 className="text-2xl font-extrabold tracking-tight text-white mb-4">
              Baibhab<span className="text-[#38bdf8]">.</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Frontend-focused websites and mobile interfaces designed for modern brands and startups.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] hover:text-white transition-colors group">
              Let&apos;s Build <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Column 2 - Explore */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
              Connect
            </h4>
            <ul className="flex flex-col gap-4 mb-6">
              <li>
                <a href="mailto:hello@baibhab.dev" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  baibhavghosh03@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  +91 9883715782
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-1">
              <p className="text-[0.65rem] text-slate-500 tracking-wide">Responses within 24-48 hours</p>
              <p className="text-[0.65rem] text-slate-500 tracking-wide">Personal consultation guaranteed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Baibhab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
