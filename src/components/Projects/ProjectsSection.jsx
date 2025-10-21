import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { title: "EcoTrack Pro", category: "Environmental + Tech", description: "Real-time air & water quality with predictive analytics.", tech: ["React","Node","Postgres","IoT","D3","AWS"], impact: "30% faster incident response across 50+ cities", github: "#", live: "#" },
  { title: "HealthMap Dashboard", category: "Public Health", description: "GIS dashboard for disease patterns vs environment.", tech: ["React","Python","Leaflet","FastAPI","MongoDB"], impact: "Used by 15 health departments", github: "#", live: "#" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-green-400 hover:-translate-y-0.5 transition"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                    <span className="mt-2 inline-block px-3 py-1 bg-green-400/15 text-green-400 text-xs rounded-full">{p.category}</span>
                  </div>
                  <div className="flex gap-2">
                    <a className="text-slate-400 hover:text-green-400" href={p.github}><Github className="w-5 h-5" /></a>
                    <a className="text-slate-400 hover:text-green-400" href={p.live}><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{p.description}</p>
                <p className="text-sm font-semibold text-green-400 mb-1">Impact</p>
                <p className="text-xs text-slate-400 mb-4">{p.impact}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-slate-700 text-slate-200 text-xs rounded">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
