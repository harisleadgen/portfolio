"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data";
import { Code2, GraduationCap, Megaphone, ShieldCheck } from "lucide-react";

const profileHighlights = [
  {
    icon: <GraduationCap size={22} />,
    label: "Computer Science Graduate",
    detail: "Technical foundation for building, testing, and improving digital systems."
  },
  {
    icon: <Megaphone size={22} />,
    label: "Marketing & Social Media",
    detail: "6+ years across campaigns, outreach, audience growth, and digital positioning."
  },
  {
    icon: <Code2 size={22} />,
    label: "Web Development",
    detail: "Hands-on project experience creating and optimizing modern web applications."
  },
  {
    icon: <ShieldCheck size={22} />,
    label: "Cybersecurity Training",
    detail: "Industry-led cybersecurity exposure through NETSOL Technologies."
  }
];

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            About Me
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Technical builder with a marketer&apos;s understanding of growth.
          </h3>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            {personalInfo.summary}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {profileHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="glass-card rounded-2xl border border-white/5 p-5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300">
                {item.icon}
              </div>
              <h4 className="mb-2 font-bold text-white">{item.label}</h4>
              <p className="text-sm leading-relaxed text-slate-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}