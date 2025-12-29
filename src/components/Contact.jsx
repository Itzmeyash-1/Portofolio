import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-36 bg-gradient-to-b from-[#020617] to-[#020617]"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="section-title">Let’s Connect</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            I’m open to internships, full-time roles, and exciting projects.
            Feel free to reach out — I’d be happy to connect.
          </p>
        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-2xl
                     bg-white/5 border border-white/10
                     backdrop-blur-xl p-10 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">
            Get in touch
          </h3>

          <p className="text-slate-400 mb-10">
            The fastest way to reach me is via email or LinkedIn.
            You can also explore my work on GitHub.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="mailto:yash938187@gmail.com"
              className="inline-flex items-center gap-3
                         px-6 py-3 rounded-xl
                         bg-white text-black font-medium
                         hover:bg-slate-200 transition"
            >
              <HiOutlineMail size={20} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/yaswanth-g-75a636305/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3
                         px-6 py-3 rounded-xl
                         border border-white/15
                         text-slate-300 hover:text-white
                         hover:border-white/30 transition"
            >
              <FaLinkedinIn size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Itzmeyash-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3
                         px-6 py-3 rounded-xl
                         border border-white/15
                         text-slate-300 hover:text-white
                         hover:border-white/30 transition"
            >
              <FaGithub size={20} />
              GitHub
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
