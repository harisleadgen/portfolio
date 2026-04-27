"use client";

import { personalInfo } from "../data";
import { Github, Linkedin, Mail } from "lucide-react";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2C6.53 2 2.06 6.45 2.06 11.93c0 1.76.47 3.48 1.35 4.99L2 22l5.22-1.37a10.02 10.02 0 0 0 4.82 1.23h.01c5.5 0 9.98-4.45 9.98-9.93C22.03 6.45 17.55 2 12.04 2Zm0 18.18h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.1.81.83-3.01-.2-.31a8.17 8.17 0 0 1-1.27-4.4c0-4.55 3.72-8.25 8.29-8.25a8.29 8.29 0 0 1 8.29 8.25c0 4.55-3.72 8.25-8.3 8.25Zm4.55-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.51.12-.12.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.36-.78-1.86-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.69 4.29 3.77.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

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
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/harisleadgen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110"
            aria-label="Visit GitHub profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=923126801559"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110"
            aria-label="Message on WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110"
            aria-label="Send email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}