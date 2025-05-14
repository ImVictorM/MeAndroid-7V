// src/data/skills.ts

export interface SkillCategory {
  category: string;
  items: string[];
}

// Placeholder skills - Replace with Victor's actual skills
export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#"],
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Redux"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "Flask", "Spring Boot", "ASP.NET"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "Vercel", "Figma"],
  },
  {
    category: "Operating Systems",
    items: ["Linux", "Windows", "macOS"],
  },
];

