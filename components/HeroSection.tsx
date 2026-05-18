"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS, RESUME_URL } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-container pt-20"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        {/* Available badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-surface border border-border rounded-full text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.p
          variants={itemVariants}
          className="text-sm font-mono text-accent mb-3 tracking-wide"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-2"
        >
          KOUAME
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          <span className="text-gradient">Ivan Cédric</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-lg md:text-xl font-semibold text-foreground-2">
            Full Stack Developer
          </span>
          <span className="h-px w-12 bg-border-2" />
          <span className="font-mono text-xs text-muted">
            JS / TS / Node / React
          </span>
        </motion.div>

        {/* Primary tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 max-w-xl"
        >
          Building modern web applications, backend systems and digital products.
        </motion.p>

        {/* Secondary */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-muted leading-relaxed mb-10 max-w-lg"
        >
          Focused on React, Next.js, scalable backend systems and product-oriented
          engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mb-10"
        >
          <button
            id="hero-view-projects"
            onClick={scrollToProjects}
            className="btn-primary"
          >
            View Projects
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <a
            id="hero-download-resume"
            href={RESUME_URL}
            download
            className="btn-secondary"
          >
            <FileText className="w-3.5 h-3.5" />
            Download Resume
          </a>

          <button
            id="hero-contact"
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <a
            id="hero-github"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
            <span className="text-xs">GitHub</span>
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            id="hero-linkedin"
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-xs">LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
