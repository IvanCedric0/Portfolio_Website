"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomeHero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-x-clip min-h-[100vh] md:min-h-[80vh] flex flex-col justify-end container-wide pb-16 pt-24 md:pt-36">
      {/* Ambient top-left glow — very subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-[320px] h-[260px] md:w-[600px] md:h-[400px] opacity-[0.04] blur-3xl"
        style={{
          background: "radial-gradient(ellipse at 20% 40%, #6366f1 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-5xl"
      >
        {/* Role line */}
        <motion.p variants={item} className="label-caps mb-4 md:mb-6">
          Full Stack Developer
        </motion.p>

        {/* Giant name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6 break-words"
        >
          KOUAME
          <br />
          <span className="text-foreground-3">Ivan Cédric</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-sm md:text-base text-muted max-w-xl md:max-w-lg leading-relaxed mb-8"
        >
          Building production web apps, marketplaces and AI-powered tools.
          <br />
          <span className="text-muted-2">Based in Côte d&apos;Ivoire.</span>
        </motion.p>

        {/* Actions */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={scrollToWork}
            className="btn-white"
          >
            View Work
          </button>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="btn-outline"
          >
            Get in Touch
          </a>
          <span className="hidden sm:block w-px h-5 bg-border-2 mx-1" />
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="label-caps" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-border-3 to-transparent"
        />
      </motion.div>
    </section>
  );
}
