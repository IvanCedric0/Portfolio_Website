import type { Project, SkillCategory, Experience, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Ruby on Rails"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux"],
  },
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Ruby"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "everyfit",
    title: "Everyfit.ci",
    description:
      "Fullstack ecommerce platform built with Next.js, Supabase and Clerk. Includes authentication, product management, backend operations and production deployment.",
    longDescription:
      "A production-deployed ecommerce platform for the Ivorian market. Features real user authentication via Clerk, product catalog management, order flow, and a Supabase-powered backend. Fully responsive and deployed on Vercel.",
    tech: ["Next.js", "Supabase", "Clerk", "Tailwind CSS"],
    github: "https://github.com/ivankedric",
    demo: "#",
    featured: true,
    status: "production",
  },
  {
    id: "bara",
    title: "Bara",
    description:
      "Marketplace platform inspired by Fiverr and adapted for the African freelance market. Built with a modern fullstack architecture.",
    longDescription:
      "A Fiverr-inspired service marketplace tailored for African freelancers. Includes user/service listing, category browsing, and a backend-first architecture built with Next.js and Supabase.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/ivankedric",
    demo: "#",
    featured: true,
    status: "in-progress",
  },
  {
    id: "gatekeeper",
    title: "GateKeeper",
    description:
      "Student information management system with admin dashboard, backend APIs and team collaboration features.",
    longDescription:
      "A collaborative school management system built for academic institutions. Features include student enrollment, admin-level control panels, REST APIs for data access, and a Flutter mobile interface.",
    tech: ["Node.js", "Express", "MySQL", "Flutter"],
    github: "https://github.com/ivankedric",
    featured: true,
    status: "completed",
  },
  {
    id: "algo-visualizer",
    title: "Algorithm Visualizer",
    description:
      "Interactive visualization platform for graph algorithms including Dijkstra and Kruskal.",
    longDescription:
      "An educational tool that visually renders graph algorithm execution. Users can draw graphs and watch Dijkstra's and Kruskal's algorithms run step by step, built with Ruby on Rails.",
    tech: ["Ruby on Rails"],
    github: "https://github.com/ivankedric",
    featured: true,
    status: "completed",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "NexTS(BF)",
    role: "Development & Network Intern",
    period: "2024",
    type: "Internship",
    description: [
      "Led a complete redesign and rebuild of the company website from the ground up",
      "Implemented frontend components and responsive layouts",
      "Collaborated with infrastructure and network teams on technical integration tasks",
      "Participated in architecture discussions and deployment workflows",
    ],
    tech: ["HTML/CSS", "JavaScript", "Linux"],
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/ivankedric",
  linkedin: "https://linkedin.com/in/kouame-ivan-cedric",
  email: "kouame.ivan@iugb.edu.ci",
};

export const RESUME_URL = "/resume.pdf";
