import React, { useState, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Search, SlidersHorizontal, BookOpen, ExternalLink, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data/projects.js";
import ImageFallback from "../components/ImageFallback.jsx";
import Transition from "../components/Transition.jsx";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  // Dynamically extract all unique technologies across all projects for the filter tabs
  const allTechnologies = useMemo(() => {
    const list = new Set();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => list.add(tech));
    });
    return ["All", ...Array.from(list)];
  }, []);

  // Filter projects by both active technology tab and text query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTech = selectedTech === "All" || project.technologies.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTech("All");
  };

  return (
    <Transition>
      <div className="relative pb-24 ambient-bg-grid overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[15%] right-[10%] w-[450px] h-[450px] rounded-full bg-gold-500/6 blur-[130px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-amber-500/4 blur-[120px] animate-pulse-slow" />
        
        {/* ================= PAGE HEADER ================= */}
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500/85">
              THE COMPLETE REPOSITORY SHOWCASE
            </span>
            <h1 className="font-display font-medium text-4xl sm:text-5xl text-zinc-100 uppercase tracking-tight mt-3">
              Case Catalog
            </h1>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">
              Explore my authentic full-stack applications. Use the control deck below to filter projects by core developer stack elements and text parameters.
            </p>
          </div>
        </div>

        {/* ================= CONTROL DECK (SEARCH & FILTERS) ================= */}
        <section className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
          <div className="p-6 rounded-2xl border border-gold-500/15 bg-zinc-900/30 backdrop-blur-md flex flex-col gap-6 glass-panel">
            
            {/* Search Input */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-gold-500/40 absolute left-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog by title, stack keywords, or details..."
                className="w-full pl-11 pr-4 py-3 bg-zinc-900/50 border border-gold-500/15 focus:border-gold-500/40 outline-none rounded text-xs tracking-wide text-zinc-200 placeholder-zinc-650 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-zinc-500 hover:text-zinc-200 text-xs font-mono uppercase tracking-widest"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gold-500/60 font-mono text-[10px] uppercase tracking-wider">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter by Technology:</span>
              </div>
              
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2">
                {allTechnologies.map((tech) => {
                  const isSelected = selectedTech === tech;
                  return (
                    <button
                      key={tech}
                      onClick={() => setSelectedTech(tech)}
                      className={`text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded transition-all duration-300 font-mono ${
                        isSelected
                          ? "bg-gold-500 text-neutral-950 border border-transparent font-medium"
                          : "bg-zinc-900/60 text-zinc-350 border border-gold-500/12 hover:border-gold-500/35 hover:text-zinc-100"
                      }`}
                    >
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Counts & Status */}
            <div className="flex justify-between items-center border-t border-zinc-900/60 pt-4 font-mono text-[10px] text-zinc-500">
              <div className="flex gap-4">
                <span>FILTERING: <span className="text-gold-500">{selectedTech.toUpperCase()}</span></span>
                {searchQuery && <span>QUERY: <span className="text-gold-500">"{searchQuery.toUpperCase()}"</span></span>}
              </div>
              <span>RETURNED: <span className="text-zinc-200">{filteredProjects.length}</span> PROJECTS</span>
            </div>
          </div>
        </section>

        {/* ================= PROJECT EXHIBITION GRID ================= */}
        <main className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="p-5 border border-gold-500/15 bg-zinc-900/30 rounded-xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between"
                  >
                    <div>
                      {/* Responsive Cover Falling Back to gradient */}
                      <ImageFallback
                        src={project.coverImage}
                        alt={project.title}
                        projectSlug={project.slug}
                        heightClass="h-56 sm:h-64"
                      />

                      <div className="mt-6 flex justify-between items-start">
                        <div>
                          <h3 className="font-display font-medium text-xl text-zinc-100 uppercase tracking-wide">
                            {project.title}
                          </h3>
                          <p className="font-mono text-[9px] uppercase tracking-wider text-gold-500/80 mt-1">
                            Role / {project.role}
                          </p>
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                          {project.date}
                        </span>
                      </div>

                      <p className="font-sans text-xs text-zinc-400 mt-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8 border-t border-zinc-900/60 pt-5">
                      {/* Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5 items-center">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded ${
                              selectedTech === tech
                                ? "bg-gold-500 text-neutral-950"
                                : "bg-neutral-900/60 text-zinc-400 border border-zinc-800/40"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Redirect actions */}
                      <div className="flex gap-4">
                        <RouterLink
                          to={`/projects/${project.slug}`}
                          className="flex-1 text-center bg-zinc-900/60 hover:bg-gold-500 hover:text-neutral-900 border border-gold-500/10 hover:border-transparent text-[#c5a880] font-display font-semibold text-[9.5px] uppercase tracking-widest py-3 rounded transition-all duration-300 flex items-center justify-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>View Case Study</span>
                        </RouterLink>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 border border-zinc-800 hover:border-gold-500/30 rounded bg-zinc-950 text-zinc-400 hover:text-gold-400 transition-colors flex items-center justify-center"
                          aria-label="View Source on GitHub"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* No Catalog Search results */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center border border-dashed border-zinc-850 rounded-xl max-w-xl mx-auto bg-zinc-950/20"
              >
                <RefreshCw className="w-8 h-8 text-gold-500/30 mx-auto animate-spin" />
                <h3 className="font-display font-bold text-base uppercase text-zinc-300 mt-5 tracking-widest">
                  Zero Catalog Matches
                </h3>
                <p className="font-sans text-xs text-zinc-500 mt-2 max-w-sm mx-auto px-6">
                  No projects are currently annotated with search parameters. Try resetting your navigation filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 border border-gold-500/20 hover:border-gold-500 text-gold-400 font-mono text-[9px] uppercase tracking-widest px-4 py-2 rounded bg-zinc-950 transition-colors"
                >
                  Reset Studio Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </Transition>
  );
}
