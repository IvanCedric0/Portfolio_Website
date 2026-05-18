export interface WalkthroughSection {
  id: string;
  title: string;
  content: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudyData {
  hook: string;                    // One-sentence outcome/hook
  metrics: ProjectMetric[];        // 2–3 key numbers
  problem: WalkthroughSection;
  technical: WalkthroughSection;
  impact: WalkthroughSection;
}

export type MediaType = "video" | "images";

export interface ProjectMedia {
  type: MediaType;
  video?: string;                  // /Videos/xxx.mp4
  images?: string[];               // /Images/xxx.png
  poster?: string;                 // Poster frame for video
}

export interface Project {
  id: string;
  slug: string;
  index: number;
  title: string;
  shortTitle: string;
  type: string;                    // "E-Commerce" / "Marketplace" / etc.
  status: "production" | "in-progress" | "completed";
  year: string;
  tech: string[];
  github?: string;
  demo?: string;
  media: ProjectMedia;
  caseStudy: CaseStudyData;
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
