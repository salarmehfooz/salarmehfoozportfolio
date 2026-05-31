import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Logo from "./Logo.jsx";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-gold-400/10 pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Logo />
            <p className="font-sans text-xs text-zinc-400 max-w-sm leading-relaxed mt-2">
              Salar Mehfooz is a premier Full Stack MERN developer and creative
              technical engineer constructing high-fidelity, high-intensity
              digital experiences for recruiters and client brands.
            </p>
            <div className="flex gap-4 mt-1">
              <a
                href="https://github.com/salarmehfooz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded border border-gold-500/10 hover:border-gold-500/50 bg-zinc-950 text-zinc-400 hover:text-gold-400 transition-all shadow-[inset_0_0_8px_rgba(197,168,128,0.02)]"
                aria-label="GitHub Profile Link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/salar-mehfooz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded border border-gold-500/10 hover:border-gold-500/50 bg-zinc-950 text-zinc-400 hover:text-gold-400 transition-all shadow-[inset_0_0_8px_rgba(197,168,128,0.02)]"
                aria-label="LinkedIn Profile Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:salarmehfooz@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded border border-gold-500/10 hover:border-gold-500/50 bg-zinc-950 text-zinc-400 hover:text-gold-400 transition-all shadow-[inset_0_0_8px_rgba(197,168,128,0.02)]"
                aria-label="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-xs tracking-widest text-zinc-200 uppercase">
              STUDIO EXPLORE
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-sans">
              <Link
                to="/"
                className="text-zinc-500 hover:text-gold-500 transition-colors"
              >
                Studio Home
              </Link>
              <Link
                to="/projects"
                className="text-zinc-500 hover:text-gold-500 transition-colors"
              >
                Creative Projects
              </Link>
              <Link
                to="/services"
                className="text-zinc-500 hover:text-gold-500 transition-colors"
              >
                Pricing Packages
              </Link>
              <Link
                to="/about"
                className="text-zinc-500 hover:text-gold-500 transition-colors"
              >
                Developer Story
              </Link>
              <Link
                to="/contact"
                className="text-zinc-500 hover:text-gold-500 transition-colors"
              >
                Brief Inquiries
              </Link>
            </div>
          </div>

          {/* Quick Core Services Contact card */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-medium text-xs tracking-widest text-zinc-200 uppercase">
              REPAIR & DEPLOY
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <p className="leading-snug">
                Interested in high-intensity full-stack performance tuning?
              </p>
              <Link
                to="/contact"
                className="text-gold-400 hover:text-gold-300 font-mono tracking-wider font-semibold uppercase flex items-center gap-1.5 group"
              >
                <span>BOOK INQUIRY</span>
                <span className="group-hover:translate-x-1 duration-300 inline-block">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 mt-1 lg:pt-8">
          <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
            © {new Date().getFullYear()} SALAR MEHFOOZ STUDIO • HAND-BUILT IN
            MERN WITH CLASSIC LUXURY STYLE
          </p>
          <button
            onClick={scrollUp}
            className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-gold-500/80 hover:text-gold-400 transition-all border border-gold-500/10 hover:border-gold-500/30 px-3 py-1.5 rounded bg-zinc-950"
          >
            <span>Back to zenith</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
