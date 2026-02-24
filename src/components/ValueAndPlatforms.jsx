// components/ValueAndPlatforms.jsx
// Dependencies: framer-motion  →  npm install framer-motion

import { motion } from "framer-motion";

const valueItems = [
  {
    icon: "🎯",
    title: "Early Risk Detection",
    text: "Identify failure risks before physical prototyping — saving time and avoiding costly design changes late in development.",
  },
  {
    icon: "⚖️",
    title: "Material Optimization",
    text: "Reduce material usage through simulation-driven design optimization without compromising structural integrity.",
  },
  {
    icon: "🛡️",
    title: "Safety & Compliance",
    text: "Improved safety margins and regulatory compliance with ASME, EN standards and industry-specific codes.",
  },
  {
    icon: "💰",
    title: "Reduced Prototype Costs",
    text: "Fewer physical prototypes and test iterations — shift validation to the virtual domain for significant cost savings.",
  },
  {
    icon: "⚡",
    title: "Faster Design Cycles",
    text: "Accelerated design cycles with rapid what-if studies and parametric optimization at the simulation level.",
  },
  {
    icon: "📊",
    title: "Decision-Ready Reports",
    text: "Validated, clearly interpreted simulation reports engineered for actionable engineering decisions.",
  },
];

const platforms = [
  { name: "ANSYS Mechanical / Workbench", type: "FEA" },
  { name: "Siemens StarCCM+", type: "CFD" },
  { name: "OpenFOAM", type: "CFD" },
  { name: "Altair HyperMesh", type: "FEA" },
  { name: "OptiStruct / Abaqus", type: "FEA" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ValueAndPlatforms() {
  return (
    <>
      {/* ---- VALUE ---- */}
      <section id="value" className="py-24 px-4 bg-[#050d1a]">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-orange-400 font-medium">
              Business Impact
            </span>
            <h2 className="mt-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Value Delivered Through Simulation
            </h2>
            <div className="w-14 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-5" />
            <p className="mt-4 text-slate-400 max-w-lg mx-auto text-base">
              Our simulation-driven approach delivers measurable engineering and business outcomes.
            </p>
          </motion.div>

          {/* Value Cards */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {valueItems.map((v) => (
              <motion.div
                key={v.title}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgba(14,165,233,0.45)" }}
                className="
                  bg-[rgba(10,32,64,0.7)] border border-sky-900/30
                  rounded-2xl p-6 text-center
                  hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)]
                  transition-all duration-300
                "
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">{v.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- PLATFORMS ---- */}
      <section id="platforms" className="py-24 px-4 bg-[#071428]">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-orange-400 font-medium">
              Tools & Methodology
            </span>
            <h2 className="mt-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Industry-Leading Simulation Platforms
            </h2>
            <div className="w-14 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-5" />
          </motion.div>

          {/* Platform badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {platforms.map((p) => (
              <motion.div
                key={p.name}
                whileHover={{ scale: 1.05 }}
                className="
                  group flex items-center gap-2
                  bg-sky-900/20 border border-sky-700/30
                  rounded-xl px-5 py-3 cursor-default
                  hover:bg-sky-900/40 hover:border-cyan-500/50
                  transition-all duration-300
                "
              >
                <span className="text-cyan-300 font-bold text-sm">{p.name}</span>
                <span className={`
                  text-[0.6rem] px-2 py-0.5 rounded-full font-semibold tracking-wider uppercase
                  ${p.type === "CFD"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    : "bg-orange-500/20 text-orange-300 border border-orange-500/30"}
                `}>
                  {p.type}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            className="text-center text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We work with industry-proven commercial and open-source tools to deliver reliable
            and validated results. All simulations follow best engineering practices including{" "}
            <strong className="text-slate-300">mesh convergence studies</strong>,{" "}
            <strong className="text-slate-300">validation checks</strong>, and{" "}
            <strong className="text-slate-300">clear engineering interpretation</strong>.
          </motion.p>

        </div>
      </section>
    </>
  );
}