"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data";
import { Briefcase } from "lucide-react";
import TiltCard from "./ui/TiltCard";
import Image from "next/image";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto relative perspective-1000">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A journey through my professional career and growth.
        </p>
      </motion.div>

      <div className="relative">
        {/* Animated Center Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2 hidden md:block" />
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-0 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full origin-top" 
        />

        <div className="space-y-24">
          {experience.map((job: any, index: number) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-0 md:left-1/2 top-0 w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-800 z-20 transform -translate-x-1/2 md:translate-y-2 hidden md:flex items-center justify-center shadow-xl"
              >
                 <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                 >
                   <Briefcase size={16} className="text-blue-400" />
                 </motion.div>
              </motion.div>

              {/* Content Card */}
              <div className="flex-1"></div>
              
              <div className="flex-1">
                <TiltCard className="h-full">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="h-full glass-card p-8 rounded-2xl border border-white/5 group relative overflow-hidden flex flex-col"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-colors" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {job.role}
                      </h3>
                      <span className="text-sm font-mono text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-white/5">
                        {job.date}
                      </span>
                    </div>
                    
                    <p className="text-lg text-blue-400 font-medium mb-1">{job.company}</p>
                    <p className="text-sm text-slate-500 mb-6">{job.location}</p>

                    {job.description.length > 0 && (
                      <ul className="space-y-3 mb-6">
                        {job.description.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Image Section */}
                    {job.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-auto pt-4"
                      >
                        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-all">
                          <Image
                            src={job.image}
                            alt={`${job.company} Team`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-sm font-medium">Team at NETSOL</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}