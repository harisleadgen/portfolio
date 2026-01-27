"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-10 md:p-14 rounded-3xl border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-6 left-6 text-blue-500/20">
          <Quote size={80} />
        </div>
        
        <h3 className="text-3xl font-bold mb-8 relative z-10">About Me</h3>
        <p className="text-xl text-slate-300 leading-relaxed relative z-10 font-light">
          {personalInfo.summary}
        </p>
      </motion.div>
    </section>
  );
}