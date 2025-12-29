import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const VIEW_RESUME =
  "https://drive.google.com/file/d/1KxCzau02KRXUL4sbr6af72rSH9Kkco3i/view?usp=drivesdk";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Tools", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* NAVBAR */}
      <div className="bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#"
            className="text-lg font-bold tracking-wide bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent"
          >
            G Yaswanth
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group py-1"
              >
                <span className="text-slate-200 group-hover:text-sky-400 transition">
                  {link.name}
                </span>

                {/* underline animation */}
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}

            {/* RESUME CTA */}
            <a
              href={VIEW_RESUME}
              target="_blank"
              className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-90 transition text-white shadow-md"
            >
              Resume
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-slate-200"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0b0f19]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-slate-200 hover:text-sky-400 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href={VIEW_RESUME}
                target="_blank"
                className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
