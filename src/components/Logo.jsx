import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group relative select-none">
      {/* Brand Geometric Crest */}
      <div className="relative w-8 h-8 flex items-center justify-center border border-gold-400/40 rounded bg-zinc-950 transition-all duration-500 group-hover:border-gold-400 group-hover:rotate-45 shadow-[inset_0_0_10px_rgba(197,168,128,0.1)]">
        <span className="font-serif italic font-bold text-xs text-gold-400 transition-transform duration-500 group-hover:-rotate-45">
          S
        </span>
        {/* Secondary decorative corner lights */}
        <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-gold-400/60 rounded-tl" />
        <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-gold-400/60 rounded-br" />
      </div>

      {/* Font Logo text */}
      <div className="flex flex-col">
        <span className="font-display font-bold tracking-[0.2em] text-sm text-zinc-100 uppercase group-hover:text-gold-400 transition-colors duration-400">
          SALAR MEHFOOZ
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-gold-500/60 -mt-0.5">
          FULL STACK STUDIO
        </span>
      </div>
    </Link>
  );
}
