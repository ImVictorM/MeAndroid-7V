// src/data/experience.ts

export interface Mission {
  id: string;
  title: string;
  organization: string; // Or 'Client' for projects
  duration: string;
  status: string; // e.g., 'Completed', 'Ongoing'
  description: string[];
  tags?: string[]; // Optional tags like 'React', 'Project Lead', etc.
  githubLink?: string; // Optional link to GitHub repo
}

// Placeholder experience - Replace with Victor's actual experience/projects
export const missionLogData: Mission[] = [
  {
    id: "exp001",
    title: "Software Engineer",
    organization: "Tech Corp",
    duration: "2022 - Present",
    status: "Ongoing",
    description: [
      "Developed and maintained web applications using React, TypeScript, and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Implemented automated testing suites to ensure code quality.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Agile"],
  },
  {
    id: "proj001",
    title: "Personal Portfolio (Unit 7V Interface)",
    organization: "Personal Project",
    duration: "2025",
    status: "In Progress",
    description: [
      "Designed and developed an interactive portfolio website inspired by NieR: Automata UI.",
      "Utilized React, TypeScript, and Tailwind CSS to create a unique user experience.",
      "Implemented theme switching and custom animations.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX"],
    githubLink: "https://github.com/ImVictorM/nier-portfolio", // Example link
  },
  {
    id: "exp002",
    title: "Junior Developer",
    organization: "Startup Inc.",
    duration: "2020 - 2022",
    status: "Completed",
    description: [
      "Assisted senior developers in building features for a SaaS platform.",
      "Gained experience with Python (Flask) and PostgreSQL.",
      "Participated in code reviews and bug fixing.",
    ],
    tags: ["Python", "Flask", "PostgreSQL"],
  },
];

