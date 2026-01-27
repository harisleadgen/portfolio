"use client";

import { motion } from "framer-motion";
import { testimonials } from "../data";
import Image from "next/image";
import TiltCard from "./ui/TiltCard";
import { Quote, ExternalLink } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-slate-950 relative">
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-gradient">Wall of Love</span>
        </motion.h2>
        <p className="text-slate-400 text-lg">
          Verified testimonials from the industry leaders and colleagues.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8 px-8">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial: any, index: number) => (
            <div key={index} className="w-[350px] md:w-[450px] flex-shrink-0 py-4">
              <TiltCard className="h-full">
                <div className="glass-card p-8 rounded-3xl border border-white/5 h-full relative group flex flex-col hover:border-blue-500/30 transition-all duration-500">
                  {/* Floating Emoji Avatar */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative">
                       <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-150 group-hover:bg-blue-500/40 transition-colors" />
                       <div className="relative w-16 h-16 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                         {testimonial.emoji}
                       </div>
                    </div>
                    <div className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                      <Quote size={40} fill="currentColor" />
                    </div>
                  </div>
                  
                  <p className="text-slate-300 italic mb-8 leading-relaxed text-lg font-light flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-blue-600 rounded-full" />
                      <div>
                        <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold truncate max-w-[180px]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <a 
                      href={testimonial.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all group/link"
                      title="View Proof"
                    >
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
