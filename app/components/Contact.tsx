"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Send, User, Building2, Mail, Phone, Loader2, CheckCircle, X } from "lucide-react";

type ContactProps = {
  isModal?: boolean;
  onClose?: () => void;
};

export default function Contact({ isModal = false, onClose }: ContactProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    number: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", businessName: "", email: "", number: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
    
    setTimeout(() => {
      if (status !== "success") setStatus("idle");
    }, 3000);
  };

  const content = (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <motion.div
        initial={isModal ? { opacity: 0, scale: 0.95 } : { opacity: 0, y: 24 }}
        whileInView={!isModal ? { opacity: 1, y: 0 } : undefined}
        animate={isModal ? { opacity: 1, scale: 1 } : undefined}
        viewport={!isModal ? { once: true } : undefined}
        transition={{ duration: 0.4 }}
        className="glass-card p-6 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden w-full bg-slate-900/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        {isModal && (
          <button 
            onClick={onClose} 
            type="button"
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors z-20 bg-white/5 rounded-full p-2 hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        <div className="text-center mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            Get In Touch
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's work together
          </h3>
          <p className="text-slate-400">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="businessName" className="text-sm font-medium text-slate-300 ml-1">Business Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="number" className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "idle" && (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </>
            )}
            {status === "loading" && (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Message Sent!</span>
              </>
            )}
            {status === "error" && (
              <span>Error. Please try again.</span>
            )}
          </motion.button>
        </form>
      </motion.div>
    </>
  );

  const modalNode = (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto relative my-8">
          {content}
        </div>
      </div>
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (isModal) {
    if (!mounted) return null;
    return createPortal(modalNode, document.body);
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative">
      {content}
    </section>
  );
}
