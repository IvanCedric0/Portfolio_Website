"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILL_CATEGORIES, EXPERIENCES } from "@/lib/data";

export default function HomeAbout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="container-wide py-20 border-t border-border">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid lg:grid-cols-2 gap-12 lg:gap-20"
      >
        {/* Left — bio + experience */}
        <div>
          <p className="label-caps mb-5 text-base">About</p>
          <p className="text-foreground-2 text-lg leading-relaxed mb-4">
            CS student at{" "}
            <span className="text-foreground font-medium">
              International University of Grand-Bassam (IUGB)
            </span>
            , building fullstack applications and backend systems.
          </p>
          <p className="text-foreground-3 text-lg leading-relaxed mb-8">
            Focused on shipping production-ready products — not demos. Interested in
            startups, scalable web systems, and the African tech ecosystem.
          </p>

          {/* Experience block */}
          <div>
            <p className="label-caps mb-4 text-base">Experience</p>
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.company}
                className="flex items-start gap-4 p-4 border border-border rounded-xl bg-surface"
              >
                <div className="flex-1">
                  <p className="text-base font-semibold text-foreground-2">{exp.role}</p>
                  <p className="text-sm text-muted mt-0.5">
                    {exp.company} · {exp.period} · {exp.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skills grid */}
        <div>
          <p className="label-caps mb-5 text-base">Skills</p>
          <div className="flex flex-col gap-5">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <p className="text-sm font-semibold tracking-widest uppercase text-muted-2 mb-2">
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-3 text-lg font-semibold">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="badge-tech">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
