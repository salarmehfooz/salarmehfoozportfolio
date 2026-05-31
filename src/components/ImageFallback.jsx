import React, { useState } from "react";
import { Sparkles, Code2, Layers, Cpu, Database, Activity } from "lucide-react";

export default function ImageFallback({
  src,
  alt,
  className = "",
  projectSlug = "general",
  heightClass = "h-48"
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Pick unique aesthetic icon based on project slug
  const getProjectIcon = (slug) => {
    switch (slug) {
      case "verdantia-global":
        return <Cpu className="w-12 h-12 text-emerald-400/70" />;
      case "cmscents":
        return <Sparkles className="w-12 h-12 text-amber-300/70" />;
      case "mental-health-app-portal":
        return <Activity className="w-12 h-12 text-rose-400/70" />;
      case "smartmall-analytics-portal":
        return <Database className="w-12 h-12 text-sky-400/70" />;
      default:
        return <Code2 className="w-12 h-12 text-gold-400/70" />;
    }
  };

  // Generate an elegant, layered luxury futuristic background gradient based on slug
  const getGradientClass = (slug) => {
    switch (slug) {
      case "verdantia-global":
        return "from-emerald-950/40 via-zinc-950 to-zinc-900 border-emerald-500/10";
      case "cmscents":
        return "from-amber-950/40 via-zinc-950 to-zinc-900 border-amber-500/10";
      case "mental-health-app-portal":
        return "from-rose-950/40 via-zinc-950 to-zinc-900 border-rose-500/10";
      case "smartmall-analytics-portal":
        return "from-sky-950/40 via-zinc-950 to-zinc-900 border-sky-500/10";
      default:
        return "from-zinc-900 via-zinc-950 to-neutral-900 border-gold-500/10";
    }
  };

  return (
    <div className={`relative overflow-hidden w-full ${heightClass} bg-neutral-950 rounded-lg group ${className}`}>
      {/* Real Image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out 
            ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"} 
            group-hover:scale-110`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Fallback Luxury Creative Card Visualizer */}
      {(hasError || !isLoaded) && (
        <div 
          className={`absolute inset-0 w-full h-full flex flex-col justify-between p-6 border rounded-lg transition-all duration-500
            bg-gradient-to-br ${getGradientClass(projectSlug)}`}
        >
          {/* Subtle Grid overlay for cyber-luxury feel */}
          <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_right,rgba(197,168,128,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          {/* Top Line indicating image status & serial */}
          <div className="flex justify-between items-center relative z-10">
            <span className="font-mono text-[9px] uppercase tracking-widest text-gold-500/40">
              SYS_ASSET://{projectSlug.toUpperCase()}/01
            </span>
            <div className="flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#c5a880]/70">
                PENDING_MANUAL_REPLACE
              </span>
            </div>
          </div>

          {/* Center Graphic Icon and decorative circle */}
          <div className="flex flex-col items-center justify-center py-2 relative z-10 transition-transform duration-500 group-hover:scale-105">
            <div className="p-4 rounded-full bg-zinc-900/80 border border-gold-500/10 flex items-center justify-center relative shadow-[inset_0_0_15px_rgba(197,168,128,0.03)]">
              {getProjectIcon(projectSlug)}
            </div>
            <p className="font-serif italic text-xs text-[#c5a880]/40 mt-3 tracking-wide">
              salarmehfooz.studio
            </p>
          </div>

          {/* Title and details at bottom */}
          <div className="relative z-10 text-left">
            <h4 className="font-display font-medium text-sm tracking-wide text-zinc-100 uppercase group-hover:text-gold-300 transition-colors">
              {alt}
            </h4>
            <div className="flex justify-between items-end mt-1.5">
              <span className="font-mono text-[9px] text-[#c5a880]/80 border border-gold-500/20 px-1.5 py-0.5 rounded uppercase bg-neutral-900/60">
                MERN CORE
              </span>
              <span className="font-mono text-[9px] text-zinc-500">
                EDIT DATA IN PROJECTS.JS
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Futuristic Hover Overlay Grid lines */}
      <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 pointer-events-none transition-all duration-500 rounded-lg" />
    </div>
  );
}
