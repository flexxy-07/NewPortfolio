"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "StreakUp",
    description: "Flutter productivity app for streak tracking. Build habits and maintain daily streaks with beautiful UI.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/flexxy-07/StreakUp",
    live: null,
  },
  {
    title: "NavvyMeals",
    description: "Flutter food planning app. Plan your weekly meals, generate shopping lists, and discover new recipes.",
    tech: ["Flutter", "Dart", "API"],
    github: "https://github.com/flexxy-07/NavvyMeals",
    live: null,
  },
  {
    title: "Spotify Clone",
    description: "Flutter music streaming app. Browse playlists, search for songs, and enjoy a sleek UI inspired by Spotify.",
    tech: ["Flutter", "SQLite", "Charts"],
    github: "https://github.com/flexxy-07/Spotify",
    live: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="space-y-4" variants={cardVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-glow">
                Projects
              </span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl">
              A selection of projects I&apos;ve worked on, showcasing my skills in
              mobile development and problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group glass rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 glow-purple"
                variants={cardVariants}
              >
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-text-main mb-3 group-hover:text-glow transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-glow transition-colors text-sm"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-muted hover:text-glow transition-colors text-sm"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
