import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

// Page Views
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Global Layout Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingParticles from "./components/FloatingParticles.jsx";

// Scroll restoration trigger to reset coordinate zenith on path variations
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// Inner routes container supporting AnimatePresence triggers
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname} className="w-full">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Safe fallback wildcard routing */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#12121d] text-gold-100 selection:bg-gold-500 selection:text-neutral-950 font-sans antialiased text-left relative overflow-hidden">
        {/* Ambient floating gold particles background */}
        <FloatingParticles />

        {/* Fixed Header navigation */}
        <Navbar />

        {/* Dynamic routed views */}
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>

        {/* Brand footer signature */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
