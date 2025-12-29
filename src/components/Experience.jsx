import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-36 bg-zinc-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title">Experience</h2>
          <p className="mt-4 text-slate-400 max-w-xl">
            Practical industry experience applying machine learning
            and software engineering principles.
          </p>
        </motion.div>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl
                     bg-white/5 border border-white/10
                     backdrop-blur-xl p-8"
        >
          {/* SUBTLE LEFT ACCENT (NOT BLUE) */}
          <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-white/10" />

          <div className="pl-8">
            <h3 className="text-lg font-semibold text-slate-100">
              AI Intern — Ediglobe
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Dec 2024 – Feb 2025
            </p>

            <ul className="mt-6 space-y-3 text-slate-300 leading-relaxed">
              <li>
                • Built and trained machine learning models for
                intelligent, data-driven applications.
              </li>
              <li>
                • Worked on NLP pipelines including text preprocessing,
                classification, and model evaluation.
              </li>
              <li>
                • Improved model accuracy through feature engineering
                and hyperparameter tuning.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
