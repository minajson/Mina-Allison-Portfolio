import React from 'react';
import { ChevronDown, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import minaPhoto from '../assets/mina.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }}
          className="mb-8 relative inline-block"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-green-400 to-blue-400 p-1 mx-auto">
            <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-slate-800">
              <img
                src={minaPhoto}
                alt="Mina Allison"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-3">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Mina Allison
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-6">
          Environmental Health Practitioner × Full-Stack Developer
        </p>

        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
          Bridging environmental science and technology to deliver smarter public health systems and real-time environmental monitoring.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-3 border border-green-400 text-green-400 rounded-full font-semibold hover:bg-green-400 hover:text-slate-900 transition">
            View Projects
          </a>
        </div>

        <div className="mt-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
