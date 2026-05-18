"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS, RESUME_URL } from "@/lib/data";

const contactLinks = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
    description: "Best way to reach me",
  },
  {
    id: "contact-github",
    icon: Github,
    label: "GitHub",
    value: "github.com/ivankedric",
    href: SOCIAL_LINKS.github,
    description: "View my code",
    external: true,
  },
  {
    id: "contact-linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kouame-ivan-cedric",
    href: SOCIAL_LINKS.linkedin,
    description: "Professional network",
    external: true,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-xl">
            <p className="section-label">Contact</p>
            <h2 className="section-title mb-4">
              Let&apos;s work{" "}
              <span className="text-muted-foreground font-normal">together</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              I&apos;m open to fullstack engineering roles, freelance projects and
              startup collaborations. If you&apos;re building something interesting,
              reach out.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="group flex flex-col gap-3 p-5 bg-surface border border-border rounded-xl hover:border-accent/40 hover:bg-surface-2 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-1">{link.description}</p>
                    <p className="text-sm font-medium text-foreground-2 group-hover:text-foreground transition-colors duration-200">
                      {link.label}
                    </p>
                    <p className="text-xs text-muted mt-0.5 truncate">{link.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Resume download */}
          <div className="flex items-center gap-4 p-5 bg-surface border border-border rounded-xl">
            <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center">
              <FileText className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground-2">Resume</p>
              <p className="text-xs text-muted">
                Download my CV for a complete overview of my experience
              </p>
            </div>
            <a
              href={RESUME_URL}
              download
              id="contact-resume-download"
              className="btn-secondary text-xs whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
