
// import { motion } from "framer-motion";

// const feaItems = [
//   {
//     id: 1,
//     title: "Linear Static Structural Analysis",
//     description:
//       "Predict stresses, strains and deformations under static loading conditions to verify structural strength and stiffness.",
//     applications:
//       "Frames, housings, brackets, platforms, supports, machinery structures",
//     image: "/images/fea-linear-bridge.jpg", // ← your bridge contour image
//   },
//   {
//     id: 2,
//     title: "Nonlinear Structural Analysis",
//     description:
//       "Capture material nonlinearity, large deformation, contact nonlinearity and plasticity under extreme loads.",
//     applications:
//       "Press-fit assemblies, rubber components, bolted joints, lifting equipment",
//     image: "/images/fea-nonlinear-plate.jpg",
//   },
//   {
//     id: 3,
//     title: "Contact & Assembly Simulations",
//     description:
//       "Detailed contact analysis including frictional, bonded and sliding contacts to study load transfer and contact stresses.",
//     applications:
//       "Gearboxes, bearings, shafts, bolted assemblies, clamps, crane-lifted systems",
//     image: "/images/fea-contact-gears.jpg",
//   },
//   {
//     id: 4,
//     title: "Modal Analysis",
//     description:
//       "Identify natural frequencies and vibration modes to avoid resonance and ensure dynamic stability.",
//     applications:
//       "Motor-mounted structures, rotating machinery, hoists, piping supports",
//     image: "/images/fea-modal-motor.jpg",
//   },
//   // ... add remaining 7 items similarly (5–11)
//   // For brevity I'm showing first 4 – copy-paste pattern for others
// ];

// export default function FEASection() {
//   return (
//     <section className="relative py-24 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent)] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//             className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-200 bg-clip-text text-transparent"
//           >
//             FEA Simulation Capabilities
//           </motion.h2>
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 120 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 1 }}
//             className="h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mt-6 rounded-full"
//           />
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//           {feaItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7, delay: index * 0.1 }}
//               whileHover={{ y: -12, scale: 1.03 }}
//               className="group relative bg-gradient-to-br from-slate-900/70 to-blue-950/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-400"
//             >
//               {/* Number badge */}
//               <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg z-10 group-hover:rotate-6 transition-transform">
//                 {String(item.id).padStart(2, "0")}
//               </div>

//               {/* Image */}
//               <div className="h-56 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
//               </div>

//               {/* Content */}
//               <div className="p-7 pb-9">
//                 <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 mb-5 leading-relaxed">
//                   {item.description}
//                 </p>
//                 <div className="text-sm text-cyan-200/80">
//                   <span className="font-medium text-cyan-300">Applications:</span>{" "}
//                   {item.applications}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// components/FEASection.jsx
// Dependencies: framer-motion  →  npm install framer-motion

import { motion } from "framer-motion";

