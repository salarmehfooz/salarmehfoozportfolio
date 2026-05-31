import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Shield,
  Command,
  Clock,
  Zap,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import { professionalTimeline } from "../data/projects.js";
import Transition from "../components/Transition.jsx";

export default function About() {
  const statistics = [
    { title: "Public Repos", count: "4+", accent: "text-amber-400" },
    { title: "Client Satisfaction", count: "100%", accent: "text-emerald-400" },
    { title: "Git Commits (CY)", count: "300+", accent: "text-sky-400" },
    { title: "MERN Stack Mastery", count: "2+ Yrs", accent: "text-rose-400" },
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Tactical Scoping",
      desc: "Analyzing data payloads, database schemas, and UX user pathways on charcoal sheets before typing single lines of Node or React code.",
    },
    {
      num: "02",
      title: "Modular Renders",
      desc: "Coding components cleanly, setting strict TypeScript interface bounds, and wiring flexible local state mechanisms to maintain top loading speeds.",
    },
    {
      num: "03",
      title: "Query Calibration",
      desc: "Constructing indexed MongoDB databases, testing API routes via proxy servers, and sanitizing payloads using standard validation locks.",
    },
    {
      num: "04",
      title: "Staging & Audits",
      desc: "Executing lighthouse score tests, securing routing structures against JWT breach nodes, and launching on premium server CDN platforms.",
    },
  ];

  return (
    <Transition>
      <div className="relative pb-24 ambient-bg-grid overflow-hidden">
        {/* Glow Sphere decoration */}
        <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] bg-gold-500/8 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-amber-600/6 rounded-full blur-[110px] pointer-events-none animate-pulse" />

        {/* ================= STUDIO GREETING ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story copy */}
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-500 border border-gold-500/20 px-2.5 py-1 rounded bg-zinc-900/40">
                MEET THE CREATIVE ENGINEER
              </span>
              <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-zinc-100 uppercase tracking-tight mt-5 leading-none">
                Salar Mehfooz
              </h1>
              <p className="font-serif italic text-lg sm:text-2xl text-gold-300/85 mt-4 tracking-wide font-light">
                Full-Stack Systems Builder & Visual Calibrator
              </p>

              <div className="font-sans text-xs text-zinc-400 leading-relaxed mt-6 flex flex-col gap-4 max-w-2xl">
                <p>
                  As an dedicated full-stack engineer focusing heavily in React,
                  Node.js, Express, and MongoDB, I bridge the divide between
                  computational robustness and luxurious digital brand identity.
                </p>
                <p>
                  Every system I launch is engineered under strict code quality
                  guidelines: no lazy placeholder styling, no messy un-indexed
                  db calls, and no visual lag. Instead, I deliver
                  high-intensity, clean visual frameworks backing bulletproof
                  APIs.
                </p>
                <p>
                  When I am not tuning database schemas or orchestrating custom
                  visual transitions, I actively audit open-source Kubernetes
                  architectures, exploring clean Docker orchestration lines and
                  microservices boundaries.
                </p>
              </div>
            </div>

            {/* Profile Graphic Placement */}
            <div className="lg:col-span-4 relative mt-8 lg:mt-0">
              <div className="p-1 border border-gold-500/20 rounded-2xl bg-zinc-900/30 glass-panel shadow-2xl overflow-hidden aspect-square flex flex-col justify-between p-6 relative">
                {/* Background grid */}
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(197,168,128,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                {/* TOP BAR (unchanged) */}
                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-[9px] text-zinc-500">
                    Avalaible
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* CENTER CONTENT (image + identity preserved) */}
                <div className="flex flex-col items-center justify-center py-6 text-center z-10 relative">
                  {/* IMAGE (NEW ADDITION) */}
                  <img
                    src="/images/profile.png"
                    alt="Salar Mehfooz"
                    className="w-24 h-24 rounded-full object-cover border border-gold-500/20 shadow-lg mb-4"
                  />

                  {/* ORIGINAL ICON */}
                  <Command className="w-16 h-16 text-[#c5a880]/60 mb-4 animate-float" />

                  <h4 className="font-display font-medium text-zinc-300 uppercase tracking-widest text-sm">
                    Salar Mehfooz
                  </h4>

                  <span className="font-mono text-[9px] text-gold-500/60 mt-1 uppercase tracking-wider">
                    Creative MERN Developer
                  </span>
                </div>

                {/* BOTTOM BAR (unchanged) */}
                <div className="flex justify-between items-end z-10 font-mono text-[8px] text-zinc-600">
                  <span>SSL_SECURED_STUDIO</span>
                  <span>BUILD_ID_2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HIGH-INTENSITY STATS ================= */}
        <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 border border-gold-500/15 bg-zinc-900/30 rounded-2xl backdrop-blur-md glass-panel shadow-md">
            {statistics.map((stat) => (
              <div key={stat.title} className="text-center p-4">
                <span
                  className={`font-display font-bold text-3xl sm:text-4xl block ${stat.accent}`}
                >
                  {stat.count}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-2 block">
                  {stat.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WORKFLOW PARADIGMS ================= */}
        <section className="relative px-6 py-20 bg-zinc-900/15 border-y border-gold-500/15">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500/85">
                HOW CODE TURNS TO ART
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase text-zinc-100 mt-2.5">
                The Engineering Paradigm
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-6 border border-gold-500/15 bg-zinc-900/30 rounded-xl relative group glass-panel glass-panel-hover"
                >
                  <span className="font-display font-bold text-4xl text-gold-500/10 group-hover:text-gold-500/20 duration-300 block mb-4">
                    {step.num}
                  </span>
                  <h4 className="font-display font-bold text-sm tracking-widest text-zinc-100 uppercase mb-2">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HISTORIC WORK TIMELINE ================= */}
        <section className="max-w-5xl mx-auto px-6 mt-24 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500/85">
              PAST CHRONICLED ENDEAVORS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase text-zinc-100 mt-2.5">
              Career Timeline
            </h2>
          </div>

          <div className="relative border-l border-gold-500/15 pl-6 sm:pl-8 ml-2 flex flex-col gap-10">
            {professionalTimeline.map((item) => (
              <div key={item.title} className="relative group">
                {/* Node Pointer Circle */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-[11px] h-[11px] rounded-full bg-[#070709] border-[2px] border-gold-500 group-hover:bg-gold-400 group-hover:scale-125 duration-300 shadow-[0_0_8px_rgba(197,168,128,0.3)]" />

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span className="font-mono text-[10px] text-gold-500 font-semibold uppercase tracking-wider">
                      {item.year}
                    </span>
                    <span className="hidden sm:inline text-zinc-700">•</span>
                    <h4 className="font-display font-semibold text-sm tracking-wide text-zinc-100 uppercase">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400/80 mt-1">
                    {item.company}
                  </p>
                  <p className="font-sans text-xs text-zinc-500 mt-2.5 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL STUDIO INVITATION CTA ================= */}
        <section className="max-w-3xl mx-auto px-6 mt-24 text-center">
          <div className="border-t border-zinc-900 pt-12">
            <h4 className="font-display font-bold text-sm tracking-widest text-[#c5a880] uppercase">
              Ready to execute together?
            </h4>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>OPEN CONTACT INQUIRIES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
}
