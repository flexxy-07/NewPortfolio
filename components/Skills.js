"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, GitBranch, Database, Layers, Cpu, Braces, Terminal } from "lucide-react";

const skills = [
  {
    name: "Java",
    icon: Braces,
    category: "Languages",
  },
  {
    name: "Dart",
    icon: Code2,
    category: "Languages",
  },
  {
    name: "JavaScript",
    icon: Terminal,
    category: "Languages",
  },
  {
    name: "Flutter",
    icon: Smartphone,
    category: "Tech",
  },
  {
    name: "React",
    icon: Layers,
    category: "Tech",
  },
  {
    name: "Git",
    icon: GitBranch,
    category: "Tech",
  },
  {
    name: "DSA",
    icon: Cpu,
    category: "Tech",
  },
  {
    name: "SQL",
    icon: Database,
    category: "Tech",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary-bg/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-4" variants={cardVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
              Skills &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-glow">
                Technologies
              </span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="group glass rounded-xl p-6 text-center hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 group-hover:text-glow transition-all duration-300">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-text-main font-semibold text-lg">
                        {skill.name}
                      </h3>
                      <p className="text-text-muted text-sm mt-1">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
