"use client";

import { personalInfo } from "../data";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h4>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}