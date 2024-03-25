import JobInterface from "modules/interfaces/jobInterface";

export const jobs: JobInterface[] = [
  {
    id: 0,
    name: "Iteam",
    description: "Ukrainian out stuff company",
    position: "Middle full stack dev",
    duration: "2021-2022",
    link: "https://jobs.dou.ua/companies/iteam/",
    logo: "./logos/iteam.png",
    responsibilities: [
      "Developing of web applications (FrontEnd & Backend)",
      "Unit and e2e tests performing",
      "Direct communications with international customers",
      "Leading of a small team (2 devs)",
      "Code rewieving and mentoring",
    ],
  },
  {
    id: 1,
    name: "LiteSite",
    description: "Business managment tool (USA startup)",
    position: "Middle full stack dev",
    duration: "2021-2022",
    link: "https://litesite.com/",
    logo: "./logos/litesite.png",
    responsibilities: [
      "Developing of web application (FrontEnd & Backend)",
      "Sprints planing (SCRUM)",
      "AWS integrations & payments development (Stripe, PayPal)",
      "Product deployment",
    ],
  },
  {
    id: 2,
    name: "Upwork",
    description: "Freelance platform. 1000+ worked hours",
    position: "Middle full stack dev",
    logo: "./logos/upwork.png",
    duration: "2021 - now",
    link: "https://www.upwork.com/freelancers/~01fb7dc9e4b62a5a47",
  },
  {
    id: 3,
    name: "Labk19",
    description: "German out stuff company",
    position: "Frontend React dev",
    duration: "2022 - now",
    link: "https://www.labk19.com/",
    logo: "./logos/labk19.jpg",
    responsibilities: [
      "Developing of web application (FrontEnd)",
      "Creation of UI with advanced animations",
      "Sprints planing (SCRUM)",
    ],
  },
];
