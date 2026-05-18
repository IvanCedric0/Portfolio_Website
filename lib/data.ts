import type { Project, SkillCategory, Experience, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/ivancedric0",
  linkedin: " https://www.linkedin.com/in/ivan-cedric-kouame-86133431b",
  email: "kouameo1@student.iugb.edu.ci",
};

export const RESUME_URL = "/resume.pdf";

export const PROJECTS: Project[] = [
  {
    id: "everyfit",
    slug: "everyfit",
    index: 1,
    title: "Everyfit.ci",
    shortTitle: "Everyfit",
    type: "E-Commerce",
    status: "production",
    year: "2025",
    tech: ["Next.js", "Supabase", "Clerk", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/IvanCedric0/Everyfit",
    demo: "www.everyfit.ci",
    media: {
      type: "video",
      video: "/Videos/everyfit_demo.mp4",
    },
    caseStudy: {
      hook: "Built and shipped a full ecommerce platform for the Ivorian market — from zero to real users in production.",
      metrics: [
        { label: "Status", value: "Live in Production" },
        { label: "Auth System", value: "Clerk" },
        { label: "Backend", value: "Supabase" },
      ],
      problem: {
        id: "problem",
        title: "Problem Statement",
        content: [
          "The Ivorian fashion market lacked a dedicated, modern digital storefront. Existing platforms were either generic international tools with poor UX or informal social media pages with no payment/checkout flow.",
          "The goal was to build a complete, production-ready ecommerce experience: catalog, product management, authentication, and order flow — all deployed and working for real users.",
        ],
      },
      technical: {
        id: "technical",
        title: "Technical Execution",
        content: [
          "Built on Next.js App Router with TypeScript for type-safe fullstack logic. Supabase handles the database, storage, and real-time capabilities without requiring a separate backend service.",
          "Clerk provides drop-in authentication with session management, social logins, and user profiles — reducing auth complexity to near zero while keeping security production-grade.",
          "Product images are stored in Supabase Storage with public CDN URLs. The frontend fetches products via server components for optimal SEO and initial load performance.",
          "Deployed on Vercel with automatic CI/CD from GitHub. Zero-downtime deploys and edge-cached static assets keep Lighthouse performance scores high.",
        ],
      },
      impact: {
        id: "impact",
        title: "Business Impact",
        content: [
          "Launched a functional ecommerce platform that is live and accessible to real users — not a demo or mockup.",
          "Demonstrated the ability to own an entire product stack: frontend, backend, auth, database, deployment, and real-world operations.",
          "Positioned as the most technically credible project in the portfolio — a production deployment with real infrastructure decisions.",
        ],
      },
    },
  },
  {
    id: "bara",
    slug: "bara",
    index: 2,
    title: "Bara",
    shortTitle: "Bara",
    type: "Marketplace",
    status: "in-progress",
    year: "2026",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/IvanCedric0/freelancers-marketplace",
    media: {
      type: "video",
      video: "/Videos/bara_demo.mp4",
    },
    caseStudy: {
      hook: "Designing a Fiverr-inspired freelance marketplace built specifically for African markets and independent creators.",
      metrics: [
        { label: "Model", value: "Service Marketplace" },
        { label: "Market", value: "African Freelancers" },
        { label: "Architecture", value: "Fullstack SaaS" },
      ],
      problem: {
        id: "problem",
        title: "Problem Statement",
        content: [
          "African freelancers lack a trusted, localized marketplace platform. Global platforms like Fiverr or Upwork have friction points around currency, identity verification, and payment methods that don't suit the local context.",
          "Bara is designed to fill this gap — a service marketplace architecture with category browsing, profile creation, and service listing built for the African freelance ecosystem.",
        ],
      },
      technical: {
        id: "technical",
        title: "Technical Execution",
        content: [
          "Fullstack Next.js with Supabase as the backend-as-a-service layer. User profiles, service listings, and categories are stored in PostgreSQL via Supabase with row-level security policies.",
          "The marketplace architecture involves two user roles (buyer and seller) with different UI flows — seller onboarding and service publishing vs buyer discovery and inquiry.",
          "Service images and portfolio assets are handled via Supabase Storage. Search and filtering are built on top of Supabase's PostgREST query interface.",
        ],
      },
      impact: {
        id: "impact",
        title: "Conversion Architecture",
        content: [
          "Demonstrates product thinking beyond code — understanding marketplace dynamics, two-sided networks, and localized UX decisions.",
          "Shows ability to architect multi-role systems with proper data modeling, not just frontend clones.",
          "Actively being iterated on based on feedback from potential users in the target market.",
        ],
      },
    },
  },
  {
    id: "awi3",
    slug: "awi3",
    index: 3,
    title: "AWI 3.0",
    shortTitle: "AWI 3.0",
    type: "E-Learning",
    status: "completed",
    year: "2025",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/IvanCedric0/Awi-Learning/",
    media: {
      type: "images",
      images: [
        "/Images/awi3.0_shot.png",
        "/Images/awi3.0_shot2.png",
        "/Images/awi3.0_shot3.png",
      ],
    },
    caseStudy: {
      hook: "Built a full e-learning platform with course catalog, user authentication, and structured learning paths — live and styled for African professional education.",
      metrics: [
        { label: "Courses", value: "Multi-track" },
        { label: "Stack", value: "Next.js + Supabase" },
        { label: "Target", value: "African Professionals" },
      ],
      problem: {
        id: "problem",
        title: "Problem Statement",
        content: [
          "AWI (Africa Web Institute) needed a modern digital learning platform that could host structured courses, manage user enrollment, and present professional training content with a clean, branded UI.",
          "The existing approach was informal — content delivered through social media and PDFs. The goal was a proper LMS-style platform tailored to their audience and content model.",
        ],
      },
      technical: {
        id: "technical",
        title: "Technical Execution",
        content: [
          "Built with Next.js App Router, using server components for SEO-optimized course listing pages and client components for interactive enrollment and video preview flows.",
          "Supabase powers the database for course metadata, user profiles, and enrollment records. Authentication is handled through Supabase Auth with email/password and social providers.",
          "The UI was designed with a clean, professional orange-and-white brand palette. Course cards, progress indicators, and a structured FAQ/features page were all custom-built.",
          "The platform includes a catalogue page, individual course detail pages, a features section, and a full landing page — production-ready structure.",
        ],
      },
      impact: {
        id: "impact",
        title: "Business Impact",
        content: [
          "Delivered a complete, branded e-learning platform for a real client in the African education market.",
          "Demonstrated the ability to work across product design decisions, not just implementation — choosing the right information architecture for a learning platform.",
          "The course catalogue and enrollment system create a repeatable structure that can scale to more courses and instructors without architectural changes.",
        ],
      },
    },
  },
  {
    id: "char-recognition",
    slug: "char-recognition",
    index: 4,
    title: "Char Recognition AI",
    shortTitle: "CharRec AI",
    type: "AI / ML",
    status: "completed",
    year: "2025",
    tech: ["Next.js", "Python", "MNIST", "TensorFlow", "FastAPI"],
    github: "https://github.com/IvanCedric0/Emnist_Character_recognition_Web_App",
    media: {
      type: "video",
      video: "/Videos/char_recognition_demo.mp4",
    },
    caseStudy: {
      hook: "Built an end-to-end AI web application connecting a Next.js frontend to a Python ML model trained on MNIST data — recognizing handwritten characters in real time.",
      metrics: [
        { label: "Model", value: "MNIST Trained" },
        { label: "Frontend", value: "Next.js" },
        { label: "Backend", value: "Python + FastAPI" },
      ],
      problem: {
        id: "problem",
        title: "Problem Statement",
        content: [
          "Most ML demos live in Jupyter notebooks — useful for data scientists, invisible to everyone else. The challenge was to make a trained machine learning model accessible through a clean, interactive web interface.",
          "The goal: train a character recognition model on MNIST data, expose it through a Python API, and connect a Next.js frontend that lets any user draw a character and get a real-time prediction.",
        ],
      },
      technical: {
        id: "technical",
        title: "Technical Execution",
        content: [
          "Trained a convolutional neural network (CNN) on the MNIST handwritten digit dataset using TensorFlow/Keras in Python. The model achieves high accuracy on standard test data.",
          "The trained model is served via a FastAPI backend — a lightweight, async Python web server that exposes a `/predict` endpoint accepting base64-encoded image data.",
          "The Next.js frontend includes a canvas-based drawing interface where users can draw a character. On submission, the canvas is converted to a 28×28 grayscale image, sent to the Python API, and the prediction is displayed in real time.",
          "This architecture demonstrates cross-language full-stack thinking: React for UI, Next.js for routing/SSR, Python for ML inference — all communicating through a clean REST API.",
        ],
      },
      impact: {
        id: "impact",
        title: "Technical Significance",
        content: [
          "Shows ability to work across language boundaries — not confined to the JavaScript ecosystem. Python for ML, Node for web, cleanly integrated.",
          "Demonstrates understanding of model deployment as a service — not just training models but making them accessible and usable.",
          "Positions as a developer who can bridge AI/ML tooling with modern web interfaces — a high-value skill set in the current market.",
        ],
      },
    },
  },
  {
    id: "algo-visualizer",
    slug: "algo-visualizer",
    index: 5,
    title: "Algorithm Visualizer",
    shortTitle: "AlgoViz",
    type: "Dev Tool",
    status: "completed",
    year: "2026",
    tech: ["Ruby on Rails", "JavaScript", "Canvas API"],
    github: "https://github.com/IvanCedric0",
    media: {
      type: "video",
      video: "/Videos/algo_visualizer_demo.mp4",
    },
    caseStudy: {
      hook: "Built an interactive graph algorithm visualization engine — Dijkstra and Kruskal running step-by-step on a user-drawn graph.",
      metrics: [
        { label: "Algorithms", value: "Dijkstra + Kruskal" },
        { label: "Framework", value: "Ruby on Rails" },
        { label: "Rendering", value: "Canvas API" },
      ],
      problem: {
        id: "problem",
        title: "Problem Statement",
        content: [
          "Graph algorithms are notoriously difficult to understand from pseudocode or static diagrams alone. Students and developers learning algorithms need to see them execute — step by step — on actual graph data.",
          "The project goal was to create an interactive visualization tool where users can construct their own graphs and watch Dijkstra's shortest path and Kruskal's minimum spanning tree algorithms execute in real time.",
        ],
      },
      technical: {
        id: "technical",
        title: "Technical Execution",
        content: [
          "Built with Ruby on Rails serving a single-page application backed by Canvas API rendering. The graph is drawn and manipulated by the user — nodes placed by click, edges connected by dragging.",
          "Dijkstra's algorithm is implemented step-by-step with a priority queue. The visualization highlights the current node, evaluated edges, and the final shortest-path tree at each iteration.",
          "Kruskal's algorithm uses a union-find data structure. Edges are sorted by weight and processed visually — the spanning tree grows one edge at a time with color coding for included vs. rejected edges.",
          "Algorithm state is stored in JavaScript and rendered to Canvas at each step, with configurable animation speed so users can slow down and understand each decision.",
        ],
      },
      impact: {
        id: "impact",
        title: "Technical Significance",
        content: [
          "Proves deep computer science fundamentals — not just framework usage. Building correct algorithm implementations requires understanding the underlying data structures.",
          "Demonstrates the ability to work outside the standard JS/TS ecosystem — Ruby on Rails was chosen as a deliberate language exploration exercise.",
          "The Canvas API rendering approach shows low-level graphics programming knowledge — understanding animation frames, coordinate systems, and state-driven rendering.",
        ],
      },
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { name: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { name: "Backend", skills: ["Node.js", "Express.js", "Ruby on Rails", "FastAPI"] },
  { name: "Database", skills: ["PostgreSQL", "MySQL", "Supabase"] },
  { name: "Tools", skills: ["Git", "Docker", "Linux", "Vercel"] },
  { name: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Ruby"] },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "NexTS(BF)",
    role: "Development & Network Intern",
    period: "2025",
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

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
