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
        mono: ["var(--font-geist-mono)", "Fira Code", "monospace"],
      },
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        border: "#262626",
        "border-2": "#333333",
        accent: "#6366f1",
        "accent-light": "#818cf8",
        "accent-muted": "#312e81",
        muted: "#71717a",
        "muted-foreground": "#a1a1aa",
        foreground: "#fafafa",
        "foreground-2": "#e4e4e7",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
