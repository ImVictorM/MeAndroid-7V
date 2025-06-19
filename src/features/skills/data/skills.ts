export type SkillRecord = {
  name: string;
  proficiencyLevel: 1 | 2 | 3 | 4;
};

export type SkillCategory =
  | "programmingLanguage"
  | "frontEnd"
  | "backEnd"
  | "database"
  | "tool"
  | "other";

export const skillData: Record<SkillCategory, SkillRecord[]> = {
  programmingLanguage: [
    {
      name: "TypeScript",
      proficiencyLevel: 3,
    },
    {
      name: "JavaScript",
      proficiencyLevel: 3,
    },
    {
      name: "C#",
      proficiencyLevel: 3,
    },
    {
      name: "Python",
      proficiencyLevel: 1,
    },
  ],
  frontEnd: [
    {
      name: "HTML",
      proficiencyLevel: 4,
    },
    {
      name: "CSS",
      proficiencyLevel: 3,
    },
    {
      name: "React",
      proficiencyLevel: 3,
    },
    {
      name: "Redux",
      proficiencyLevel: 2,
    },
  ],
  backEnd: [
    {
      name: "ASP.NET Core",
      proficiencyLevel: 3,
    },
    {
      name: "NodeJs",
      proficiencyLevel: 3,
    },
    {
      name: "Entity Framework Core",
      proficiencyLevel: 2,
    },
    {
      name: "ExpressJs",
      proficiencyLevel: 1,
    },
  ],
  database: [
    {
      name: "PostgreSQL",
      proficiencyLevel: 3,
    },
    {
      name: "MSSQL Server",
      proficiencyLevel: 3,
    },
    {
      name: "MySQL",
      proficiencyLevel: 2,
    },
  ],
  tool: [
    {
      name: "Git",
      proficiencyLevel: 3,
    },
    {
      name: "Docker",
      proficiencyLevel: 2,
    },
    {
      name: "Linux",
      proficiencyLevel: 2,
    },
  ],
  other: [
    {
      name: "OOP",
      proficiencyLevel: 4,
    },
    {
      name: "APIs",
      proficiencyLevel: 3,
    },
    {
      name: "DDD (Domain Driven Design)",
      proficiencyLevel: 2,
    },
    {
      name: "Clean Architecture",
      proficiencyLevel: 2,
    },
    {
      name: "TDD (Test Driven Development)",
      proficiencyLevel: 1,
    },
    {
      name: "SOLID",
      proficiencyLevel: 2,
    },
    {
      name: "Agile Methodologies",
      proficiencyLevel: 1,
    },
  ],
};
