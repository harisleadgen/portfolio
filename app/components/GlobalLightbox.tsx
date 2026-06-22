"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GlobalLightbox() {
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Case 1: Clicked on a testimonial view proof button/link
      const testimonialLink = target.closest("a[title='View Proof']");
      if (testimonialLink) {
        const href = testimonialLink.getAttribute("href");
        if (href) {
          event.preventDefault();
          event.stopPropagation();
          setActiveImageUrl(href);
          return;
        }
      }

      // Case 2: Clicked directly on an image or inside an image container
      const img = target.closest("img");
      if (img) {
        const src = img.getAttribute("src");
        // Avoid opening tiny icons, avatars, or system elements
        if (src && !src.includes("favicon") && !src.includes("logo") && !src.includes("emoji")) {
          event.preventDefault();
          event.stopPropagation();
          setActiveImageUrl(src);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, []);

  // Handle escape key and prevent body scroll
  useEffect(() => {
    if (!activeImageUrl) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageUrl(null);
      }
    };

    // Save previous overflow state
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageUrl]);

  return (
    <AnimatePresence>
      {activeImageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveImageUrl(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageUrl(null);
            }}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all z-50 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Image Wrapper */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center p-2"
          >
            <img
              src={activeImageUrl}
              alt="Enlarged preview"
              className="max-w-full max-h-[80vh] rounded-2xl border border-white/10 shadow-2xl object-contain bg-slate-900/50"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
