import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiLightningBolt } from "react-icons/hi";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 max-w-6xl mx-auto px-6"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="section-title">About Me</h2>
        <p className="mt-4 text-slate-400 max-w-2xl">
          A quick snapshot of who I am, what I build, and how I think as an engineer.
        </p>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT – STORY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 leading-relaxed text-lg">
            I’m a final year Computer Science Engineering student at{" "}
            <span className="text-sky-400 font-medium">
              IIIT RGUKT RK Valley
            </span>
            , passionate about building scalable, user-centric software that
            balances performance with great user experience.
          </p>

          <p className="mt-5 text-slate-300 leading-relaxed">
            I enjoy working across the stack — from designing intuitive
            interfaces in <b>Flutter</b> and <b>React</b> to implementing
            reliable backend systems using <b>Node.js</b>, <b>Firebase</b>,
            and modern APIs.
          </p>

          <p className="mt-5 text-slate-300 leading-relaxed">
            During my time as an <b>AI Intern at Ediglobe</b>, I worked on
            machine learning models, NLP workflows, and production-ready
            solutions, strengthening my analytical thinking and problem-solving
            skills.
          </p>

          <p className="mt-5 text-slate-300 leading-relaxed">
            I strongly believe in clean code, performance optimization, and
            thoughtful UI/UX. Currently, I’m expanding my skill set into{" "}
            <b>DevOps</b> to better understand and own the complete software
            lifecycle.
          </p>
        </motion.div>

        {/* RIGHT – HIGHLIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <AboutCard
            icon={<HiAcademicCap />}
            title="Education"
            subtitle="IIIT RGUKT RK Valley"
            meta="CGPA: 8.75"
          />

          <AboutCard
            icon={<HiBriefcase />}
            title="Experience"
            subtitle="AI Intern — Ediglobe"
            meta="ML · NLP · Model Deployment"
          />

          <AboutCard
            icon={<HiLightningBolt />}
            title="Focus Areas"
            subtitle="Flutter · React · Full-Stack · AI"
            meta="Learning DevOps"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* REUSABLE CARD COMPONENT */
function AboutCard({ icon, title, subtitle, meta }) {
  return (
    <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 transition hover:border-sky-400/50 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-sky-400">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-slate-300 text-sm">{subtitle}</p>
          <p className="text-slate-400 text-xs mt-1">{meta}</p>
        </div>
      </div>
    </div>
  );
}
