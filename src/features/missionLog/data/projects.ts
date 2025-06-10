export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  repositoryUrl: string;
  deploymentUrl?: string;
  techs: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Management",
    category: "REST API",
    description: `An e-commerce API built using C#, ASP.NET Core and concepts such as DDD, Clean Architecture, and CQRS. This project focuses 
  on implementing core functionalities of real-world e-commerce systems, including product 
  management, user management, order processing, and payment handling.`,
    repositoryUrl: "https://github.com/ImVictorM/ECommerceManagement",
    techs: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Trivia Game",
    category: "Browser Game",
    repositoryUrl: "https://github.com/ImVictorM/Trivia-Game",
    deploymentUrl: "https://play-trivia-game.vercel.app/",
    description: `Quiz game with varying topics and a local ranking. 
  The game consists of a round of 5 questions where the user can choose the theme, difficulty, and type of questions, 
  which can be multiple choice or true/false.`,
    techs: ["React", "TypeScript", "Styled Components"],
  },
  {
    id: "3",
    title: "Me",
    category: "Portfolio",
    description: `My first personal website with a theme inspired by the Fallout 4 game's UI.`,
    repositoryUrl: "https://github.com/ImVictorM/Me",
    deploymentUrl: "https://victormendes7.vercel.app/",
    techs: ["React", "TypeScript", "Styled Components"],
  },
  {
    id: "4",
    title: "Tech Cart",
    category: "Front-End",
    deploymentUrl: "https://tech-cart-shop.vercel.app/",
    description: `Client e-commerce application built using AngularJs(v1.8). 
    It allows users to explore tech products, manage their shopping cart, and place simulated orders.`,
    repositoryUrl: "https://github.com/ImVictorM/Tech-Cart",
    techs: ["AngularJs", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "5",
    title: "Recipes App",
    category: "Front-End",
    description: `A recipe app that allows you to search for food and drinks. In addition to discovering interesting
     details about dishes from around the world, you can also prepare them by following a detailed step-by-step guide.`,
    repositoryUrl: "https://github.com/ImVictorM/Recipes-App",
    deploymentUrl: "https://make-recipes.vercel.app/",
    techs: ["React", "TypeScript", "SASS", "ReactBootstrap", "Redux"],
  },
  {
    id: "6",
    title: "Dona Birita",
    category: "Full-Stack",
    description:
      'Beverage delivery platform for the fictitious distributor "Dona Birita".',
    repositoryUrl: "https://github.com/ImVictorM/Dona-Birita",
    techs: ["React", "JavaScript", "SASS", "NodeJs", "Express"],
  },
];
