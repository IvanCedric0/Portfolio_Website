export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "production" | "in-progress" | "completed";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
  tech?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
