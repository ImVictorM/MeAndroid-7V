export type WorkingExperienceData = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  activities: string[];
  status: "completed" | "in-progress" | "ongoing";
  techs?: string[];
};

export const workingExperienceData: WorkingExperienceData[] = [
  {
    id: "1",
    company: "ACX Technologies",
    position: "Systems Development Assistant",
    startDate: "2023-09-15",
    endDate: "2024-02-10",
    activities: [
      "Front-end development using React, Typescript and Bootstrap",
      "Back-end development/maintenance of APIs using ASP.NET Core and C#",
      "Design diagram and maintenance of queries in relational databases (PostgreSQL and MSSQL)",
    ],
    status: "completed",
    techs: ["React", "Typescript", "ASP.NET Core", "C#"],
  },
  {
    id: "2",
    company: "Ajinomoto",
    position: "Machining Mechanics Apprentice",
    startDate: "2018-03-01",
    endDate: "2019-12-31",
    activities: [
      "Machining parts in ferrous and non-ferrous materials, following technical, maintenance, safety, environmental and quality standards and procedures",
      "Programming and operating CNC machines",
      "Performing manual machining and adjustment operations",
      "Technical drawing",
    ],

    status: "completed",
  },
];
