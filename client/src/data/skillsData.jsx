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
  /* ==================================================
                    FRONTEND DEVELOPMENT
  ================================================== */

  {
    title: "Frontend Development",

    skills: [
      {
        icon: <FaHtml5 />,
        title: "HTML5",
        description:
          "Semantic, accessible, and well-structured web interfaces.",
      },

      {
        icon: <FaCss3Alt />,
        title: "CSS3",
        description:
          "Responsive layouts, animations, Flexbox, Grid, and modern UI styling.",
      },

      {
        icon: <SiJavascript />,
        title: "JavaScript",
        description:
          "Modern ES6+ JavaScript, DOM manipulation, and interactive web functionality.",
      },

      {
        icon: <FaReact />,
        title: "React",
        description:
          "Component-based interfaces, reusable UI architecture, and modern React development.",
      },
    ],
  },

  /* ==================================================
                    BACKEND DEVELOPMENT
  ================================================== */

  {
    title: "Backend Development",

    skills: [
      {
        icon: <FaNodeJs />,
        title: "Node.js",
        description:
          "Server-side JavaScript development for scalable web applications.",
      },

      {
        icon: <SiExpress />,
        title: "Express.js",
        description:
          "REST API development, routing, middleware, and backend application structure.",
      },
    ],
  },

  /* ==================================================
                        DATABASES
  ================================================== */

  {
    title: "Databases",

    skills: [
      {
        icon: <SiMongodb />,
        title: "MongoDB",
        description:
          "Document-based data storage and database integration for web applications.",
      },

      {
        icon: <SiMysql />,
        title: "MySQL",
        description:
          "Relational database design, SQL queries, and structured data management.",
      },
    ],
  },

  /* ==================================================
                  PROGRAMMING LANGUAGES
  ================================================== */

  {
    title: "Programming Languages",

    skills: [
      {
        icon: <FaJava />,
        title: "Java",
        description:
          "Object-oriented programming, problem solving, and data structures.",
      },

      {
        icon: <FaPython />,
        title: "Python",
        description:
          "Programming, scripting, backend fundamentals, and academic development.",
      },
    ],
  },

  /* ==================================================
                    TOOLS & PLATFORMS
  ================================================== */

  {
    title: "Tools & Platforms",

    skills: [
      {
        icon: <FaGitAlt />,
        title: "Git",
        description:
          "Version control, branching, commits, and collaborative development workflows.",
      },

      {
        icon: <FaGithub />,
        title: "GitHub",
        description:
          "Repository management, project collaboration, and source code hosting.",
      },

      {
        icon: <FaDocker />,
        title: "Docker",
        description:
          "Container fundamentals and containerized development environments.",
      },

      {
        icon: <FaAws />,
        title: "AWS",
        description:
          "Cloud computing fundamentals and hands-on experience with core AWS services.",
      },

      {
        icon: <SiPostman />,
        title: "Postman",
        description:
          "REST API testing, request validation, debugging, and development workflows.",
      },
    ],
  },
];
