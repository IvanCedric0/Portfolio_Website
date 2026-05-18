"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/types";
import WalkthroughBlock from "./WalkthroughBlock";

interface CaseStudyWalkthroughProps {
  project: Project;
}

const TOC_SECTIONS = [
  { id: "problem", label: "Problem Statement" },
  { id: "technical", label: "Technical Execution" },
  { id: "impact", label: "Business Impact" },
];

export default function CaseStudyWalkthrough({ project }: CaseStudyWalkthroughProps) {
  const [activeId, setActiveId] = useState("problem");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Track active section via scroll
  useEffect(() => {
    const handler = () => {
      for (const s of [...TOC_SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveId(s.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { caseStudy } = project;
  const sections = [caseStudy.problem, caseStudy.technical, caseStudy.impact];

  return (
    <section className="py-10">
      <div className="container-content mb-5">
        <p className="label-caps">Walkthrough</p>
      </div>

      <div className="container-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex gap-10 lg:gap-16"
        >
          {/* ── Sticky TOC (desktop) ── */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-24 flex flex-col gap-1">
              <p className="label-caps mb-3">Contents</p>
              {TOC_SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left text-xs py-1.5 px-2 rounded-md transition-all duration-200 ${
                    activeId === s.id
                      ? "text-foreground-2 bg-surface-2"
                      : "text-muted hover:text-foreground-3"
                  }`}
                >
                  {activeId === s.id && (
                    <motion.span
                      layoutId="toc-indicator"
                      className="inline-block w-1.5 h-1.5 rounded-full bg-foreground-2 mr-2 align-middle"
                    />
                  )}
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          {/* ── Content blocks ── */}
          <div className="flex-1 min-w-0">
            {sections.map((section, i) => (
              <WalkthroughBlock key={section.id} section={section} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
