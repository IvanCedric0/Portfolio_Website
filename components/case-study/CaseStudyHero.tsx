"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";
import StatusBadge from "@/components/ui/StatusBadge";
import TechBadge from "@/components/ui/TechBadge";

interface CaseStudyHeroProps {
  project: Project;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="container-content pt-28 pb-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        {/* Back nav */}
        <motion.div variants={item}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground-3 transition-colors text-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Work
          </Link>
        </motion.div>

        {/* Meta row */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="label-caps">
            {String(project.index).padStart(2, "0")} / {project.type}
          </span>
          <span className="w-px h-3 bg-border-2" />
          <StatusBadge status={project.status} />
          <span className="label-caps text-muted-2">{project.year}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none"
        >
          {project.title}
        </motion.h1>

        {/* Hook */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-foreground-3 max-w-2xl leading-relaxed"
        >
          {project.caseStudy.hook}
        </motion.p>

        {/* Metrics */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-6 py-6 border-y border-border"
        >
          {project.caseStudy.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="label-caps mb-1">{metric.label}</p>
              <p className="text-sm font-semibold text-foreground-2">{metric.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech + links */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
