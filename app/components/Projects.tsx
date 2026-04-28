"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderKanban, Sparkles } from "lucide-react";
import { projects } from "../data";
import TiltCard from "./ui/TiltCard";

export default function Projects() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto relative">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl -z-10" />
      <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 max-w-3xl"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-300">
          <FolderKanban size={16} />
          Project Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Practical projects where I combine QA, AI-powered workflows, automation, and digital marketing execution.
        </p>
      </motion.div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <TiltCard key={project.title}>
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
              className="glass-card overflow-hidden rounded-3xl border border-white/5"
            >
              <div className="grid min-h-[520px] lg:grid-cols-2">
                <div className="relative min-h-[320px] overflow-hidden border-b border-white/5 bg-slate-900/70 lg:min-h-full lg:border-b-0 lg:border-r">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain object-center p-3"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.24),transparent_34%)]" />
                      <div className="relative flex items-center justify-between">
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-blue-200 backdrop-blur">
                          <Sparkles size={26} />
                        </div>
                        <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">
                          Preview
                        </span>
                      </div>
                      <div className="relative space-y-3">
                        <div className="h-3 w-4/5 rounded-full bg-white/20" />
                        <div className="h-3 w-2/3 rounded-full bg-white/10" />
                        <div className="grid grid-cols-3 gap-3 pt-3">
                          <div className="h-16 rounded-2xl border border-white/10 bg-white/10" />
                          <div className="h-16 rounded-2xl border border-white/10 bg-white/5" />
                          <div className="h-16 rounded-2xl border border-white/10 bg-white/10" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex min-h-[520px] flex-col justify-center p-8 md:p-10 lg:p-12">
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-blue-300">
                        {project.type} · {project.location}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-slate-800/60 px-4 py-2 text-sm font-mono text-slate-300">
                      {project.date}
                    </span>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {project.description.map((item) => (
                      <li key={item} className="flex gap-3 text-slate-300 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-500"
                    >
                      View Project
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-400">
                      Project link coming soon
                      <ArrowUpRight size={18} />
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
