"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data";
import { Mail, Linkedin, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [text, setText] = useState("");
  const fullText = personalInfo.name;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden perspective-1000">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-30" />
      
      <motion.div style={{ y: y1 }} className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm"
            animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 20px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Available for Hire
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight min-h-[1.2em]">
            Hi, I'm <br />
            <span className="text-gradient">
              {text}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 bg-blue-500 h-[0.8em] align-middle ml-2"
              />
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg transition-colors relative overflow-hidden group"
            >
               <span className="relative z-10 flex items-center gap-2">
                 <Mail className="w-5 h-5" /> Get in Touch
               </span>
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg backdrop-blur-md transition-colors hover:border-white/20"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 3, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
