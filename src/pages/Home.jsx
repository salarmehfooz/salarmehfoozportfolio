import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Database, Cpu, Layers, ExternalLink, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { projectsData, testimonials } from "../data/projects.js";
import ImageFallback from "../components/ImageFallback.jsx";
import Transition from "../components/Transition.jsx";
import Typewriter from "../components/Typewriter.jsx";

export default function Home() {
  // Capture the top 2 featured projects for the home page showcase
  const featuredProjects = projectsData.slice(0, 2);

  const coreSkills = [
    { name: "React.js", level: "Expert", type: "frontend", icon: <Layers className="w-5 h-5 text-gold-400" /> },
    { name: "Node.js / Express", level: "Senior", type: "backend", icon: <Cpu className="w-5 h-5 text-gold-400" /> },
    { name: "MongoDB / SQL", level: "Advanced", type: "database", icon: <Database className="w-5 h-5 text-gold-400" /> },
    { name: "Framer Motion / GSAP", level: "Fluid Designer", type: "motion", icon: <Sparkles className="w-5 h-5 text-gold-400" /> },
  ];

  return (
    <Transition>
      <div className="relative pb-24 ambient-bg-grid overflow-hidden">
        {/* Drifting Ambient Luxury Light Spheres */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-gold-500/8 blur-[130px] animate-pulse-slow" />
        <div className="absolute top-[35%] right-[3%] w-[550px] h-[550px] rounded-full bg-amber-600/6 blur-[150px] animate-pulse" />
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative px-6 py-20 lg:py-32 flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto z-10">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-gold-500/20 px-3 py-1.5 rounded-full bg-zinc-950/50 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(197,168,128,0.02)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-300">
                AVAILABLE FOR COLLABORATIVE COMMISSIONS & FULL-TIME OFFERS
              </span>
            </motion.div>

            {/* Title / Headings */}
            <h1 className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-zinc-100 uppercase">
              REFORMATTING DIGITAL REALMS INDEFINITELY
            </h1>
            
            <div className="font-serif italic text-lg sm:text-2xl mt-6 tracking-wide font-light max-w-2xl mx-auto min-h-[3.5rem] sm:min-h-0">
              <span className="text-zinc-300">Salar Mehfooz Is A </span>
              <Typewriter words={[
                "Premium MERN Stack Architect",
                "Creative Software Engineer",
                "Visual Systems Calibrator",
                "High-Speed Systems Builder"
              ]} />
            </div>

            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-6 leading-relaxed">
              I construct cinema-grade full-stack systems, blending high-speed Node.js architectures with exquisite web motion to create luxury digital real estate.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Link
                to="/projects"
                className="group w-full sm:w-auto bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-gold-500 text-neutral-950 px-8 py-3.5 rounded font-display font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20"
              >
                <span>View Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border border-zinc-800 hover:border-gold-500/40 hover:bg-zinc-950/40 text-zinc-300 hover:text-gold-300 px-8 py-3.5 rounded font-display font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's talk scale</span>
              </Link>
            </div>
          </div>

          {/* Luxury scroll prompt signature */}
          <div className="mt-16 animate-bounce opacity-40">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#c5a880]">
              SCROLL DOWN TO INVENT
            </span>
          </div>
        </section>

        {/* ================= FEATURED PROJECTS SECTION ================= */}
        <section className="relative px-6 py-16 max-w-7xl mx-auto z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500/85">
                CURATED CASE STUDIES
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-zinc-100 uppercase mt-2.5">
                Featured Engineering
              </h2>
            </div>
            <Link
              to="/projects"
              className="group text-xs font-mono tracking-widest text-[#c5a880] hover:text-gold-400 uppercase mt-4 md:mt-0 flex items-center gap-2 border-b border-gold-500/15 pb-0.5"
            >
              <span>Explore full catalog</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-zinc-900/35 border border-gold-500/15 rounded-xl overflow-hidden glass-panel glass-panel-hover p-5 relative"
              >
                {/* Fallback image wrapper */}
                <ImageFallback
                  src={project.coverImage}
                  alt={project.title}
                  projectSlug={project.slug}
                  heightClass="h-64 sm:h-80"
                />

                <div className="mt-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-100 tracking-wide uppercase group-hover:text-gold-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] text-zinc-500">
                        {project.date}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400 mt-2.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] uppercase tracking-wider bg-zinc-900 text-gold-400/80 px-2 py-0.5 rounded border border-gold-500/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-[9px] text-zinc-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4 border-t border-zinc-900/60 pt-4">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex-1 text-center bg-zinc-900/80 hover:bg-gold-500 hover:text-neutral-900 border border-gold-500/10 hover:border-transparent text-[#c5a880] font-display font-semibold text-[10px] uppercase tracking-widest py-2.5 rounded transition-all duration-300"
                      >
                        Read Brief
                      </Link>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-[inset_0_0_8px_rgba(197,168,128,0.02)] border border-zinc-800 hover:border-gold-500/30 p-2.5 rounded bg-zinc-950 text-zinc-400 hover:text-gold-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= TECH STACKS PREVIEW ================= */}
        <section className="relative px-6 py-20 bg-zinc-900/20 border-y border-gold-500/15">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500/85">
                  MERN COMPETENCE METRICS
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-zinc-100 uppercase mt-2.5">
                  Core Expertise
                </h2>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-4">
                  My products are built with state-of-the-art web frameworks structured for maximum speed, strict type integrity, and visually expressive fluidity.
                </p>
                <div className="mt-8">
                  <Link
                    to="/about"
                    className="group text-xs font-mono tracking-widest text-gold-500/80 hover:text-gold-400 uppercase flex items-center gap-1.5"
                  >
                    <span>Inspect studio flow</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-300" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreSkills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="p-5 border border-gold-500/12 bg-zinc-900/30 backdrop-blur rounded-xl flex items-start gap-4 transition-all duration-300 hover:border-gold-500/35 hover:scale-[1.01]"
                  >
                    <div className="p-2.5 rounded border border-gold-500/15 bg-neutral-900/60 mt-0.5">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm tracking-widest text-zinc-100 uppercase">
                        {skill.name}
                      </h4>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-gold-500/70 mt-1">
                        Status / {skill.level}
                      </p>
                      <p className="font-sans text-xs text-zinc-500 mt-2">
                        Pristine architecture, decoupled structures, and real-time state pipeline sync.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIAL PREVIEW ================= */}
        <section className="relative px-6 py-20 max-w-7xl mx-auto z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500/85">
              RECRUITER & CLIENT VERDICTS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-zinc-100 uppercase mt-2.5">
              Endorsements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 border border-gold-500/12 bg-zinc-900/25 rounded-xl relative flex flex-col justify-between hover:border-gold-500/35 duration-300 transition-all shadow-md group hover:shadow-[0_15px_30px_rgba(197,168,128,0.05)]"
              >
                <div>
                  {/* Decorative quotes */}
                  <span className="font-serif italic text-4xl text-gold-500/10 absolute -top-1 left-4 select-none">
                    “
                  </span>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed italic relative z-10 pt-2 lg:pt-3">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 mt-8 border-t border-zinc-900 pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border border-gold-400/20 object-cover"
                  />
                  <div>
                    <h5 className="font-display font-bold text-xs uppercase text-zinc-100 tracking-wider">
                      {t.name}
                    </h5>
                    <p className="font-mono text-[9px] text-zinc-500 lowercase">
                      {t.role} @ <span className="uppercase text-gold-500/70">{t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= DYNAMIC CALL TO ACTION ================= */}
        <section className="relative px-6 py-20 max-w-5xl mx-auto">
          <div className="relative p-12 overflow-hidden bg-zinc-900/30 backdrop-blur rounded-2xl border border-gold-500/15 text-center shadow-[inset_0_0_50px_rgba(197,168,128,0.06)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(197,168,128,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-500">
                TRANSFORM METRICS TO METAPHYSICAL
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl text-zinc-100 uppercase tracking-tight mt-4 leading-tight">
                HAVE A HIGH-CALIBER VENTURE IN MIND?
              </h2>
              <p className="font-sans text-xs text-zinc-400 mt-5 leading-relaxed max-w-lg mx-auto">
                Whether you are a recruiter looking to secure a senior MERN lead, or a corporate entity ready for a custom architectural suite, let's script it together.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-gold-500 text-neutral-950 px-8 py-3.5 rounded font-display font-bold text-xs uppercase tracking-[0.15em] transition-all flex items-center gap-1.5 shadow-lg shadow-gold-500/10"
                >
                  <span>COMMISSION INQUIRY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
}
