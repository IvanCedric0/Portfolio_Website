"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { EXPERIENCES } from "@/lib/data";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title mb-10">Work History</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-5 bottom-5 w-px bg-border md:left-6" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  className="relative flex gap-6 md:gap-8 pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-surface border border-border">
                    <Briefcase className="w-3.5 h-3.5 text-accent md:w-4 md:h-4" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-surface border border-border rounded-xl p-6 hover:border-border-2 transition-all duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-accent-light font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="px-2 py-0.5 text-xs font-medium text-muted-foreground bg-surface-2 border border-border rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1 flex-shrink-0">›</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {exp.tech && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                        {exp.tech.map((t) => (
                          <span key={t} className="badge-tech">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
