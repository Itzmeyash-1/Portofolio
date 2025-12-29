import { motion } from "framer-motion";
import { FaProjectDiagram, FaCode, FaLaptopCode } from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    value: "5+",
    label: "Projects Built",
    description: "End-to-end applications across Flutter, Web & AI",
  },
  {
    icon: <FaCode />,
    value: "350+",
    label: "DSA Problems Solved",
    description: "LeetCode, CodeChef & practice-based problems",
  },
  {
    icon: <FaLaptopCode />,
    value: "3+",
    label: "Tech Domains",
    description: "Flutter, Full-Stack, Machine Learning",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-20 bg-nuetral-800"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="
                rounded-xl
                bg-white/5
                border border-white/10
                p-6
                text-center
              "
            >
              <div className="flex justify-center mb-4 text-2xl text-slate-300">
                {stat.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {stat.value}
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                {stat.label}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
