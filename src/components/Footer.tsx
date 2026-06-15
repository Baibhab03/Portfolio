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
                <a href="mailto:baibhavghosh03@gmail.com" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  baibhavghosh03@gmail.com
                </a>
              </li>
              <li>
                {/* <a href="tel:+919883715782" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  +91 9883715782
                </a> */}
              </li>
            </ul>
            <div className="flex flex-col gap-1">
              <p className="text-[0.65rem] text-slate-500 tracking-wide">Typically replies within 24 hours</p>
              <p className="text-[0.65rem] text-slate-500 tracking-wide">Available for freelance projects</p>
              <div className="flex gap-4 mt-3">
                <a 
                  href="https://github.com/Baibhab03" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"></path>
                    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                   href="https://www.linkedin.com/in/baibhab-ghosh-110187384"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#38bdf8] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Baibhab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
