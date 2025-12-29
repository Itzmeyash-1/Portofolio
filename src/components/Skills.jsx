import { motion } from "framer-motion";

/* IMPORT LOGOS — unchanged */
import python from "../assets/tools/Python.svg";
import java from "../assets/tools/Java.svg";
import c from "../assets/tools/C.svg";
import dart from "../assets/tools/Dart.svg";

import react from "../assets/tools/React.svg";
import html from "../assets/tools/HTML5.svg";
import css from "../assets/tools/CSS3.svg";
import bootstrap from "../assets/tools/Bootstrap.svg";
import tailwind from "../assets/tools/Tailwind CSS.svg";

import node from "../assets/tools/Node.js.svg";
import express from "../assets/tools/Express.svg";
import flask from "../assets/tools/Flask.svg";

import mysql from "../assets/tools/MySQL.svg";
import mongodb from "../assets/tools/MongoDB.svg";
import firebase from "../assets/tools/Firebase.svg";

import flutter from "../assets/tools/Flutter.svg";

/* No official logos → reuse Flutter */
import getx from "../assets/tools/Flutter.svg";
import provider from "../assets/tools/Flutter.svg";

import github from "../assets/tools/GitHub.svg";
import vscode from "../assets/tools/Visual Studio Code (VS Code).svg";
import postman from "../assets/tools/Postman.svg";
import jupyter from "../assets/tools/Jupyter.svg";
import androidstudio from "../assets/tools/Android Studio.svg";

/* SKILL DATA */
const skills = [
  {
    title: "Languages",
    tools: [
      { name: "Python", logo: python },
      { name: "Java", logo: java },
      { name: "C", logo: c },
      { name: "Dart", logo: dart },
    ],
  },
  {
    title: "Frontend",
    tools: [
      { name: "React", logo: react },
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "Bootstrap", logo: bootstrap },
      { name: "Tailwind", logo: tailwind },
    ],
  },
  {
    title: "Backend",
    tools: [
      { name: "Node.js", logo: node },
      { name: "Express", logo: express },
      { name: "Flask", logo: flask },
    ],
  },
  {
    title: "Databases",
    tools: [
      { name: "MySQL", logo: mysql },
      { name: "MongoDB", logo: mongodb },
      { name: "Firebase", logo: firebase },
    ],
  },
  {
    title: "Mobile & State",
    tools: [
      { name: "Flutter", logo: flutter },
      { name: "GetX", logo: getx },
      { name: "Provider", logo: provider },
    ],
  },
  {
    title: "Tools",
    tools: [
      { name: "GitHub", logo: github },
      { name: "VS Code", logo: vscode },
      { name: "Postman", logo: postman },
      { name: "Jupyter", logo: jupyter },
      { name: "Android Studio", logo: androidstudio },
    ],
  },
];
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="mt-3 text-slate-400 max-w-xl">
            Technologies and tools I use to build production-ready applications.
          </p>
        </motion.div>

        {/* SKILL GROUPS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              viewport={{ once: true }}
              className="
                rounded-xl
                bg-white/5
                border border-white/10
                p-6
              "
            >
              <h3 className="font-semibold text-sm mb-5 text-slate-100">
                {group.title}
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="
                        w-11 h-11
                        flex items-center justify-center
                        rounded-lg
                        bg-white/5
                        border border-white/10
                      "
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    <span className="text-[11px] text-slate-400 text-center leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
