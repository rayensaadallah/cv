import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intership",
      company_name: "Esprit Connect",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2023 - Augest 2023",
      points: [
        "The project aims to develop an app for managing skills and careers, helping individuals and businesses track skills, manage employees, and plan career growth.",
        "Designe and develop a Restful APIs for different modules in the project.",
        "Create a secure authentication interface by leveraging OAuth2 and JWT protocols, while also integrating an email verification mechanism to enhance user validation.",
        "Implement interceptors and guards to reinforce security and authorization management within the application",
      ],
    },
    {
      title: "Software Developer InterShip",
      company_name: "MyDevUp",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2022 - Augest 2022",
      points: [
        "Develop a system to track animals and notify the user of the animal's positions",
        "Implemente computer vision technologies to identify animals.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",

      ],
    },
    {
      title: "IT Support Technician InterShip",
      company_name: "A.M.I",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2021 ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ClutechConnect",
      description:
        "CulTechConnect is a global platform uniting people worldwide to foster intercultural understanding, catalyze innovation, and celebrate diversity through collaboration and exploration.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ashref-ben/CulTech/tree/Rayen",
    },
    {
      name: "Forest",
      description:
        "Forest is a Dormitory, Restaurant and Event management Application for universities.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rayensaadallah/Forest-GestionRestaurant",
    },
    {
      name: "GetAWay",
      description:
        "GetAWay is a travel platform that allows users to purchase airplane tickets, book accommodations and explore recommended activities",
      tags: [
        {
          name: "JavaFx",
          color: "blue-text-gradient",
        },
        {
          name: "Symfony",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/rayensaadallah/GetAWay_INNOVA",
    },
    {
      name: "AirPort Management",
      description:
        "It' an application designed for airports to manage their employees' operations,while also providing users with the ability to purchase tickets and make flight reservations.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
        {
          name: "MVC",
          color: "pink-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };  