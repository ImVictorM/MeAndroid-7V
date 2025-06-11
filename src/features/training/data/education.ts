type EducationBase = {
  note?: string;
  description?: string;
  skills: string[];
  credentialURL?: string;
  credentialCode?: string;
};

type Degree = EducationBase & {
  degree: string;
  institution: string;
  startDate: Date;
  endDate: Date;
  fieldOfStudy: string;
  status: "completed" | "in-progress";
};

type Course = EducationBase & {
  course: string;
  institution: string;
  startDate: Date;
  endDate: Date;
  fieldOfStudy: string;
  status: "completed" | "in-progress";
};

type Certification = EducationBase & {
  status: "verified" | "expired";
  certification: string;
  issuer: string;
  issueDate: Date;
};

type Education = Degree | Certification | Course;

export const educationData: Education[] = [
  {
    degree: "Bachelor of Technology in Systems Analysis and Development",
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
  {
    course: "FullStack Web Development",
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
    course: "Machining Mechanics",
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
  {
    certification: "C# Bootcamp Certificate",
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
    certification: "Computer Science Module",
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
    certification: "Back-End Development Module",
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
    certification: "Front-End Development Module",
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
    certification: "Web Development Fundamentals Module",
    issuer: "Trybe",
    issueDate: new Date("2022-08-05"),
    credentialCode: "ffeb48a3-2c36-48b4-a74e-eb2eb9386ef6",
    credentialURL:
      "https://www.credential.net/ffeb48a3-2c36-48b4-a74e-eb2eb9386ef6#gs.nz8t8s",
    status: "verified",
    skills: ["JavaScript", "Bootstrap", "CSS3", "HTML5", "Git", "Linux"],
  },
  {
    certification: "Microsoft SQL Server Masterclass: Beginner to Expert",
    issuer: "Udemy",
    credentialURL:
      "https://www.udemy.com/certificate/UC-0c687c49-eb70-4329-8852-174b3dcc032d/",
    credentialCode: "UC-0c687c49-eb70-4329-8852-174b3dcc032d",
    issueDate: new Date("2023-07-05"),
    status: "verified",
    skills: ["Microsoft SQL Server", "SQL Server Management Studio"],
  },
  {
    certification: "The Ultimate ServiceNow Bootcamp - Cask Camp",
    issuer: "Cask Brasil",
    issueDate: new Date("2024-07-05"),
    skills: ["ServiceNow"],
    status: "verified",
  },
];
