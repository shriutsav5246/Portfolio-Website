import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        icon: <FaHtml5 />,
        title: "HTML5",
        description: "Semantic and accessible webpage structure.",
      },
      {
        icon: <FaCss3Alt />,
        title: "CSS3",
        description: "Responsive layouts using Flexbox and Grid.",
      },
      {
        icon: <SiJavascript />,
        title: "JavaScript",
        description: "Modern ES6+ programming and DOM manipulation.",
      },
      {
        icon: <FaReact />,
        title: "React",
        description: "Reusable component-based UI development.",
      },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      {
        icon: <FaNodeJs />,
        title: "Node.js",
        description: "Server-side JavaScript runtime.",
      },
      {
        icon: <SiExpress />,
        title: "Express.js",
        description: "RESTful backend framework.",
      },
    ],
  },

  {
    title: "Databases",
    skills: [
      {
        icon: <SiMongodb />,
        title: "MongoDB",
        description: "NoSQL document database.",
      },
      {
        icon: <SiMysql />,
        title: "MySQL",
        description: "Relational database management system.",
      },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      {
        icon: <FaJava />,
        title: "Java",
        description: "Object-oriented programming language.",
      },
      {
        icon: <FaPython />,
        title: "Python",
        description: "Automation, scripting and AI development.",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      {
        icon: <FaGitAlt />,
        title: "Git",
        description: "Distributed version control.",
      },
      {
        icon: <FaGithub />,
        title: "GitHub",
        description: "Code hosting and collaboration.",
      },
      {
        icon: <FaDocker />,
        title: "Docker",
        description: "Containerized application deployment.",
      },
      {
        icon: <FaAws />,
        title: "AWS",
        description: "Cloud infrastructure and services.",
      },
      {
        icon: <SiPostman />,
        title: "Postman",
        description: "API testing and debugging.",
      },
    ],
  },
];
