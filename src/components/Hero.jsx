import { motion } from "framer-motion";
import { HiOutlineChevronDown, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const VIEW_RESUME =
  "https://drive.google.com/file/d/1KxCzau02KRXUL4sbr6af72rSH9Kkco3i/view?usp=drivesdk";

const DOWNLOAD_RESUME =
  "https://drive.usercontent.google.com/u/0/uc?id=1KxCzau02KRXUL4sbr6af72rSH9Kkco3i&export=download";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            G Yaswanth
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
          Flutter & Full-Stack Developer crafting{" "}
          <span className="text-slate-100 font-medium">
            scalable, user-centric
          </span>{" "}
          web and mobile applications.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium shadow-lg"
          >
            View Projects
          </motion.a>

          <motion.a
            href={VIEW_RESUME}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-xl border border-white/20 text-slate-200 hover:border-white/40 transition"
          >
            View Resume
          </motion.a>

          <motion.a
            href={DOWNLOAD_RESUME}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-xl border border-white/20 text-slate-200 hover:border-white/40 transition"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* SOCIAL LINKS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 flex items-center gap-4"
      >
        <a
          href="https://github.com/Itzmeyash-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 rounded-full border border-white/15
                     flex items-center justify-center
                     text-slate-300 hover:text-white
                     hover:border-white/30 transition"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/yaswanth-g-75a636305/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full border border-white/15
                     flex items-center justify-center
                     text-slate-300 hover:text-white
                     hover:border-white/30 transition"
        >
          <FaLinkedinIn size={18} />
        </a>

        <a
          href="mailto:yash938187@gmail.com"
          aria-label="Email"
          className="w-10 h-10 rounded-full border border-white/15
                     flex items-center justify-center
                     text-slate-300 hover:text-white
                     hover:border-white/30 transition"
        >
          <HiOutlineMail size={20} />
        </a>
      </motion.div>

      {/* SCROLL DOWN INDICATOR */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition"
      >
       

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-3xl"
        >
          <HiOutlineChevronDown />
        </motion.div>
      </motion.a>
    </section>
  );
}
