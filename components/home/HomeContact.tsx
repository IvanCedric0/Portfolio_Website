"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS, RESUME_URL } from "@/lib/data";

export default function HomeContact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="container-wide py-20 border-t border-border">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="label-caps mb-5 text-base">Contact</p>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3">
              Ready to build something?
            </h2>
            <p className="text-foreground-3 text-sm leading-relaxed">
              Open to fullstack roles, freelance projects, and startup opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="btn-white"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={RESUME_URL}
              download
              className="btn-outline"
            >
              <ArrowUpRight className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