const feaItems = [
  {
    num: "01",
    label: "STRUCTURAL",
    title: "Linear Static Structural Analysis",
    desc: "Predict stresses, strains and deformations under static loading conditions to verify structural strength and stiffness of industrial components and assemblies.",
    apps: "Frames, housings, brackets, platforms, supports, machinery structures",
  },
  {
    num: "02",
    label: "NONLINEAR",
    title: "Nonlinear Structural Analysis",
    desc: "Capture material nonlinearity, large deformation, contact nonlinearity and plasticity for realistic behaviour under extreme loads including geometric and material nonlinear effects.",
    apps: "Press-fit assemblies, rubber components, bolted joints, lifting equipment",
  },
  {
    num: "03",
    label: "CONTACT",
    title: "Contact & Assembly Simulations",
    desc: "Detailed contact analysis including frictional, bonded and sliding contacts to study load transfer and contact stresses at interfaces within complex multi-body assemblies.",
    apps: "Gearboxes, bearings, shafts, bolted assemblies, clamps, crane-lifted systems",
  },
  {
    num: "04",
    label: "DYNAMICS",
    title: "Modal Analysis",
    desc: "Identify natural frequencies and vibration modes to avoid resonance and ensure dynamic stability. Essential for machinery operating in environments with cyclic or rotating loads.",
    apps: "Motor-mounted structures, rotating machinery, hoists, piping supports",
  },
  {
    num: "05",
    label: "VIBRATION",
    title: "Harmonic & Random Vibration Analysis",
    desc: "Predict structural response to cyclic, rotating or stochastic loads. Critical for ensuring structural integrity under complex real-world dynamic loading environments.",
    apps: "Gearboxes, engines, pumps, fans, vibrating equipment",
  },
  {
    num: "06",
    label: "TRANSIENT",
    title: "Transient Dynamic Analysis",
    desc: "Evaluate time-dependent structural response due to impact, shock, sudden loading or start-stop conditions. Captures the full dynamic history including peak stresses and deformations.",
    apps: "Drop tests, emergency braking loads, machinery start-up/shutdown",
  },
  {
    num: "07",
    label: "FATIGUE",
    title: "Fatigue Life Prediction",
    desc: "Estimate component service life under cyclic loading using both stress-life (S-N) and strain-life (ε-N) approaches. Identifies critical life-limiting regions for design improvement.",
    apps: "Shafts, welded joints, rotating equipment, automotive & industrial components",
  },
  {
    num: "08",
    label: "THERMAL",
    title: "Thermal & Thermo-Structural Analysis",
    desc: "Predict temperature distribution and thermal stresses due to steady-state or transient heat loads. Coupled thermal-structural analysis reveals thermally induced deformations and stress concentrations.",
    apps: "Boilers, heat exchangers, exhaust systems, motors, hot process equipment",
  },
  {
    num: "09",
    label: "STABILITY",
    title: "Buckling & Stability Analysis",
    desc: "Evaluate critical buckling loads and stability margins for slender structures. Determines safe operating load limits and identifies post-buckling behaviour for conservative design.",
    apps: "Columns, tanks, silos, platforms, pressure vessels",
  },
  {
    num: "10",
    label: "CODE-BASED",
    title: "Pressure Vessel & Code-Based Analysis",
    desc: "Structural assessment as per ASME Section VIII, EN 13445, and other applicable standards — ensuring regulatory compliance for critical pressure-retaining equipment.",
    apps: "ASME-based pressure vessels, storage tanks, boiler components",
  },
  {
    num: "11",
    label: "WELD",
    title: "Welded Joints & Local Stress Assessment",
    desc: "Detailed stress evaluation in weld zones using hot-spot and notch stress approaches to improve durability and fatigue life. Accounts for weld geometry effects and residual stresses.",
    apps: "Frames, pipelines, industrial skids, heavy structures",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function FEASection() {
  return (
    <section id="fea" className="py-24 px-4 bg-[#050d1a]">
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
            Finite Element Analysis
          </span>
          <h2 className="mt-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-cyan-300 to-sky-400 bg-clip-text text-transparent">
            FEA Simulation Capabilities
          </h2>
          <div className="w-14 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-5" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
            11 comprehensive FEA simulation types from linear statics to code-based
            pressure vessel assessment.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {feaItems.map((item) => (
            <motion.div
              key={item.num}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                group relative bg-[rgba(10,32,64,0.7)]
                border border-sky-900/30 rounded-2xl p-6
                hover:border-orange-500/30
                hover:shadow-[0_16px_50px_rgba(249,115,22,0.08)]
                transition-all duration-300 overflow-hidden
              "
            >
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number + Label */}
              <div className="mb-3">
                <span className="text-[0.65rem] font-bold tracking-[0.15em] text-cyan-500 uppercase">
                  {item.num} · {item.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-[1rem] mb-2 group-hover:text-orange-200 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>

              {/* Applications */}
              <p className="text-xs text-cyan-400/80">
                <span className="text-cyan-400 font-semibold">Applications: </span>
                {item.apps}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* FEA Industry Applications sub-section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-center text-2xl font-bold text-cyan-300 mb-8">
            FEA for Industry-Specific Applications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🏭",
                title: "Sugar Industry & Process Plants",
                items: [
                  "Structural analysis of boilers, evaporators, juice heaters & clarifiers",
                  "Support structure & platform analysis",
                  "Thermal stress analysis of hot process equipment",
                  "Fatigue & vibration assessment of rotating machinery",
                ],
              },
              {
                icon: "⚙️",
                title: "Heavy Engineering & Industrial Machinery",
                items: [
                  "Gearbox housings, base frames & lifting devices",
                  "Crane-lift and transportation load analysis",
                  "Machine foundations and skid structures",
                ],
              },
              {
                icon: "🚗",
                title: "Automotive & Off-Highway",
                items: [
                  "Chassis and sub-frame structural analysis",
                  "Mounting bracket optimization",
                  "Vibration and durability assessment",
                ],
              },
            ].map((ind) => (
              <motion.div
                key={ind.title}
                whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.4)" }}
                className="
                  bg-[rgba(5,13,26,0.6)] border border-sky-900/30 rounded-2xl p-6
                  hover:shadow-[0_12px_40px_rgba(34,211,238,0.08)]
                  transition-all duration-300
                "
              >
                <div className="text-2xl mb-3">{ind.icon}</div>
                <h4 className="text-cyan-300 font-bold text-sm mb-3">{ind.title}</h4>
                <ul className="space-y-2">
                  {ind.items.map((it, i) => (
                    <li key={i} className="flex gap-2 text-slate-400 text-xs leading-relaxed">
                      <span className="text-sky-500 mt-[2px] shrink-0">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}