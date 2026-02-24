


import { motion, useScroll, useTransform, useSpring } from "framer-motion";


function gearPath({ teeth = 16, rOuter = 90, rInner = 72, rBore = 22, cx = 100, cy = 100 } = {}) {
  const pts = [];
  const toothAngle = (Math.PI * 2) / teeth;
  const half = toothAngle / 2;
  const quarter = toothAngle / 4;

  for (let i = 0; i < teeth; i++) {
    const base = i * toothAngle - Math.PI / 2;

    // Root → left flank → tip → right flank → root
    const a0 = base;
    const a1 = base + quarter * 0.7;
    const a2 = base + quarter * 1.0;
    const a3 = base + quarter * 1.0 + half * 0.6;
    const a4 = base + quarter * 1.0 + half * 0.6 + quarter * 0.4;
    const a5 = base + toothAngle;

    const pt = (r, angle) => [
      cx + r * Math.cos(angle),
      cy + r * Math.sin(angle),
    ];

    if (i === 0) pts.push(`M ${pt(rInner, a0).join(" ")}`);
    else         pts.push(`L ${pt(rInner, a0).join(" ")}`);

    pts.push(`L ${pt(rOuter, a1).join(" ")}`);
    pts.push(`L ${pt(rOuter, a3).join(" ")}`);
    pts.push(`L ${pt(rInner, a4).join(" ")}`);
  }
  pts.push("Z");

  // Center bore hole (subtracted via SVG even-odd)
  const borePts = [];
  for (let i = 0; i <= 32; i++) {
    const angle = (i / 32) * Math.PI * 2;
    const x = cx + rBore * Math.cos(angle);
    const y = cy + rBore * Math.sin(angle);
    borePts.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
  }
  borePts.push("Z");

  return pts.join(" ") + " " + borePts.join(" ");
}

/* ─────────────────────────────────────────────
   Small inner detail ring path
───────────────────────────────────────────── */
function ringPath(cx, cy, r) {
  return `M ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} Z`;
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ScrollGear({
  side = "right",       // "right" | "left"  — which side to stick to
  size = 220,           // px size of the gear widget
  baseOpacity = 0.18,   // resting opacity
  hoverOpacity = 0.55,  // opacity on hover
}) {
  /* scroll → rotation */
  const { scrollYProgress } = useScroll();

  // Map full page scroll (0→1) to 0→720° (two full rotations)
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // Spring smoothing so it feels physical, not instant
  const rotate = useSpring(rawRotate, {
    stiffness: 40,
    damping: 18,
    mass: 1.2,
  });

  // Subtle vertical drift as you scroll (parallax feel)
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
    { stiffness: 30, damping: 14 }
  );

  const gearD  = gearPath({ teeth: 18, rOuter: 88, rInner: 70, rBore: 20, cx: 100, cy: 100 });
  const ring1D = ringPath(100, 100, 56);
  const ring2D = ringPath(100, 100, 40);

  const posStyle =
    side === "right"
      ? { right: "2vw" }
      : { left: "2vw" };

  return (
    <motion.div
      aria-hidden
      className="fixed z-[50] pointer-events-none select-none"
      style={{
        top: "50vh",
        translateY: "-50%",
        ...posStyle,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: baseOpacity, scale: 1 }}
      transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ opacity: hoverOpacity, scale: 1.06 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.12) 30%, transparent 72%)",
          filter: "blur(18px)",
          y,
        }}
      />

      {/* The SVG gear — rotates on scroll */}
      <motion.svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        style={{
          rotate,
          y,
          filter: "drop-shadow(0 0 14px rgba(14,165,233,0.35))",
          // 3-D perspective tilt — fixed, gives depth illusion
          transform: `perspective(600px) rotateX(18deg) rotateY(${side === "right" ? "-12deg" : "12deg"})`,
        }}
      >
        <defs>
          {/* Main gear gradient */}
          <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="45%"  stopColor="#0ea5e9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.5" />
          </linearGradient>

          {/* Tooth highlight */}
          <linearGradient id="toothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#7dd3fc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
          </linearGradient>

          {/* Clip for even-odd bore */}
          <clipPath id="gearClip">
            <path d={gearD} fillRule="evenodd" />
          </clipPath>
        </defs>

        {/* ── Gear body ── */}
        <path
          d={gearD}
          fillRule="evenodd"
          fill="url(#gearGrad)"
          stroke="rgba(56,189,248,0.5)"
          strokeWidth="0.8"
        />

        {/* ── Tooth face highlight (top rim) ── */}
        <path
          d={gearD}
          fillRule="evenodd"
          fill="url(#toothGrad)"
          opacity="0.3"
        />

        {/* ── Inner detail rings ── */}
        <path
          d={ring1D}
          fillRule="evenodd"
          fill="none"
          stroke="rgba(125,211,252,0.35)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <path
          d={ring2D}
          fillRule="evenodd"
          fill="none"
          stroke="rgba(125,211,252,0.25)"
          strokeWidth="0.7"
        />

        {/* ── Spoke lines ── */}
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={100 + 22 * Math.cos(rad)}
              y1={100 + 22 * Math.sin(rad)}
              x2={100 + 54 * Math.cos(rad)}
              y2={100 + 54 * Math.sin(rad)}
              stroke="rgba(125,211,252,0.3)"
              strokeWidth="1.2"
            />
          );
        })}

        {/* ── Center hub ── */}
        <circle
          cx="100" cy="100" r="12"
          fill="rgba(14,165,233,0.5)"
          stroke="rgba(125,211,252,0.6)"
          strokeWidth="1"
        />
        <circle
          cx="100" cy="100" r="6"
          fill="rgba(186,230,253,0.7)"
        />

        {/* ── Gloss highlight spot ── */}
        <ellipse
          cx="82" cy="75"
          rx="14" ry="8"
          fill="rgba(255,255,255,0.07)"
          transform="rotate(-30 82 75)"
        />
      </motion.svg>
    </motion.div>
  );
}