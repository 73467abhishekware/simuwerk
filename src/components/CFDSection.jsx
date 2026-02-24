// export default function CFDSection() {
//   const capabilities = [
//     "Single Phase & Multiphase Flows",
//     "Conjugate Heat Transfer",
//     "Gearbox Oil Splash & Churning Loss",
//     "All Pump Simulations (Centrifugal, Gerotor, Vane, PD)",
//     "Boiler & Combustion Analysis (Bagasse Fired)",
//     "Evaporators, Juice Heaters & Clarifiers",
//     "Centrifuges & Crystallizers (Massecuite)",
//     "Acoustics & Noise Prediction",
//     "Duct, Valve & Porosity Modeling",
//   ];

//   return (
//     <section id="cfd" className="py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-4 text-blue-700">CFD Simulation Capabilities</h2>
//         <p className="text-center text-xl text-gray-600 mb-16">Sugar Industry + All Industrial Applications</p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {capabilities.map((item, i) => (
//             <div key={i} className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition">
//               <div className="text-blue-700 text-2xl mb-4">✓</div>
//               <h3 className="font-semibold text-xl mb-3">{item}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// components/CFDSection.jsx
// Dependencies: framer-motion  →  npm install framer-motion

import { motion } from "framer-motion";

const cfdItems = [
  {
    num: "01",
    label: "FLOW SIMULATION",
    title: "Single Phase Flow Simulations",
    desc: "Accurately predicts fluid flow behaviour including velocity, pressure and temperature profiles. Enables optimization of system design and performance while reducing physical prototypes and experimentation costs.",
  },
  {
    num: "02",
    label: "MULTIPHASE",
    title: "Multiphase Flows",
    desc: "Captures complex interactions between phases — gas-liquid, liquid-solid, or gas-solid — for pipelines, reactors, separators, bubble columns, sediment transport, and spray dynamics.",
  },
  {
    num: "03",
    label: "HEAT TRANSFER",
    title: "Conjugate Heat Transfer",
    desc: "Predicts temperature distributions, heat fluxes, and thermal stresses. Identifies hotspots, thermal fatigue zones, and coolant boiling risks in engines and process equipment.",
  },
  {
    num: "04",
    label: "TRANSIENT FLOW",
    title: "Draining & Filling Simulations",
    desc: "Predicts fluid flow behaviour during transient fill and drain cycles, including flow rates, pressure drops, and fluid levels — essential for process tank and vessel design validation.",
  },
  {
    num: "05",
    label: "LUBRICATION",
    title: "Gearbox Oil Splash Simulations",
    desc: "Predicts oil distribution and splash patterns to ensure effective lubrication of gears and bearings, minimize churning losses, heat generation, and optimize oil level and viscosity.",
  },
  {
    num: "06",
    label: "DYNAMICS",
    title: "Tank Sloshing Simulations",
    desc: "Optimizes tank design and baffle configurations to reduce sloshing-induced instability in trucks, ships, and aircraft. Improves safety and handling through virtual design validation.",
  },
  {
    num: "07",
    label: "TURBOMACHINERY",
    title: "Centrifugal Pump Simulations",
    desc: "Predicts flow rates, pressure heads, and efficiency to optimize pump design. Identifies low-pressure zones to minimize cavitation risk, impeller erosion, and damage.",
  },
  {
    num: "08",
    label: "POSITIVE DISPLACEMENT",
    title: "External Gear Pump Simulations",
    desc: "Accurately predicts flow rates, pressure pulsations, and volumetric efficiency using mesh motion and deformed mesh approaches. Optimizes gear pump design for reduced noise and increased reliability.",
  },
  {
    num: "09",
    label: "ADVANCED PUMPS",
    title: "Gerotor & Vane Pump Simulations",
    desc: "Comprehensive simulation of all positive displacement pump types including gerotor and vane pumps — precise volumetric efficiency data, pressure pulsation analysis, and noise reduction insights.",
  },
  {
    num: "10",
    label: "E-MOBILITY",
    title: "E-Motor Cooling Simulations",
    desc: "Predicts temperature distributions, heat transfer rates, and coolant flow patterns for efficient cooling system design in electric motors. Reduces thermal stress and increases performance.",
  },
  {
    num: "11",
    label: "EFFICIENCY",
    title: "Gear Churning Loss Calculations",
    desc: "Accurately predicts gear churning losses including windage and viscous losses. Evaluates gear geometry, oil level, and viscosity to minimize energy losses in transmission systems.",
  },
  {
    num: "12",
    label: "MIXING",
    title: "Multicomponent Fluid Mixing",
    desc: "Predicts mixing behaviour including species transport, diffusion, and reaction rates for different-density fluids and multicomponent gas mixtures. Optimizes mixing processes and equipment design.",
  },
  {
    num: "13",
    label: "PHASE CHANGE",
    title: "Evaporation & Boiling Simulations",
    desc: "Predicts evaporation rate, time required, slurry level requirements, and heat source needs. Enables design modification for accelerated evaporation — critical for sugar and chemical processing.",
  },
  {
    num: "14",
    label: "PARTICLE DYNAMICS",
    title: "Discrete Phase Simulations (DPM)",
    desc: "Predicts collection efficiency, pressure drop, velocity profiles, and pressure distribution. Provides insights into cyclone separators, spray systems, and particle-laden flows.",
  },
  {
    num: "15",
    label: "FLOW SYSTEMS",
    title: "Duct Analysis",
    desc: "Predicts pressure drop, velocity and pressure profiles across duct systems. Supports design optimization to reduce production cost and improve HVAC, exhaust, and ventilation performance.",
  },
  {
    num: "16",
    label: "FLOW CONTROL",
    title: "Valve Simulations",
    desc: "Predicts pressure drop, velocity distribution, and coefficient of discharge for valves. Determines flow rate and pressure distribution at different valve opening positions.",
  },
  {
    num: "17",
    label: "COMBUSTION",
    title: "Boiler & Porosity Modelling",
    desc: "CFD with porosity modeling enables accurate prediction of pressure drop, velocity distribution, and flow resistance across boiler components including bagasse-fired boilers.",
  },
  {
    num: "18",
    label: "ACOUSTICS",
    title: "Acoustics & Noise Prediction",
    desc: "Predicts broadband noise, tonal noise, far-field propagation, and rotating machinery noise using Direct Noise Calculation and FW-H methods. Identifies dominant noise frequencies and SPL vs. frequency characteristics.",
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

export default function CFDSection() {
  return (
    <section id="cfd" className="py-24 px-4 bg-[#050d1a]">
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
            Computational Fluid Dynamics
          </span>
          <h2 className="mt-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-cyan-300 to-sky-400 bg-clip-text text-transparent">
            CFD Simulation Capabilities
          </h2>
          <div className="w-14 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-5" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
            18 specialized CFD simulation types covering fluid mechanics, heat transfer,
            multiphase, acoustics, and more.
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
          {cfdItems.map((item) => (
            <motion.div
              key={item.num}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                group relative bg-[rgba(10,32,64,0.7)]
                border border-sky-900/30 rounded-2xl p-6
                hover:border-sky-500/40
                hover:shadow-[0_16px_50px_rgba(14,165,233,0.12)]
                transition-all duration-300 overflow-hidden
              "
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number + Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[0.65rem] font-bold tracking-[0.15em] text-orange-400 uppercase">
                  {item.num} · {item.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-[1rem] mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}