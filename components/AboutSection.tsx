"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Zap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "CS Student",
    value: "IUGB — Grand-Bassam",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Côte d'Ivoire",
  },
  {
    icon: Zap,
    label: "Focus",
    value: "Fullstack & Product",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title mb-10">
            Engineer. Builder.{" "}
            <span className="text-muted-foreground font-normal">
              Product thinker.
            </span>
          </h2>

          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            {/* Main text */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-foreground-2 leading-relaxed text-base">
                I&apos;m a Computer Science student at the{" "}
                <span className="text-foreground font-medium">
                  International University of Grand-Bassam (IUGB)
                </span>
                , building fullstack web applications and backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                My focus is on shipping real, production-ready products — not
                demos or tutorials. I build end-to-end: frontend UIs, backend
                APIs, database design, authentication, and deployment. I care
                about how things work in production.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                I&apos;m interested in startups, scalable web systems, and the growing
                African tech ecosystem. I believe in moving fast, iterating based
                on feedback, and writing code that teams can maintain.
              </p>

              <div className="pt-2">
                <p className="text-xs text-muted font-mono">
                  {">"} Currently working on{" "}
                  <span className="text-accent-light">Everyfit.ci</span> &{" "}
                  <span className="text-accent-light">Bara</span>
                </p>
              </div>
            </div>

            {/* Stats / Highlights */}
            <div className="md:col-span-2 flex flex-col gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-md bg-surface-2 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-foreground-2">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="mt-2 p-4 bg-surface border border-border rounded-lg">
                <p className="text-xs text-muted mb-2 font-mono">
                  Approach
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ship early",
                    "Iterate fast",
                    "Clean code",
                    "User-first",
                    "Fullstack",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-muted-foreground bg-surface-2 border border-border rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
