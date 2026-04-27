"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 32, stiffness: 500, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const hasPrecisePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasPrecisePointer || prefersReducedMotion) return;

    let animationFrame: number | null = null;
    let latestX = -100;
    let latestY = -100;

    const moveCursor = (e: PointerEvent) => {
      latestX = e.clientX - 12;
      latestY = e.clientY - 12;

      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        cursorX.set(latestX);
        cursorY.set(latestY);
        animationFrame = null;
      });
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed left-0 top-0 w-6 h-6 rounded-full border border-blue-400/60 pointer-events-none z-[100] hidden md:block will-change-transform"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <div className="absolute inset-1 rounded-full bg-blue-400/20" />
    </motion.div>
  );
}
