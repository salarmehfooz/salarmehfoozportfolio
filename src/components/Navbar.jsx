import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo.jsx";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About Studio" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const location = useLocation();

  // Scroll detection for navbar size contraction & background solidifying
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Soft real-time UTC Clock
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(tz);

    const updateTime = () => {
      const now = new Date();

      setLocalTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-neutral-950/80 border-b border-gold-400/10 backdrop-blur-md shadow-lg shadow-black/30"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Identity */}
          <Logo />

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest transition-all duration-300 relative py-1.5 ${
                    isActive
                      ? "text-gold-400 font-medium"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold-500 to-amber-600"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Clock Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-[10px] text-gold-500/60 border border-gold-500/10 px-2.5 py-1 rounded-full bg-zinc-950/30">
              <Clock className="w-3 h-3 text-gold-500/40" />
              <span>
                {" "}
                {localTime} ({timeZone})
              </span>
            </div>
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-neutral-900 font-display font-bold text-xs uppercase tracking-widest px-4 py-2 rounded transition-all duration-300 shadow-md shadow-gold-500/10 hover:shadow-gold-500/20 flex items-center gap-1.5"
            >
              <span>Brief Me</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Menu Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-gold-400 transition-colors p-2 border border-gold-500/10 rounded bg-zinc-950/40"
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Nav Drawer - Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] bg-neutral-950/95 border-b border-gold-400/15 backdrop-blur-lg z-40 md:hidden flex flex-col p-6 gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm uppercase tracking-widest py-2 border-b border-zinc-900/40 transition-colors ${
                      isActive
                        ? "text-gold-400 font-semibold"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2 font-mono text-[10px] text-gold-500/50">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {localTime} ({timeZone})
                </span>
              </div>{" "}
              <Link
                to="/contact"
                className="w-full text-center bg-zinc-900 border border-gold-500/20 text-gold-400 font-display font-bold text-xs uppercase tracking-widest py-3 rounded transition-all hover:bg-gold-500 hover:text-[#070709]"
              >
                Launch Project Inquiries
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
