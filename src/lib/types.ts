export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact?: string;
  role: string;
  stack: string[];
  tags: string[];
  heroImage: string;
  gallery?: string[];
  repo?: string;
  live?: string;
  year?: string;
  featured?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome?: string;
  cover: string;
  gallery: string[];
  tools: string[];
  year?: string;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  stack: string[];
  logo?: string;
};

export type Skill = {
  category: string;
  skills: string[];
  icon?: string;
};
