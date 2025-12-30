import { motion } from "framer-motion";
import { HiOutlineChevronDown, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const VIEW_RESUME =
  "https://drive.google.com/file/d/1KxCzau02KRXUL4sbr6af72rSH9Kkco3i/view";

const DOWNLOAD_RESUME =
  "https://drive.usercontent.google.com/u/0/uc?id=1KxCzau02KRXUL4sbr6af72rSH9Kkco3i&export=download";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 px-4 overflow-hidden">

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            G Yaswanth
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
          Flutter & Full-Stack Developer crafting{" "}
          <span className="text-slate-100 font-medium">
            scalable, user-centric
          </span>{" "}
          web and mobile applications.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#projects"
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium"
          >
            View Projects
          </motion.a>

          <motion.a
            href={VIEW_RESUME}
            target="_blank"
            className="px-7 py-3 rounded-xl border border-white/20 text-slate-200"
          >
            View Resume
          </motion.a>

          <motion.a
            href={DOWNLOAD_RESUME}
            className="px-7 py-3 rounded-xl border border-white/20 text-slate-200"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* SOCIAL LINKS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="
          mt-12 flex gap-4
          md:absolute md:bottom-24
        "
      >
        <SocialIcon
          href="https://github.com/Itzmeyash-1"
          label="GitHub"
          icon={<FaGithub />}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/yaswanth-g-75a636305/"
          label="LinkedIn"
          icon={<FaLinkedinIn />}
        />
        <SocialIcon
          href="mailto:yash938187@gmail.com"
          label="Email"
          icon={<HiOutlineMail />}
        />
      </motion.div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className="
          mt-10 flex flex-col items-center
          md:absolute md:bottom-8
          text-slate-400
        "
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="text-3xl"
        >
          <HiOutlineChevronDown />
        </motion.div>
      </a>
    </section>
  );
}

/* REUSABLE SOCIAL ICON */
function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11 h-11
        flex items-center justify-center
        rounded-xl
        border border-white/15
        text-slate-300
        hover:text-white
        hover:border-white/30
        transition
      "
    >
      {icon}
    </a>
  );
}
