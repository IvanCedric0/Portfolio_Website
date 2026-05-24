import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS, PROJECTS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <p className="text-2xl font-bold text-foreground mb-1">
              Ivan<span className="text-muted">.</span>
            </p>
            <p className="text-base text-muted">
              Full Stack Developer · Côte d&apos;Ivoire
            </p>
          </div>

          {/* Projects quick links */}
          <nav className="flex flex-wrap gap-x-14 md:gap-x-6 gap-y-2">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="text-base text-muted hover:text-foreground-3 transition-colors"
              >
                {p.shortTitle}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social-badges"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-badges"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email"
              className="footer-social-badges"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} KOUAME Ivan Cédric
          </p>
          <p className="text-xs text-muted-2 font-mono">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
