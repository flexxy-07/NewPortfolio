"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Linkedin, Github, Twitter, Loader2, CheckCircle, XCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sumitrpt007@gmail.com",
    href: "mailto:sumitrpt007@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
];

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

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id' || 
        templateId === 'your_template_id' || 
        publicKey === 'your_public_key') {
      console.error("EmailJS is not configured. Please set up your credentials in .env.local");
      alert("Contact form is not configured yet. Please email me directly at sumitrpt007@gmail.com");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      console.error("Error details:", {
        message: error.text || error.message,
        status: error.status,
      });
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary-bg/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-glow">
                Touch
              </span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
          >
            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={itemVariants}
            >
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-text-main text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-bg border border-accent/20 rounded-lg text-text-main placeholder-text-muted transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-text-main text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-bg border border-accent/20 rounded-lg text-text-main placeholder-text-muted transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-text-main text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-bg border border-accent/20 rounded-lg text-text-main placeholder-text-muted resize-none transition-all duration-300"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-glow text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                )}
                {status === "idle" && (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <XCircle size={18} />
                    Failed to Send
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-2">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">
                  Something went wrong. Please email me directly at{" "}
                  <a href="mailto:sumitrpt007@gmail.com" className="underline hover:text-red-300">
                    sumitrpt007@gmail.com
                  </a>
                </p>
              )}
            </motion.form>

            {/* Contact Info Card */}
            <motion.div
              className="glass rounded-xl p-8 space-y-8 h-fit"
              variants={itemVariants}
            >
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-main">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-4 group">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:text-glow transition-colors">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-text-muted text-sm">{item.label}</p>
                          <p className="text-text-main">{item.value}</p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block hover:bg-accent/5 rounded-lg p-2 -m-2 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className="p-2 -m-2">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-4 border-t border-accent/20">
                <h4 className="text-text-main font-medium">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 hover:text-glow transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
