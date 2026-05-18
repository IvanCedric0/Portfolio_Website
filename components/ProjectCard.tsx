"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const statusConfig = {
  production: {
    label: "Live in Production",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    dot: "bg-emerald-400",
  },
  "in-progress": {
    label: "In Progress",
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
    dot: "bg-amber-400",
  },
  completed: {
    label: "Completed",
    color: "text-sky-400",
    bg: "bg-sky-400/10 border-sky-400/20",
    dot: "bg-sky-400",
  },
};

// Placeholder visuals for each project
const projectVisuals: Record<
  string,
  { label: string; sublabel: string; accent: string }
> = {
  everyfit: {
    label: "E-Commerce Platform",
    sublabel: "Next.js · Supabase · Clerk",
    accent: "#6366f1",
  },
  bara: {
    label: "Freelance Marketplace",
    sublabel: "Next.js · Supabase",
    accent: "#10b981",
  },
  gatekeeper: {
    label: "Admin Dashboard + API",
    sublabel: "Node.js · Express · MySQL",
    accent: "#f59e0b",
  },
  "algo-visualizer": {
    label: "Graph Algorithm Engine",
    sublabel: "Ruby on Rails",
    accent: "#ec4899",
  },
};

export default function ProjectCard({
  project,
  index,
  inView,
}: ProjectCardProps) {
  const status = project.status ? statusConfig[project.status] : null;
  const visual = projectVisuals[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-border-2 transition-all duration-300"
    >
      {/* Project visual placeholder */}
      <div
        className="relative h-44 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${visual?.accent}0d 0%, #111111 60%)`,
          borderBottom: `1px solid ${visual?.accent}15`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${visual?.accent}18 1px, transparent 1px), linear-gradient(90deg, ${visual?.accent}18 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div
            className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
            style={{ background: `${visual?.accent}20`, border: `1px solid ${visual?.accent}30` }}
          >
            <span style={{ color: visual?.accent }} className="text-lg font-bold">
              {project.title.charAt(0)}
            </span>
          </div>
          <p className="text-foreground font-semibold text-sm">{visual?.label}</p>
          <p className="text-muted text-xs mt-1 font-mono">{visual?.sublabel}</p>
        </div>

        {/* Hover arrow */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="w-4 h-4 text-muted" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold text-foreground leading-tight">
              {project.title}
            </h3>
            {status && (
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full border flex-shrink-0",
                  status.bg,
                  status.color
                )}
              >
                <span className={cn("w-1 h-1 rounded-full", status.dot)} />
                {status.label}
              </span>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="badge-tech text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs flex-1 justify-center border border-border rounded-lg hover:border-border-2"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex-1 justify-center"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {(!project.demo || project.demo === "#") && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex-1 justify-center"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-3.5 h-3.5" />
              View Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
