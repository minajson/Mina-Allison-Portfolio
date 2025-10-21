import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-slate-300"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <p>
              I combine deep Environmental Health expertise with full-stack development
              to build practical, data-driven solutions for public health and sustainability.
            </p>
            <p>
              My work spans IoT monitoring, GIS analytics, and AI-assisted decision support—
              turning raw environmental signals into actionable insights.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="inline-flex items-center gap-2 text-green-400 text-sm"><Award className="w-5 h-5"/> 15+ Awards</span>
              <span className="inline-flex items-center gap-2 text-blue-400 text-sm"><BookOpen className="w-5 h-5"/> 20+ Publications</span>
              <span className="inline-flex items-center gap-2 text-purple-400 text-sm"><Users className="w-5 h-5"/> 50+ Projects</span>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Education</h3>
              <div className="space-y-3 text-slate-300">
                <div>
                  <p className="font-medium">M.S. Environmental Health Sciences</p>
                  <p className="text-sm text-slate-400">Johns Hopkins University • 2018</p>
                </div>
                <div>
                  <p className="font-medium">B.S. Computer Science</p>
                  <p className="text-sm text-slate-400">Stanford University • 2016</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Experience</h3>
              <div className="space-y-3 text-slate-300">
                <div>
                  <p className="font-medium">Senior Environmental Tech Consultant</p>
                  <p className="text-sm text-slate-400">Global Health Solutions • 2022–Present</p>
                </div>
                <div>
                  <p className="font-medium">Full-Stack Developer & Env. Analyst</p>
                  <p className="text-sm text-slate-400">EcoTech Innovations • 2019–2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
