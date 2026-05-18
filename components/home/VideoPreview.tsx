"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/types";

interface VideoPreviewProps {
  project: Project | null;
  mouseY: number;           // raw cursor Y from parent
  containerRect: DOMRect | null;
}

export default function VideoPreview({
  project,
  mouseY,
  containerRect,
}: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play / pause when project changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (project?.media.type === "video" && project.media.video) {
      // Lazy-set src on first hover
      if (!video.src || !video.src.includes(project.media.video)) {
        video.src = project.media.video;
        video.load();
      }
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [project]);

  // Calculate clamped Y position
  const panelHeight = 280;
  const panelOffset = 20;
  let top = mouseY - panelHeight / 2;
  if (containerRect) {
    const minTop = containerRect.top;
    const maxTop = containerRect.bottom - panelHeight;
    top = Math.max(minTop, Math.min(maxTop, top));
  }

  const hasVideo = project?.media.type === "video";
  const hasImages = project?.media.type === "images";
  const firstImage = hasImages ? project?.media.images?.[0] : null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.94, x: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.94, x: 10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-10 z-30 pointer-events-none"
          style={{ top, width: 420 }}
        >
          <div className="rounded-2xl overflow-hidden border border-border-2 bg-surface shadow-2xl shadow-black/60">
            {/* Media area */}
            <div style={{ aspectRatio: "16/10" }} className="relative bg-surface-2 overflow-hidden">
              {hasVideo && (
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              )}
              {hasImages && firstImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={firstImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              )}
              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-xs font-semibold text-white/90">{project.title}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{project.type}</p>
              </div>
            </div>

            {/* Tech row */}
            <div className="px-4 py-3 flex flex-wrap gap-1.5 border-t border-border">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="badge-tech text-[10px]">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
