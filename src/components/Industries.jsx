// export default function Industries() {
//   const industries = ["Sugar Industry", "Automotive", "Aerospace", "Marine", "Energy", "HVAC", "Heavy Engineering", "Manufacturing"];

//   return (
//     <section id="industries" className="py-20">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
//         <p className="text-2xl mb-12 text-gray-600">Sugar Industry is our core expertise</p>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {industries.map((ind, i) => (
//             <div key={i} className="bg-white border-2 border-blue-100 hover:border-blue-700 p-8 rounded-3xl text-xl font-medium transition">
//               {ind}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/Industries.jsx
// Dependencies: framer-motion  →  npm install framer-motion

import { motion } from "framer-motion";

const industries = [
  { icon: "✈️", name: "Aerospace" },
  { icon: "🚢", name: "Marine" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "⚡", name: "Energy" },
  { icon: "🚗", name: "Automotive" },
  { icon: "🔌", name: "Electronics" },
  { icon: "❄️", name: "HVAC" },
  { icon: "⚙️", name: "Manufacturing" },
  { icon: "🏭", name: "Process Plants" },
  { icon: "🧪", name: "Chemical" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-4 bg-gradient-to-b from-[#050d1a] to-[#071428]">
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
            Our Reach
          </span>
          <h2 className="mt-3 font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-cyan-300 to-sky-400 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          {/* Orange accent line */}
          <div className="w-14 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mt-5" />
          <p className="mt-4 text-slate-400 max-w-lg mx-auto text-base">
            From aerospace to sugar processing, our simulation expertise spans the full industrial spectrum.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industries.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              className="
                group flex flex-col items-center justify-center gap-2
                bg-[rgba(10,32,64,0.7)] border border-sky-900/40
                rounded-2xl px-4 py-6 cursor-default
                hover:border-sky-500/60 hover:shadow-[0_12px_40px_rgba(14,165,233,0.15)]
                transition-all duration-300
              "
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors duration-300 text-center">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}