"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";
import { PROJECTS, SOCIAL_LINKS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-label">Projects</p>
              <h2 className="section-title">
                Things I&apos;ve{" "}
                <span className="text-muted-foreground font-normal">
                  shipped
                </span>
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-lg">
                Real applications built for real users — from ecommerce to
                marketplaces, admin systems and algorithm tools.
              </p>
            </div>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-secondary whitespace-nowrap flex-shrink-0"
            >
              <Github className="w-4 h-4" />
              All Projects
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PROJECTS.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                inView={inView}
              />
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center"
            >
              <Github className="w-4 h-4" />
              See All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
