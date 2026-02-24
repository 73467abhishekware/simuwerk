// components/SugarIndustry.jsx
// Dependencies: framer-motion  →  npm install framer-motion

import { motion } from "framer-motion";

const sugarCapabilities = [
  {
    icon: "🔥",
    title: "Boiler & Combustion Systems",
    items: [
      "Combustion analysis of bagasse-fired boilers",
      "Air–fuel mixing optimization & excess air reduction",
      "Flue gas flow distribution & temperature uniformity analysis",
      "Porosity modeling of bagasse beds & tube banks",
    ],
  },
  {
    icon: "🌡️",
    title: "Evaporators & Heat Exchangers",
    items: [
      "Flow distribution & heat transfer analysis in evaporators",
      "Scaling & fouling impact studies and performance optimization",
      "Tube-side & shell-side CFD analysis for efficiency improvement",
    ],
  },
  {
    icon: "💧",
    title: "Juice Heaters & Clarifiers",
    items: [
      "Flow uniformity & residence time distribution analysis",
      "Dead zone & short-circuit flow identification",
      "Design optimization for improved clarification efficiency",
    ],
  },
  {
    icon: "🔄",
    title: "Centrifuges & Crystallizers",
    items: [
      "Multiphase flow modeling of massecuite",
      "Flow pattern & shear analysis to improve crystal quality",
      "Process optimization for reduced energy consumption",
    ],
  },
  {
    icon: "🔩",
    title: "Pumps, Pipelines & Slurry Handling",
    items: [
      "Pressure drop prediction for juice, syrup & slurry flows",
      "Erosion & wear assessment in high-solid content flows",
      "Design optimization to minimize choking & maintenance issues",
    ],
  },
  {
    icon: "🌬️",
    title: "Cooling Towers & Ventilation",
    items: [
      "Thermal performance & airflow distribution studies",
      "Plume behaviour & recirculation analysis",
      "Fan performance optimization",
    ],
  },
];

const valueItems = [
  { icon: "⬇️", text: "Reduction in fuel & power consumption" },
  { icon: "♻️", text: "Improved heat recovery & throughput" },
  { icon: "🔧", text: "Lower maintenance & unplanned shutdowns" },
  { icon: "📈", text: "Support for revamp, capacity expansion & debottlenecking" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function SugarIndustry() {
  return (
    <section
      id="sugar"
      className="py-24 px-4 bg-gradient-to-b from-[#071428] to-[#0a2040]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-orange-400 font-medium">
            Industry Specialization
          </span>
          <h2 className="mt-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-amber-300 to-orange-400 bg-clip-text text-transparent">
            CFD for Sugar Industry &<br className="hidden md:block" /> Process Plants
          </h2>
          <div className="w-14 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-5" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
            Deep domain expertise in the unique fluid, thermal, and multiphase
            challenges of sugar manufacturing and process plant engineering.
          </p>
        </motion.div>

        {/* Capability Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {sugarCapabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "rgba(249,115,22,0.45)" }}
              className="
                group bg-[rgba(5,13,26,0.6)]
                border border-sky-900/30 rounded-2xl p-6
                hover:shadow-[0_12px_40px_rgba(249,115,22,0.08)]
                transition-all duration-300
              "
            >
              <div className="text-3xl mb-3">{cap.icon}</div>
              <h3 className="text-amber-300 font-bold text-sm mb-4 group-hover:text-amber-200 transition-colors duration-300">
                {cap.title}
              </h3>
              <ul className="space-y-2">
                {cap.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-slate-400 text-xs leading-relaxed"
                  >
                    <span className="text-orange-400 mt-[2px] shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Delivered Banner */}
        <motion.div
          className="
            mt-14 border border-orange-500/25
            bg-orange-500/5 rounded-2xl p-8
          "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-center text-[0.7rem] tracking-[0.18em] uppercase text-orange-400 mb-7">
            Value Delivered to Sugar Plants
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {valueItems.map((v) => (
              <div key={v.text} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{v.icon}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}