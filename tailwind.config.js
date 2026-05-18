/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["'Fira Code'", "ui-monospace", "monospace"],
      },
      colors: {
        // Core surfaces
        background: "#080808",
        surface: "#0f0f0f",
        "surface-2": "#171717",
        "surface-3": "#1f1f1f",
        // Borders — very subtle
        border: "#1a1a1a",
        "border-2": "#2a2a2a",
        "border-3": "#3a3a3a",
        // Text hierarchy
        foreground: "#f5f5f5",
        "foreground-2": "#d4d4d4",
        "foreground-3": "#a3a3a3",
        muted: "#525252",
        "muted-2": "#404040",
        "muted-foreground": "#737373",  // legacy alias
        // Accents
        accent: "#ffffff",           // Primary: white (Apple-like)
        "accent-dim": "#d4d4d4",
        "accent-light": "#d4d4d4",   // legacy alias
        indigo: "#6366f1",           // Secondary: indigo (tech badges only)
        "indigo-dim": "#4338ca",
        // Status colors
        "status-live": "#22c55e",
        "status-wip": "#f59e0b",
        "status-done": "#60a5fa",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
        "slide-up": "slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
