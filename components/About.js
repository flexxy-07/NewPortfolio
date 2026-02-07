"use client";

import { motion } from "framer-motion";
import { GraduationCap, Smartphone, Lightbulb, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "CS Student",
  },
  {
    icon: Smartphone,
    title: "Mobile Dev",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
              About{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-glow">
                Me
              </span>
            </h2>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="max-w-3xl space-y-6"
            variants={itemVariants}
          >
            <p className="text-lg text-text-muted leading-relaxed">
              Computer Science student passionate about Android development and
              problem solving. I love turning ideas into functional, beautiful
              applications that make a difference.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Focused on building mobile apps using Flutter and improving DSA
              skills. I believe in writing clean, maintainable code and
              continuously learning new technologies to stay current in this
              ever-evolving field.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4"
            variants={containerVariants}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group glass rounded-xl p-5 text-center hover:border-accent/40 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:text-glow transition-colors">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-text-main font-medium text-sm md:text-base">
                      {item.title}
                    </h3>
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
