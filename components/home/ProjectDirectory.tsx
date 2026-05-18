"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/types";
import VideoPreview from "./VideoPreview";
import MobileProjectCard from "./MobileProjectCard";
import StatusBadge from "@/components/ui/StatusBadge";

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProjectDirectory() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mouseY, setMouseY] = useState(0);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
  const [openMobileId, setOpenMobileId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const onMouseEnter = useCallback((project: Project) => {
    if (isMobile) return;
    setHoveredProject(project);
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, [isMobile]);

  const onMouseLeave = useCallback(() => {
    if (isMobile) return;
    setHoveredProject(null);
  }, [isMobile]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (isMobile) return;
    setMouseY(e.clientY);
  }, [isMobile]);

  return (
    <section id="work" className="container-wide py-10">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8 border-b border-border pb-5">
        <div>
          <p className="label-caps mb-1">Selected Work</p>
          <p className="text-xs text-muted-2">
            {PROJECTS.length} projects · {new Date().getFullYear()}
          </p>
        </div>
        <a
          href="https://github.com/ivankedric"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-xs"
        >
          <Github className="w-3.5 h-3.5" />
          All on GitHub
        </a>
      </div>

      {/* ── DESKTOP: hover-video list ── */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="hidden md:block relative"
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <Link href={`/projects/${project.slug}`} className="group block">
              <div
                className="relative flex items-center gap-6 py-6 border-b border-border cursor-pointer"
                onMouseEnter={() => onMouseEnter(project)}
                onMouseLeave={onMouseLeave}
              >
                {/* Number */}
                <span className="label-caps w-8 flex-shrink-0 tabular-nums transition-colors duration-200 group-hover:text-foreground-3">
                  {String(project.index).padStart(2, "0")}
                </span>

                {/* Title */}
                <span className="flex-1 text-2xl md:text-3xl font-bold text-foreground-3 group-hover:text-foreground transition-colors duration-200 tracking-tight">
                  {project.title}
                </span>

                {/* Type */}
                <span className="hidden lg:block label-caps text-muted-2 group-hover:text-muted transition-colors">
                  {project.type}
                </span>

                {/* Year */}
                <span className="hidden lg:block label-caps text-muted-2">
                  {project.year}
                </span>

                {/* Status */}
                <StatusBadge status={project.status} />

                {/* Arrow */}
                <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:text-foreground-3 flex-shrink-0" />
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Floating video preview — cursor-positioned */}
        <VideoPreview
          project={hoveredProject}
          mouseY={mouseY}
          containerRect={containerRect}
        />
      </div>

      {/* ── MOBILE: accordion cards ── */}
      <div className="md:hidden">
        {PROJECTS.map((project) => (
          <MobileProjectCard
            key={project.id}
            project={project}
            isOpen={openMobileId === project.id}
            onToggle={() =>
              setOpenMobileId(openMobileId === project.id ? null : project.id)
            }
          />
        ))}
      </div>
    </section>
  );
}
