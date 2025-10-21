import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import PublicationsList from './components/PublicationsList';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Publications', 'Contact'];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNavigate = (id) => {
    setIsMenuOpen(false);
    // optional smooth scroll focus
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-7 h-7 text-green-400" />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Mina Allison
              </span>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => onNavigate(item.toLowerCase())}
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
                <div className={`w-6 h-0.5 bg-slate-200 transition ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-slate-200 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-slate-200 transition ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
        <MobileMenu navItems={navItems} isOpen={isMenuOpen} onNavigate={onNavigate} />
      </nav>

      {/* SECTIONS */}
      <Hero />
      <AboutSection />
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <Skills />
        </div>
      </section>
      <ProjectsSection />
      <PublicationsList />
      <ContactSection />
      <Footer />
    </div>
  );
}
