// hooks/useScrollAnimations.js
// ─────────────────────────────────────────────────────────────
// Central scroll animation system for Simuwerk India
// Usage: import any hook/component you need from this file
//
// Dependencies: framer-motion → npm install framer-motion
// ─────────────────────────────────────────────────────────────

import {
  useScroll,
  useTransform,
  useSpring,
  useInView,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ══════════════════════════════════════════════════════════════
   1. useParallax — element cha Y shift scroll pramaane
   Usage:
     const { ref, y } = useParallax({ speed: 0.3 });
     <motion.div ref={ref} style={{ y }}>...</motion.div>
══════════════════════════════════════════════════════════════ */
export function useParallax({ speed = 0.2, offset = ["start end", "end start"] } = {}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Smooth spring on top of raw scroll
  const raw = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `-${speed * 100}px`]);
  const y = useSpring(raw, { stiffness: 60, damping: 20, mass: 0.8 });

  return { ref, y };
}

/* ══════════════════════════════════════════════════════════════
   2. useReveal — InView fade+slide with optional stagger delay
   Usage:
     const { ref, controls } = useReveal();
     <motion.div ref={ref} animate={controls} variants={fadeUp}>
══════════════════════════════════════════════════════════════ */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px", amount: threshold });
  return { ref, isInView };
}

/* ══════════════════════════════════════════════════════════════
   3. Variants — reusable framer-motion variants
══════════════════════════════════════════════════════════════ */
export const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1, filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ══════════════════════════════════════════════════════════════
   4. <ParallaxSection> — section wrapper with depth bg layer
   Props:
     bgSpeed   — how fast the bg layer moves (default 0.25)
     fgSpeed   — foreground shift (default 0.08)
     children  — content
     className — extra classes for the outer wrapper
   Usage:
     <ParallaxSection bgSpeed={0.3} className="py-24 bg-[#071428]">
       ...your section content...
     </ParallaxSection>
══════════════════════════════════════════════════════════════ */
export function ParallaxSection({ children, className = "", bgSpeed = 0.25, fgSpeed = 0.08 }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background layer moves faster → depth illusion
  const bgY = useSpring(
    useTransform(scrollYProgress, [0, 1], [`${bgSpeed * 120}px`, `-${bgSpeed * 120}px`]),
    { stiffness: 50, damping: 18 }
  );

  // Foreground content moves slower
  const fgY = useSpring(
    useTransform(scrollYProgress, [0, 1], [`${fgSpeed * 60}px`, `-${fgSpeed * 60}px`]),
    { stiffness: 50, damping: 18 }
  );

  // Subtle scale on background
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* ── Parallax background glow layer ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY, scale: bgScale }}
      >
        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(14,165,233,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Bottom glow */}
        <div
          className="absolute bottom-0 right-1/4 w-[50%] h-[200px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(249,115,22,0.04) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </motion.div>

      {/* ── Foreground content ── */}
      <motion.div style={{ y: fgY }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   5. <RevealText> — word-by-word text reveal on scroll
   Props:
     text      — string to animate
     el        — element tag (default "h2")
     className — classes
     delay     — extra start delay (default 0)
   Usage:
     <RevealText text="FEA Simulation Capabilities" el="h2" className="text-4xl font-bold" />
══════════════════════════════════════════════════════════════ */
export function RevealText({ text, el: El = "h2", className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const words = text.split(" ");

  return (
    <El ref={ref} className={`overflow-hidden ${className}`} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="flex flex-wrap gap-x-[0.28em] gap-y-1 justify-center">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </El>
  );
}

/* ══════════════════════════════════════════════════════════════
   6. <RevealBlock> — generic fade+slide block reveal
   Props:
     delay     — stagger delay (default 0)
     direction — "up" | "left" | "right" (default "up")
     children
     className
   Usage:
     <RevealBlock delay={0.2} className="...">
       <p>some content</p>
     </RevealBlock>
══════════════════════════════════════════════════════════════ */
export function RevealBlock({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const dirMap = {
    up:    { hidden: { y: 40, x: 0 },    visible: { y: 0, x: 0 } },
    left:  { hidden: { x: -40, y: 0 },   visible: { x: 0, y: 0 } },
    right: { hidden: { x: 40, y: 0 },    visible: { x: 0, y: 0 } },
    down:  { hidden: { y: -30, x: 0 },   visible: { y: 0, x: 0 } },
  };

  const d = dirMap[direction] || dirMap.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...d.hidden, filter: "blur(4px)" }}
      animate={
        isInView
          ? { opacity: 1, ...d.visible, filter: "blur(0px)" }
          : {}
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   7. <StaggerGrid> — grid with staggered card reveals
   Props:
     children  — array of card elements
     className — grid classes
   Usage:
     <StaggerGrid className="grid grid-cols-3 gap-5">
       <div>card 1</div>
       <div>card 2</div>
     </StaggerGrid>
══════════════════════════════════════════════════════════════ */
export function StaggerGrid({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   8. <AnimatedCard> — individual card inside StaggerGrid
   Usage (always inside <StaggerGrid>):
     <AnimatedCard>
       <div>your card content</div>
     </AnimatedCard>
══════════════════════════════════════════════════════════════ */
export function AnimatedCard({ children, className = "" }) {
  return (
    <motion.div className={className} variants={cardReveal}>
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   9. <SectionDivider> — animated orange accent line
   Usage:
     <SectionDivider />
══════════════════════════════════════════════════════════════ */
export function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="mx-auto mt-5 h-[3px] rounded-full"
      style={{
        background: "linear-gradient(90deg, transparent, #f97316, #fbbf24, transparent)",
        transformOrigin: "center",
      }}
      initial={{ scaleX: 0, width: 60 }}
      animate={isInView ? { scaleX: 1, width: 60 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}