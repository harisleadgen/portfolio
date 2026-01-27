"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Award, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "#" },
    { icon: <User size={20} />, label: "About", href: "#about" },
    { icon: <Briefcase size={20} />, label: "Work", href: "#experience" },
    { icon: <Award size={20} />, label: "Skills", href: "#skills" },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 p-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
        <a
          href="mailto:Harisleadgen@gmail.com"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors"
        >
          Hire Me
        </a>
      </div>
    </motion.div>
  );
}
