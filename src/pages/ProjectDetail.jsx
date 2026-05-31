import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Globe, Check, Server, AlertCircle } from "lucide-react";
import { projectsData } from "../data/projects.js";
import ImageFallback from "../components/ImageFallback.jsx";
import Transition from "../components/Transition.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Retrieve project object based on active URL parameter slug
  const project = projectsData.find((p) => p.slug === slug);

  // Scroll to coordinate zenith on transition loads
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <Transition>
        <div className="max-w-md mx-auto px-6 py-20 text-center">
          <AlertCircle className="w-12 h-12 text-rose-500/80 mx-auto animate-bounce" />
          <h2 className="font-display font-bold text-lg uppercase text-zinc-200 mt-6 tracking-widest">
            Case Study Missing
          </h2>
          <p className="font-sans text-xs text-zinc-500 mt-2">
            The requested project profile could not be located in our manual config structures.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-block border border-gold-500/20 hover:border-gold-500 text-gold-500 font-mono text-[10px] uppercase tracking-widest px-6 py-2.5 rounded bg-zinc-950 transition-all"
          >
            Back to Case Catalog
          </Link>
        </div>
      </Transition>
    );
  }

  return (
    <Transition>
      <div className="relative pb-24 ambient-bg-grid overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-[5%] left-[5%] w-[4500px] h-[300px] bg-gold-500/3 rounded-full blur-[100px] pointer-events-none" />

        {/* ================= PROJECT HERO SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-6">
          {/* Back Navigator Link */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-gold-400 font-mono text-[10px] uppercase tracking-widest transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>

          {/* Editorial Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-500/80 border border-gold-500/20 px-2 py-0.5 rounded bg-zinc-950/40">
                MERN STUDIO SPEC SHEET
              </span>
              <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-zinc-100 uppercase tracking-tight mt-4">
                {project.title}
              </h1>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mt-6">
                {project.longDescription}
              </p>
            </div>

            {/* Sidebar Specifications Grid */}
            <div className="lg:col-span-4 p-6 rounded-xl border border-gold-500/10 bg-zinc-950/60 backdrop-blur-md">
              <h5 className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-[#c5a880] border-b border-zinc-900 pb-3 mb-4">
                SPECIFICATIONS
              </h5>
              <div className="flex flex-col gap-4 font-sans text-xs">
                <div>
                  <span className="font-mono text-[9px] uppercase text-zinc-500 block mb-0.5">DEV ROLE</span>
                  <span className="text-zinc-200 uppercase font-medium tracking-wide">{project.role}</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase text-zinc-500 block mb-0.5">PROJECT COOPERATIVE</span>
                  <span className="text-zinc-200">{project.client || "Salar Mehfooz Systems"}</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase text-zinc-500 block mb-0.5">COMPLETION STAMP</span>
                  <span className="text-zinc-200">{project.date}</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase text-zinc-500 block mb-1">CORE ECOSYSTEMS</span>
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] text-gold-400 bg-zinc-900 px-2 py-0.5 rounded border border-gold-500/5 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Directs */}
              <div className="grid grid-cols-2 gap-3 mt-8 border-t border-zinc-900 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-gold-500 border border-gold-500/10 hover:border-transparent text-[#c5a880] hover:text-[#070709] font-display font-semibold text-[9px] uppercase tracking-widest py-3 rounded text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-gold-500 text-neutral-950 font-display font-bold text-[9px] uppercase tracking-widest py-3 rounded text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <div className="opacity-40 border border-dashed border-zinc-800 p-2 text-center rounded text-[9px] uppercase font-mono flex items-center justify-center text-zinc-600">
                    Offline Local
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= MANUAL HERO SIGHT REPRESENTATION ================= */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="p-1 border border-gold-500/10 rounded-2xl bg-zinc-950/40 shadow-2xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <span className="font-mono text-[9px] uppercase text-gold-400 bg-neutral-950 border border-gold-500/20 px-2.5 py-1 rounded">
                COVER_PLATE_MONITORING
              </span>
            </div>
            <ImageFallback
              src={project.coverImage}
              alt={`${project.title} Hero Plate`}
              projectSlug={slug}
              heightClass="h-72 sm:h-96 lg:h-[450px]"
            />
          </div>
        </section>

        {/* ================= CORE ARCHITECTURE - TAB CONTROLS ================= */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left panel features list */}
          <div className="lg:col-span-8">
            <div className="flex border-b border-zinc-900/80 mb-8 font-mono text-xs">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-3.5 px-6 uppercase tracking-wider transition-colors relative ${
                  activeTab === "overview" ? "text-gold-400 font-semibold" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                Features & Scope
                {activeTab === "overview" && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-400" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("challenge")}
                className={`py-3.5 px-6 uppercase tracking-wider transition-colors relative ${
                  activeTab === "challenge" ? "text-gold-400 font-semibold" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                Challenges & Solutions
                {activeTab === "challenge" && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-400" />
                )}
              </button>
            </div>

            {/* Tab content displays */}
            {activeTab === "overview" ? (
              <div className="flex flex-col gap-6">
                <h4 className="font-display font-medium text-lg uppercase text-zinc-200 tracking-wide">
                  Core Architectural Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat) => (
                    <div
                      key={feat}
                      className="p-4 border border-zinc-900 bg-zinc-950/20 rounded-xl flex items-start gap-3.5 shadow-[inset_0_0_10px_rgba(197,168,128,0.01)]"
                    >
                      <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-zinc-400 leading-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 font-sans">
                {/* Challenges Block */}
                <div className="p-6 border border-rose-500/10 bg-zinc-950/30 rounded-xl">
                  <div className="flex items-center gap-2 text-rose-400/80 font-mono text-[10px] uppercase tracking-wider mb-3">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Engineering Problem</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                {/* Solutions Block */}
                <div className="p-6 border border-emerald-500/10 bg-zinc-950/30 rounded-xl mt-1">
                  <div className="flex items-center gap-2 text-emerald-400/80 font-mono text-[10px] uppercase tracking-wider mb-3">
                    <Server className="w-4 h-4" />
                    <span>Our Technical Mitigation</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.solutions}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right panel screenshots gallery */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="font-display font-medium text-xs tracking-widest text-[#c5a880] uppercase">
              REPRESENTATIVE SIGHTS
            </h4>

            <div className="flex flex-col gap-4">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gold-500/5 bg-zinc-950 p-2 shadow-md hover:border-gold-500/15 transition-colors overflow-hidden"
                >
                  <ImageFallback
                    src={img}
                    alt={`${project.title} Screenshot ${idx + 1}`}
                    projectSlug={slug}
                    heightClass="h-40"
                  />
                  <div className="flex justify-between items-center mt-2.5 px-2 font-mono text-[8px] text-zinc-600">
                    <span>INDEX_SLIDE_0{idx + 1}</span>
                    <span>PROJECTS_DATA_GALLERY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA INTERSECTION ================= */}
        <section className="max-w-3xl mx-auto px-6 mt-20 text-center">
          <div className="border-t border-zinc-900 pt-12">
            <p className="font-serif italic text-sm text-gold-300/60 tracking-wider">
              "We prioritize data orchestration over standardized outputs."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 font-mono text-xs">
              <Link
                to="/projects"
                className="border border-zinc-800 hover:border-gold-500/40 text-zinc-300 hover:text-gold-300 px-6 py-2.5 rounded bg-zinc-950/30 transition-all uppercase"
              >
                Back to catalog
              </Link>
              <Link
                to="/contact"
                className="bg-gold-500 hover:bg-gold-400 text-neutral-950 px-6 py-2.5 rounded transition-all font-display font-semibold uppercase tracking-wider"
              >
                Discuss similar frameworks
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
}
