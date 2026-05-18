"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { WalkthroughSection } from "@/lib/types";

interface WalkthroughBlockProps {
  section: WalkthroughSection;
  index: number;
}

export default function WalkthroughBlock({ section, index }: WalkthroughBlockProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      id={section.id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-24 py-10 border-b border-border last:border-b-0"
    >
      {/* Block header */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="label-caps text-muted-2 flex-shrink-0 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-foreground-2 tracking-tight">
          {section.title}
        </h3>
      </div>

      {/* Content paragraphs */}
      <div className="space-y-4 pl-10">
        {section.content.map((para, i) => (
          <p key={i} className="text-sm md:text-base text-foreground-3 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
