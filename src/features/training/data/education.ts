export type EducationBase = {
  type: string;
  id: string;
  title: string;
  description?: string;
  note?: string;
  skills: string[];
  credentialURL?: string;
  credentialCode?: string;
};

export type AcademicProgram = EducationBase & {
  type: "degree" | "course";
  institution: string;
  startDate: Date;
  endDate: Date;
  fieldOfStudy: string;
  status: "completed" | "in-progress";
};

export type Degree = AcademicProgram & {
  type: "degree";
};

export type Course = AcademicProgram & {
  type: "course";
};

export type Certificate = EducationBase & {
  type: "certificate";
  status: "verified" | "expired";
  issuer: string;
  issueDate: Date;
};

export type Education = {
  degrees: Degree[];
  certificates: Certificate[];
  courses: Course[];
};

export const educationData: Education = {
  degrees: [
    {
      id: "EDU-001",
      type: "degree",
      title: "Bachelor of Technology in Systems Analysis and Development",
      institution: "Faculdade Anhanguera de Limeira",
      fieldOfStudy: "Information Technology and Information Systems",
      startDate: new Date("2021-01-05"),
      endDate: new Date("2023-05-05"),
      status: "completed",
      description: `Bachelor's degree focused on developing skills in programming, software architecture, 
    databases, and systems analysis, with an emphasis on efficient technological solutions and hands-on projects 
    involving web applications, data management, and agile methodologies.`,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Java",
        "Python",
        "Git",
        "OOP",
        "Agile Methodologies",
        "Computer Networks",
        "Computer Architecture",
        "Relational Databases",
      ],
      credentialCode: "298.298.08881b322326",
      credentialURL:
        "https://diplomas.somosb4.com.br/validar/298.298.08881b322326",
    },
  ],
  courses: [
    {
      id: "CRS-001",
      type: "course",
      title: "FullStack Web Development",
      fieldOfStudy: "Web Development",
      institution: "Trybe",
      startDate: new Date("2022-05-20"),
      endDate: new Date("2023-05-20"),
      status: "completed",
      description: `Trybe is a technology school that has a genuine commitment to the professional
    success of its students. With the Shared Success Model, those who study at Trybe have
    the option of paying only when they are already working.
    There are more than 1500 hours of training that covers fundamentals of web
    development, development, Front-end, Back-end, computer science, agile
    methodologies and soft skills.`,
      skills: [
        "HTML5",
        "CSS3",
        "TypeScript",
        "JavaScript",
        "React",
        "Redux",
        "Bootstrap",
        "NodeJS",
        "ExpressJS",
        "Docker",
        "Git",
        "OOP",
        "Agile Methodologies",
        "Testing",
        "Relational Databases",
        "Non-Relational Databases",
      ],
      credentialURL:
        "https://www.credential.net/bcff945c-07d2-4cd0-a5be-42292a4457b3",
      credentialCode: "79608850",
    },
    {
      id: "CRS-002",
      title: "Machining Mechanics",
      type: "course",
      institution: 'Escola SENAI "Luiz Varga"',
      fieldOfStudy: "Machining Workshop Technology",
      description: `The Industrial Learning Course in Machining Mechanics aims to provide professional 
    training in performing machining operations on mechanical parts.`,
      startDate: new Date("2021-01-05"),
      endDate: new Date("2023-05-05"),
      status: "completed",
      skills: [
        "CNC Programming",
        "CNC Machines",
        "Mechanical Lathe",
        "Milling",
        "Technical Drawing",
        "SolidWorks",
      ],
    },
  ],
  certificates: [
    {
      id: "CRT-001",
      type: "certificate",
      title: "C# Bootcamp Certificate",
      issuer: "Trybe",
      credentialURL:
        "https://www.credential.net/efeafe4b-c179-4fd9-a298-81b43610a421",
      issueDate: new Date("2024-01-05"),
      credentialCode: "92270554",
      skills: [
        "C#",
        "ASP.NET",
        "ASP.NET Core",
        "Entity Framework",
        "Docker",
        "Microsoft SQL Server",
      ],
      status: "verified",
    },
    {
      id: "CRT-002",
      title: "Computer Science Module",
      type: "certificate",
      issuer: "Trybe",
      issueDate: new Date("2023-07-05"),
      status: "verified",
      credentialCode: "4889c36a-9fcc-43e3-8a62-548fa6148859",
      credentialURL:
        "https://www.credential.net/4889c36a-9fcc-43e3-8a62-548fa6148859#gs.2z2u99",
      skills: [
        "Data Analysis",
        "Python",
        "Algorithms",
        "Computer Science",
        "OOP",
        "Data Structures",
      ],
    },
    {
      id: "CRT-003",
      title: "Back-End Development Module",
      type: "certificate",
      issuer: "Trybe",
      issueDate: new Date("2023-05-05"),
      credentialCode: "c599be05-d8a9-437a-b4b4-dd6a92a2f07c",
      credentialURL:
        "https://www.credential.net/c599be05-d8a9-437a-b4b4-dd6a92a2f07c#gs.weq235",
      status: "verified",
      skills: [
        "NodeJS",
        "ExpressJS",
        "SequelizeJS",
        "MongoDB",
        "MySQL",
        "OOP",
        "Docker",
      ],
    },
    {
      id: "CRT-004",
      title: "Front-End Development Module",
      type: "certificate",
      issuer: "Trybe",
      issueDate: new Date("2022-12-05"),
      credentialCode: "f24665b4-57b8-445e-8bc9-6f262301d53b",
      credentialURL:
        "https://www.credential.net/f24665b4-57b8-445e-8bc9-6f262301d53b#gs.nzbf8n",
      status: "verified",
      skills: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Redux",
        "Jest",
        "Agile Methodologies",
      ],
    },
    {
      id: "CRT-005",
      title: "Web Development Fundamentals Module",
      type: "certificate",
      issuer: "Trybe",
      issueDate: new Date("2022-08-05"),
      credentialCode: "ffeb48a3-2c36-48b4-a74e-eb2eb9386ef6",
      credentialURL:
        "https://www.credential.net/ffeb48a3-2c36-48b4-a74e-eb2eb9386ef6#gs.nz8t8s",
      status: "verified",
      skills: ["JavaScript", "Bootstrap", "CSS3", "HTML5", "Git", "Linux"],
    },
    {
      id: "CRT-006",
      title: "Microsoft SQL Server Masterclass: Beginner to Expert",
      type: "certificate",
      issuer: "Udemy",
      credentialURL:
        "https://www.udemy.com/certificate/UC-0c687c49-eb70-4329-8852-174b3dcc032d/",
      credentialCode: "UC-0c687c49-eb70-4329-8852-174b3dcc032d",
      issueDate: new Date("2023-07-05"),
      status: "verified",
      skills: ["Microsoft SQL Server", "SQL Server Management Studio"],
    },
    {
      id: "CRT-007",
      title: "The Ultimate ServiceNow Bootcamp - Cask Camp",
      type: "certificate",
      issuer: "Cask Brasil",
      issueDate: new Date("2024-07-05"),
      skills: ["ServiceNow"],
      status: "verified",
    },
  ],
};
