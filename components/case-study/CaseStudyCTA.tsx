"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { SOCIAL_LINKS, PROJECTS } from "@/lib/data";

interface CaseStudyCTAProps {
  project: Project;
}

export default function CaseStudyCTA({ project }: CaseStudyCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Next project
  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  return (
    <section id="contact" className="border-t border-border">
      <div className="container-content py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-10"
        >
          {/* Headline */}
          <div className="max-w-2xl">
            <p className="label-caps mb-4">Let&apos;s Build Together</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-foreground mb-4">
              Have a project in mind?
            </h2>
            <p className="text-base text-foreground-3 leading-relaxed">
              I&apos;m open to fullstack engineering roles, freelance projects, and startup collaborations.
              If you&apos;re building something real, reach out.
            </p>
          </div>

          {/* Contact channels */}
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="group flex flex-col gap-3 p-5 border border-border rounded-2xl hover:border-border-2 hover:bg-surface transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl border border-border-2 flex items-center justify-center">
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground-3 transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground-2">Email</p>
                <p className="text-xs text-muted mt-0.5 truncate">{SOCIAL_LINKS.email}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity self-end" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-5 border border-border rounded-2xl hover:border-border-2 hover:bg-surface transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl border border-border-2 flex items-center justify-center">
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-foreground-3 transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground-2">LinkedIn</p>
                <p className="text-xs text-muted mt-0.5">Professional network</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity self-end" />
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-5 border border-border rounded-2xl hover:border-border-2 hover:bg-surface transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl border border-border-2 flex items-center justify-center">
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground-3 transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground-2">GitHub</p>
                <p className="text-xs text-muted mt-0.5">View my code</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity self-end" />
            </a>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="btn-white"
            >
              Send me a message
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Next project teaser */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="label-caps mb-4">Next Project</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between py-4 border-b border-border hover:border-border-2 transition-colors"
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground-3 group-hover:text-foreground transition-colors tracking-tight">
                {nextProject.title}
              </p>
              <p className="text-xs text-muted mt-1">{nextProject.type}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground-3 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
