import React, { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import Hero from "./components/Hero/Hero.jsx";
import AboutSection from "./components/About/AboutSection.jsx";
import ProjectsSection from "./components/Projects/ProjectsSection.jsx";
import PublicationsList from "./components/Publications/PublicationsList.jsx";
import ContactSection from "./components/Contact/ContactSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MobileMenu from "./components/Navigation/MobileMenu.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navItems = ["Home", "About", "Projects", "Publications", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavigate = (id) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-slate-900/90 backdrop-blur border-b border-slate-800" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-7 h-7 text-green-400" />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Mina Allison
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(item.toLowerCase()); }}
                  className="text-slate-300 hover:text-green-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden text-slate-200"
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-slate-200 transition ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <div className={`w-6 h-0.5 bg-slate-200 ${isMenuOpen ? "opacity-0" : ""}`} />
                <div className={`w-6 h-0.5 bg-slate-200 transition ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
        <MobileMenu navItems={navItems} isOpen={isMenuOpen} onNavigate={onNavigate} />
      </nav>

      {/* SECTIONS */}
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <PublicationsList />
      <ContactSection />
      <Footer />
    </div>
  );
}
