"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILL_CATEGORIES } from "@/lib/data";

const SKILL_ICONS: Record<string, string> = {
  // Frontend
  React: "⚛️",
  "Next.js": "▲",
  "Tailwind CSS": "🎨",
  "HTML/CSS": "🌐",
  // Backend
  "Node.js": "🟢",
  "Express.js": "⚡",
  "Ruby on Rails": "💎",
  // DB
  PostgreSQL: "🐘",
  MySQL: "🐬",
  Supabase: "⚡",
  // Tools
  Git: "🔀",
  GitHub: "🐙",
  Docker: "🐳",
  Linux: "🐧",
  // Languages
  JavaScript: "JS",
  TypeScript: "TS",
  Python: "🐍",
  Java: "☕",
  Ruby: "💎",
};

const categoryColors: Record<string, string> = {
  Frontend: "text-sky-400",
  Backend: "text-emerald-400",
  Database: "text-amber-400",
  Tools: "text-violet-400",
  Languages: "text-rose-400",
};

const categoryBg: Record<string, string> = {
  Frontend: "bg-sky-400/5 border-sky-400/10",
  Backend: "bg-emerald-400/5 border-emerald-400/10",
  Database: "bg-amber-400/5 border-amber-400/10",
  Tools: "bg-violet-400/5 border-violet-400/10",
  Languages: "bg-rose-400/5 border-rose-400/10",
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title mb-3">
            Technical Stack
          </h2>
          <p className="text-muted-foreground text-sm mb-10 max-w-lg">
            Technologies I use to build fullstack products — from UI to
            infrastructure.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: catIdx * 0.08,
                  ease: "easeOut",
                }}
                className={`p-5 rounded-xl border ${categoryBg[category.name]} transition-all duration-200 hover:border-opacity-30`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-semibold tracking-widest uppercase ${categoryColors[category.name]}`}
                  >
                    {category.name}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const icon = SKILL_ICONS[skill];
                    const isEmoji = icon && icon.length > 2;
                    const isText = icon && icon.length <= 2 && /^[A-Z]/.test(icon);

                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-lg text-sm text-foreground-2 font-medium hover:border-border-2 transition-colors duration-150"
                      >
                        {icon && (
                          <span
                            className={
                              isText
                                ? `text-xs font-bold font-mono ${categoryColors[category.name]} min-w-[1.5rem] text-center`
                                : "text-sm"
                            }
                          >
                            {isEmoji ? icon : isText ? icon : icon}
                          </span>
                        )}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
