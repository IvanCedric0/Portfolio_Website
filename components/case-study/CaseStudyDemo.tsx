"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import type { Project } from "@/lib/types";

interface CaseStudyDemoProps {
  project: Project;
}

export default function CaseStudyDemo({ project }: CaseStudyDemoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const { media } = project;

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.src && media.type === "video" && media.video) {
      video.src = media.video;
      video.load();
    }
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section id="demo" className="py-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section label */}
        <div className="container-content mb-5">
          <p className="label-caps">Live Demo</p>
        </div>

        {/* Full-width media */}
        <div className="container-wide">
          <div
            className="relative rounded-2xl overflow-hidden bg-surface-2 border border-border"
            style={{ aspectRatio: "16/9" }}
          >
            {/* ── VIDEO ── */}
            {media.type === "video" && media.video && (
              <>
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="none"
                  autoPlay
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  src={media.video}
                  className="w-full h-full object-cover"
                />
                {/* Overlay controls */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/20">
                  <button
                    onClick={handlePlay}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? (
                      <span className="flex gap-1">
                        <span className="w-1 h-5 bg-white rounded-full" />
                        <span className="w-1 h-5 bg-white rounded-full" />
                      </span>
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    )}
                  </button>
                </div>
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </>
            )}

            {/* ── IMAGE CAROUSEL (AWI3) ── */}
            {media.type === "images" && media.images && (
              <ImageSlideshow images={media.images} title={project.title} />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Simple image slideshow for image-only projects
function ImageSlideshow({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`${title} screenshot ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === active ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      {/* Dot nav */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              i === active ? "bg-white w-4" : "bg-white/40"
            }`}
            aria-label={`Screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
