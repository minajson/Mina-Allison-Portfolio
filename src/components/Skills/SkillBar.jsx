import React from 'react';
import { skills, certifications } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">{category}</h3>
              <div className="space-y-3">
                {items.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map(cert => (
              <div key={cert.name} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700 hover:border-green-400 transition-colors">
                <Award className="w-8 h-8 text-green-400 mb-2" />
                <p className="text-white font-medium text-sm">{cert.name}</p>
                <p className="text-gray-400 text-xs mt-1">{cert.org} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
