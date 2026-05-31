import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, HelpCircle, ChevronDown, Sparkles, ArrowRight, Table } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { pricingPlans, serviceComparisons, faqs } from "../data/projects.js";
import Transition from "../components/Transition.jsx";

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <Transition>
      <div className="relative pb-24 ambient-bg-grid overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
        <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />

        {/* ================= PAGE TITLE ================= */}
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-12 text-center lg:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500/85">
            CLIENT COMMISSIONS & SERVICE STRUCTURES
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl text-zinc-100 uppercase tracking-tight mt-3">
            Services & Rates
          </h1>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed max-w-2xl">
            Choose a structured scope designed for impact, visual power, and technical solidity. Every line of code is engineered with precision, high-intensity type bounds, and modularity.
          </p>
        </div>

        {/* ================= PRICING CARDS SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between rounded-2xl p-8 border bg-gradient-to-br ${plan.color} relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(197,168,128,0.15)]`}
              >
                {/* Subtle light pulse for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gold-500/2 pointer-events-none" />
                )}

                <div>
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-gold-400 to-amber-500 text-neutral-950 font-mono text-[8.5px] uppercase tracking-widest px-3 py-1 rounded font-bold shadow-md">
                      <Sparkles className="w-2.5 h-2.5 animate-spin" />
                      <span>MOST COMMISSIONED</span>
                    </div>
                  )}

                  <h3 className="font-display font-medium text-xl uppercase tracking-wider text-zinc-100">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-350 leading-normal mt-2">
                    {plan.subtitle}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2 border-b border-zinc-805 pb-6">
                    <span className="font-display font-semibold text-3xl sm:text-4xl gold-gradient-text tracking-tight animate-pulse-slow">
                      {plan.price}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Core Features */}
                  <div className="mt-8 flex flex-col gap-3.5">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-zinc-300 leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className={`w-full py-3.5 rounded font-display font-semibold text-[10px] uppercase tracking-widest text-center block transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-gold-500 text-neutral-950 shadow-md shadow-gold-500/10 hover:shadow-gold-500/20"
                        : "bg-zinc-900 hover:bg-zinc-850 w-full text-zinc-300 hover:text-gold-450 border border-gold-500/15 hover:border-gold-500/50"
                    }`}
                  >
                    Brief details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= COMPLEMENTARY COMPARISON TABLE ================= */}
        <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10 overflow-x-auto">
          <div className="text-center lg:text-left mb-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gold-500/60 font-mono text-[9px] uppercase tracking-widest">
              <Table className="w-4 h-4" />
              <span>DETAILED SCOPE COMPARISONS</span>
            </div>
            <h2 className="font-display font-bold text-2xl uppercase text-zinc-100 mt-2">
              Feature Matrices
            </h2>
          </div>

          <div className="p-6 rounded-xl border border-gold-500/5 bg-zinc-950/40 min-w-[700px]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-900 pb-3 font-mono text-[9.5px] text-zinc-500 uppercase tracking-wider">
                  <th className="py-4">PLAN CORE METRICS</th>
                  <th className="py-4">STARTER WEBSITE</th>
                  <th className="py-4">PROFESSIONAL WEBSITE</th>
                  <th className="py-4">PREMIUM MERN SOLUTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/60 font-sans text-zinc-400">
                {serviceComparisons.map((row) => (
                  <tr key={row.featureName} className="hover:bg-zinc-950/20 duration-300">
                    <td className="py-4.5 font-medium text-zinc-100 uppercase tracking-wide">
                      {row.featureName}
                    </td>
                    <td className="py-4.5">{row.starter}</td>
                    <td className="py-4.5 text-gold-400">{row.professional}</td>
                    <td className="py-4.5 text-[#f3edd9]">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= FREQUENT QUESTIONS ACCORDION ================= */}
        <section className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-gold-500/60 font-mono text-[9px] uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENT QUESTIONS CHANNELS</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase text-zinc-100 mt-2.5">
              Faqs
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-sans text-xs">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-gold-500/5 bg-zinc-950/30 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-zinc-950/50 transition-colors"
                  >
                    <span className="font-medium text-zinc-200 uppercase tracking-wide">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-500/60 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-gold-400" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-zinc-900/40 bg-zinc-950/50"
                      >
                        <p className="p-5 text-zinc-400 leading-relaxed text-xs">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= FINAL CTA COUPLER ================= */}
        <section className="max-w-3xl mx-auto px-6 mt-24 text-center">
          <div className="p-8 border border-gold-500/5 bg-zinc-950/20 rounded-xl">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-zinc-200">
              Need A Customized Architecture Matrix?
            </h4>
            <p className="font-sans text-xs text-zinc-500 mt-2 leading-relaxed">
              If your criteria maps beyond standard models, we script custom API endpoints, localized servers, and customized interfaces freely.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#c5a880] hover:text-gold-400 transition-colors"
              >
                <span>Initiate Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
}
