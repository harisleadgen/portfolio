"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const latestPosition = useRef({ x: 0, y: 0 });
  const [isTiltEnabled, setIsTiltEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 30, mass: 0.2 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 30, mass: 0.2 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setIsTiltEnabled(finePointer && !reducedMotion);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handlePointerEnter = () => {
    if (!isTiltEnabled || !ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isTiltEnabled || !rectRef.current) return;

    const rect = rectRef.current;
    latestPosition.current = {
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    };

    if (frameRef.current !== null) return;

    frameRef.current = window.requestAnimationFrame(() => {
      x.set(latestPosition.current.x);
      y.set(latestPosition.current.y);
      frameRef.current = null;
    });
  };

  const handlePointerLeave = () => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-transform duration-200 ease-linear will-change-transform ${className}`}
    >
      <div style={{ transform: isTiltEnabled ? "translateZ(24px)" : "none" }}>
        {children}
      </div>
    </motion.div>
  );
}
