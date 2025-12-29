import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "English Learning Chatbot App",
    subtitle: "Flutter · FastAPI · MongoDB",
    description:
      "A mobile AI-powered chatbot application designed to help users improve English grammar. Integrated a FastAPI backend with voice input, grammar correction logic, and MongoDB for chat persistence, delivering real-time AI feedback through a clean and intuitive UI.",
    tech: ["Flutter", "FastAPI", "MongoDB", "AI", "NLP"],
    github: "https://github.com/Itzmeyash-1/Grammar_correcting_chatbot",
  },
  {
    title: "GO TOGETHER — C2C Marketplace App",
    subtitle: "Flutter · Firebase",
    description:
      "A cross-platform C2C marketplace app for Android and iOS that enables users to book rides or send parcels with drivers already traveling in the same direction. Focused on seamless user experience, real-time data sync, and secure authentication.",
    tech: ["Flutter", "Firebase", "Auth", "Firestore"],
    github: "https://github.com/Itzmeyash-1/GoTogether",
  },
  {
    title: "Agri-AI: Smart Farming Assistant",
    subtitle: "MERN Stack · Machine Learning",
    description:
      "A machine learning-driven web application for crop and fertilizer recommendations using soil, weather, and crop data. Built a responsive React frontend and integrated a backend powered by a Random Forest model for accurate predictive insights.",
    tech: ["React", "Node.js", "MongoDB", "Machine Learning"],
    github: "https://github.com/Itzmeyash-1/Agri-Ai-frontend", 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-nuetral-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="section-title">Projects</h2>
          <p className="mt-3 text-slate-400 max-w-xl">
            A selection of projects that showcase my ability to design,
            develop, and deploy real-world applications.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="
                rounded-xl
                bg-white/5
                border border-white/10
                p-6
                flex flex-col
                justify-between
              "
            >
              {/* CONTENT */}
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px]
                                 rounded-full
                                 bg-white/5
                                 border border-white/10
                                 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION */}
              <div className="mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             text-sm text-slate-300
                             hover:text-white transition"
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
