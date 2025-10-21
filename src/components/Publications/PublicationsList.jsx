import React from 'react';
import { publications } from '../data/publications';
import { BookOpen, Calendar, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PublicationsList() {
  return (
    <section id="publications" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          Research & Publications
        </motion.h2>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-green-400 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-1"><BookOpen className="w-4 h-4"/>{pub.journal}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4"/>{pub.year}</span>
                <span className="inline-flex items-center gap-1"><Globe className="w-4 h-4"/>DOI: {pub.doi}</span>
                <span className="inline-flex items-center gap-1"><Award className="w-4 h-4"/>{pub.citations} citations</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
