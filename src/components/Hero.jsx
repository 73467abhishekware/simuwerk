// components/Hero.jsx
// Dependencies: framer-motion → npm install framer-motion
// Fonts: Add to index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet"/>

import { motion,  animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Animated counter hook ─────────────────────────── */
function useCounter(target, duration = 2, startDelay = 0.8) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.floor(v)),
      });
      return controls.stop;
    }, startDelay * 1000);
    return () => clearTimeout(timeout);
  }, [target, duration, startDelay]);
  return value;
}

/* ── Floating grid dots (pure CSS + framer) ────────── */
const DOT_COUNT = 28;
const dots = Array.from({ length: DOT_COUNT }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 5,
}));

/* ── Diagonal scan line ─────────────────────────────── */
function ScanLine() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        style={{ top: "35%", left: "-50%" }}
        animate={{ left: ["−50%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 7, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-sky-300/20 to-transparent"
        style={{ top: "65%", left: "-50%" }}
        animate={{ left: ["−50%", "100%"] }}
        transition={{ duration: 5, delay: 2.5, repeat: Infinity, repeatDelay: 7, ease: "linear" }}
      />
    </motion.div>
  );
}

/* ── Rotating engineering ring ──────────────────────── */
function EngineeringRing({ size, strokeColor, duration, reverse = false, extraStyle = {} }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ display: "block", ...extraStyle }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="8 14" />
      <circle cx="100" cy="100" r="70" fill="none" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="4 20" />
      <circle cx="100" cy="100" r="50" fill="none" stroke={strokeColor} strokeWidth="0.4" strokeDasharray="2 24" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 65 * Math.cos(rad);
        const y1 = 100 + 65 * Math.sin(rad);
        const x2 = 100 + 90 * Math.cos(rad);
        const y2 = 100 + 90 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={strokeColor} strokeWidth="1.2" />;
      })}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx2 = 100 + 90 * Math.cos(rad);
        const cy2 = 100 + 90 * Math.sin(rad);
        return <circle key={`dot-${angle}`} cx={cx2} cy={cy2} r="2.5" fill={strokeColor} />;
      })}
    </motion.svg>
  );
}

/* ── Stats ──────────────────────────────────────────── */
const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 18, suffix: "", label: "CFD Capabilities" },
  { value: 11, suffix: "", label: "FEA Capabilities" },
  { value: 8,  suffix: "+", label: "Industries Served" },
];

function StatItem({ stat, index }) {
  const count = useCounter(stat.value, 1.8, 1.2 + index * 0.15);
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.12, duration: 0.6 }}
    >
      <div
        className="font-bold text-3xl md:text-4xl leading-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          background: "linear-gradient(135deg, #22d3ee, #f97316)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}{stat.suffix}
      </div>
      <div className="text-[0.68rem] tracking-[0.16em] uppercase text-slate-500 mt-1">
        {stat.label}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════
   HERO COMPONENT
══════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% -5%, rgba(14,165,233,0.2) 0%, transparent 55%)," +
          "radial-gradient(ellipse 50% 50% at 85% 85%, rgba(249,115,22,0.08) 0%, transparent 50%)," +
          "radial-gradient(ellipse 40% 40% at 10% 80%, rgba(34,211,238,0.05) 0%, transparent 50%)," +
          "#050d1a",
      }}
    >
      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Floating dots ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: dot.size,
              height: dot.size,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              opacity: 0,
            }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.4, 0.8] }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Scan lines ── */}
      <ScanLine />

      {/* ── Engineering rings — bottom-right corner ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          right: 0,
          transform: "translate(30%, 30%)",
          opacity: 0.22,
        }}
      >
        <EngineeringRing size={420} strokeColor="#22d3ee" duration={55} />
      </div>

      {/* ── Engineering rings — top-left corner ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-30%, -30%)",
          opacity: 0.18,
        }}
      >
        <EngineeringRing size={360} strokeColor="#f97316" duration={75} reverse />
      </div>

      {/* ── Small accent ring — top-right ── */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "5%",
          opacity: 0.12,
        }}
      >
        <EngineeringRing size={160} strokeColor="#38bdf8" duration={35} />
      </div>

      {/* ── Glow orbs ── */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ══ MAIN CONTENT ══ */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full mx-auto pt-24 pb-10">

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="px-4 py-1.5 rounded-full text-[0.7rem] tracking-[0.18em] uppercase font-semibold"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.35)",
              color: "#fb923c",
            }}
          >
            25+ Years of Global Engineering Expertise
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="font-extrabold leading-[1.0] tracking-tight mb-2"
        >
          {/* Line 1 */}
          <span
            className="block text-[clamp(3.2rem,8vw,6.5rem)]"
            style={{
              background: "linear-gradient(100deg, #ffffff 0%, #bae6fd 50%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SIMUWERK
          </span>

          {/* Line 2 — outlined text for depth */}
          <span
            className="block text-[clamp(3.2rem,8vw,6.5rem)]"
            style={{
              WebkitTextStroke: "1.5px rgba(34,211,238,0.5)",
              color: "transparent",
              letterSpacing: "0.06em",
            }}
          >
            INDIA
          </span>
        </motion.h1>

        {/* Thin orange divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="w-32 h-[2px] mx-auto my-7 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, #f97316, #fbbf24, transparent)",
            transformOrigin: "center",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-slate-400 font-light text-[clamp(1rem,2.2vw,1.25rem)] max-w-xl mx-auto leading-relaxed mb-3"
        >
          Advanced{" "}
          <span className="text-cyan-300 font-medium">CFD & FEA Simulations</span> for
          industrial engineering — from concept validation to regulatory compliance.
        </motion.p>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
        >
          {["De-risk Designs", "Optimize Performance", "Accelerate Development"].map(
            (pill, i) => (
              <span
                key={pill}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.2)",
                  color: "#7dd3fc",
                }}
              >
                {pill}
              </span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Primary */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative group overflow-hidden px-9 py-4 rounded-xl font-semibold text-white text-sm tracking-wide"
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #22d3ee)",
              boxShadow: "0 0 30px rgba(14,165,233,0.3)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                transform: "skewX(-20deg)",
              }}
            />
            <span className="relative">Get Consultation →</span>
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="#cfd"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              border: "1px solid rgba(34,211,238,0.3)",
              color: "#67e8f9",
              background: "rgba(34,211,238,0.04)",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(34,211,238,0.1)";
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.6)";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(34,211,238,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(34,211,238,0.04)";
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Capabilities
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="border-t border-sky-900/40 pt-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-slate-600">Scroll</span>
        <motion.div
          className="w-[1px] h-8 rounded-full"
          style={{ background: "linear-gradient(180deg, rgba(14,165,233,0.6), transparent)" }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}