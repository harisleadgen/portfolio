"use client";

import { motion } from "framer-motion";
import { skills, certifications } from "../data";
import { Award } from "lucide-react";
import TiltCard from "./ui/TiltCard";

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Skills */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="text-gradient">Technical Arsenal</span>
          </motion.h3>
          
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
                className="px-6 py-3 glass-card rounded-full text-slate-300 font-medium cursor-default hover:bg-white/10 hover:text-white hover:border-blue-500/50 transition-all border border-white/5"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="text-gradient">Certifications</span>
          </motion.h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <TiltCard key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="flex items-center gap-4 p-5 glass-card rounded-xl border border-white/5 group"
                >
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                    <Award size={24} />
                  </div>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors text-lg">
                    {cert}
                  </span>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
