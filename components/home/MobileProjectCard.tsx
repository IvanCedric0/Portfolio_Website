"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/types";
import StatusBadge from "@/components/ui/StatusBadge";

interface MobileProjectCardProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileProjectCard({
  project,
  isOpen,
  onToggle,
}: MobileProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggle = () => {
    onToggle();
    // Play video when expanding
    if (!isOpen && videoRef.current && project.media.type === "video" && project.media.video) {
      const video = videoRef.current;
      if (!video.src || !video.src.includes(project.media.video)) {
        video.src = project.media.video;
        video.load();
      }
      video.play().catch(() => { });
    }
    if (isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="border-b border-border">
      {/* Row header — always visible */}
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="label-caps w-6 flex-shrink-0 tabular-nums">{String(project.index).padStart(2, "0")}</span>
        <div className="flex-1 min-w-0">
          <p className={`text-lg font-bold transition-colors duration-200 ${isOpen ? "text-foreground" : "text-foreground-3"}`}>
            {project.title}
          </p>
          <p className="text-xs text-muted mt-0.5">{project.type}</p>
        </div>
        <StatusBadge status={project.status} className="flex-shrink-0" />
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-muted" />
        </motion.div>
      </button>

      {/* Expandable video viewport */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 flex flex-col gap-4">
              {/* Media */}
              <div className="rounded-xl overflow-hidden bg-surface-2 border border-border" style={{ aspectRatio: "16/10" }}>
                {project.media.type === "video" && project.media.video ? (
                  <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : project.media.type === "images" && project.media.images?.[0] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.media.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : null}
              </div>

              {/* Tech + links */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="badge-tech">{t}</span>
                ))}
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="btn-white text-xs flex-1 justify-center"
                >
                  Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs px-4"
                    aria-label="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
