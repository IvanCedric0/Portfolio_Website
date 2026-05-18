"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section highlighting
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors duration-200"
          >
            <Code2 className="w-5 h-5 text-accent" strokeWidth={2} />
            <span className="font-semibold text-sm tracking-tight">
              Ivan Cédric
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                      isActive
                        ? "text-foreground bg-surface-2"
                        : "text-muted hover:text-foreground-2"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
            >
              Contact Me
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-muted hover:text-foreground transition-colors p-1"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border md:hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-200",
                      isActive
                        ? "text-foreground bg-surface-2"
                        : "text-muted hover:text-foreground-2"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2 mt-2 border-t border-border">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="btn-primary w-full justify-center text-xs"
                >
                  Contact Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
