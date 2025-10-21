import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/SkillBar';


export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}
