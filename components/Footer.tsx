"use client";

import { Github, Linkedin, Code2 } from "lucide-react";
import { SOCIAL_LINKS, NAV_ITEMS } from "@/lib/data";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground-2">
              Ivan Cédric
            </span>
            <span className="text-muted text-xs ml-1">· Full Stack Developer</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href.replace("#", ""))}
                className="text-xs text-muted hover:text-foreground-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-foreground-2 hover:border-border-2 transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-foreground-2 hover:border-border-2 transition-all duration-200"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} KOUAME Ivan Cédric. All rights reserved.
          </p>
          <p className="text-xs text-muted font-mono">
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
