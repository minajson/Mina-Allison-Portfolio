import React from "react";
import { Mail, Phone, MapPin, Briefcase, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          Let’s Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <p className="text-slate-300">
              I’m open to collaborations, consulting, and roles at the intersection of Environmental Health and Tech.
            </p>

            <div className="space-y-3 text-slate-300">
              <a href="mailto:mina.allison@envirotech.com" className="flex items-center gap-3 hover:text-green-400"><Mail className="w-5 h-5" /> mina.allison@envirotech.com</a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-green-400"><Phone className="w-5 h-5" /> +1 (234) 567-890</a>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> San Francisco, CA / Remote</div>
              <div className="flex items-center gap-3"><Briefcase className="w-5 h-5" /> Open to Opportunities</div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="https://github.com/minaallison" className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-green-400 hover:bg-slate-700"><Github className="w-6 h-6" /></a>
              <a href="https://linkedin.com/in/minaallison" className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:text-green-400 hover:bg-slate-700"><Linkedin className="w-6 h-6" /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-slate-800/50 rounded-lg p-6 border border-slate-700"
          >
            <h4 className="text-lg font-semibold text-green-400 mb-4">Quick Contact</h4>
            <p className="text-slate-300 mb-4">Email me and include:</p>
            <ul className="text-sm text-slate-400 space-y-1 mb-6 list-disc ml-5">
              <li>Scope & timeline</li>
              <li>Tech stack or data sources</li>
              <li>Environmental/health focus areas</li>
            </ul>
            <a
              href="mailto:mina.allison@envirotech.com?subject=Portfolio%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition"
            >
              <Mail className="w-5 h-5" /> Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
