"use client";

import { motion } from "framer-motion";
import { education } from "../data";
import { GraduationCap } from "lucide-react";
import TiltCard from "./ui/TiltCard";

export default function Education() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h3 className="text-4xl font-bold text-center mb-16">
        <span className="text-gradient">Education</span>
      </h3>
      
      <div className="grid gap-8">
        {education.map((edu, index) => (
          <TiltCard key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left hover:border-blue-500/30 transition-all group"
            >
              <div className="p-5 bg-blue-500/10 rounded-2xl text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                <GraduationCap size={40} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">{edu.institution}</h4>
                <p className="text-xl text-blue-400 mb-2">{edu.degree}</p>
                <p className="text-slate-500 font-mono text-sm bg-slate-800/50 inline-block px-3 py-1 rounded-full border border-white/5">
                  {edu.date}
                </p>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
