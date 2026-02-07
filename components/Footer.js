"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/flexxy-07",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumit-rajput-b72a60328/",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/sumiittt_07",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-text-main hover:text-glow transition-colors"
          >
            Sumit<span className="text-accent">.dev</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-muted hover:text-glow transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-text-muted text-sm">
              © {currentYear} Sumit Rajput. All rights reserved.
            </p>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
