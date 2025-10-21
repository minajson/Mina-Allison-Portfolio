
import React from 'react';
import { ChevronDown, Leaf, Github, Linkedin, Mail } from 'lucide-react';
import minaPhoto from "../../assets/mina.jpg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center">
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-green-400 to-blue-400 p-1 mx-auto">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              {/* Replace initials with your image */}
              <img
                src={minaPhoto}
                alt="Mina Allison"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
            <Leaf className="w-6 h-6 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Mina Allison
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Environmental Health Practitioner × Full-Stack Developer
        </p>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Bridging the gap between environmental science and technology to create innovative solutions
          for sustainable public health systems and smart environmental monitoring.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-3 border border-green-400 text-green-400 rounded-full font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
            View Projects
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/minajson" className="text-gray-400 hover:text-green-400 transition-colors"><Github className="w-6 h-6" /></a>
          <a href="https://linkedin.com/in/minaallison" className="text-gray-400 hover:text-green-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="mailto:minajjumbo@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors"><Mail className="w-6 h-6" /></a>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
