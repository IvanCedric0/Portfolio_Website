"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isOpen) {
      const attemptPlay = () => {
        video.play().catch(() => {
          // Autoplay blocked — controls are visible
        });
      };

      if (video.readyState >= 3) {
        attemptPlay();
      } else {
        video.addEventListener("canplay", attemptPlay, { once: true });
        return () => video.removeEventListener("canplay", attemptPlay);
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  }, [isOpen]);

  const isVideo = project.media.type === "video" && !!project.media.video;
  const isImages = project.media.type === "images" && !!project.media.images?.[0];

  return (
    <div className="border-b border-border">
      {/* Row header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="label-caps w-6 flex-shrink-0 tabular-nums text-muted">
          {String(project.index).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <p className={`text-lg font-bold transition-colors duration-200 ${isOpen ? "text-foreground" : "text-foreground-2"}`}>
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

      {/* Expandable content */}
      <div
        className={`overflow-hidden ${isOpen ? "" : "h-0"}`}
        aria-hidden={!isOpen}
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pb-5 flex flex-col gap-4"
            >
              {/* Media container */}
              <div
                className="rounded-xl overflow-hidden bg-surface-2 border border-border w-full"
                style={{ aspectRatio: "16 / 10" }}
              >
                {isVideo && (
                  <video
                    ref={videoRef}
                    src={project.media.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
                {isImages && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.media.images![0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="badge-tech">{t}</span>
                ))}
              </div>

              {/* Action buttons */}
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
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
