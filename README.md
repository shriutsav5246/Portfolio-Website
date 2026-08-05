# Utsav Shrivastav — Portfolio Website

A modern, responsive personal developer portfolio built with **React** and **Vite** to showcase my technical skills, projects, development experience, and professional profile.

The portfolio follows a minimal monochrome design with reusable React components, dynamic project pages, smooth interactions, responsive layouts, and structured data-driven content.

---

## About the Project

This portfolio was designed and developed as a personal platform to present my journey as a **Computer Science Engineering student and software developer**.

It provides an organized overview of my:

- Technical skills
- Programming languages
- Full-stack development experience
- Android development knowledge
- Development tools and platforms
- Academic and personal projects
- Learning journey
- Professional contact information

The project is built using a modular React architecture so that individual sections, project information, skills, and other content can be maintained and extended independently.

---

## Features

- Modern monochrome user interface
- Responsive layout for different screen sizes
- Component-based React architecture
- Multi-page navigation using React Router
- Smooth page transitions and animations
- Dynamic project detail pages
- Project filtering by category
- Reusable project and skill components
- Data-driven project and skill management
- Dedicated About and learning timeline
- Categorized technical skills
- Resume integration
- Social profile integration
- Contact section with message form
- Custom 404 / Not Found handling
- Persistent visual identity across pages

---

## Pages

### Home

The landing page introduces my profile and provides quick access to the major sections of the portfolio.

It includes:

- Personal introduction
- Developer role
- Professional summary
- View Projects button
- Resume access
- Contact navigation
- GitHub profile
- LinkedIn profile
- LeetCode profile
- Email access

---

### About

The About page presents my academic background, development journey, and technologies I work with.

It includes:

- Personal introduction
- Projects built statistics
- Technology statistics
- Current academic year
- Continuous learning indicator
- Development journey timeline
- Technology overview

---

### Skills

The Skills page provides a categorized overview of the technologies and tools I use across software development.

Skill categories include:

- Frontend Development
- Backend Development
- Databases
- Programming Languages
- Android Development
- Tools & Platforms

---

## Technologies & Skills

### Frontend Development

- HTML5
- CSS3
- JavaScript
- React

### Backend Development

- Node.js
- Express.js

### Databases

- MongoDB
- MySQL

### Programming Languages

- Java
- Python
- JavaScript
- Kotlin

### Android Development

- Android
- Android Studio
- Kotlin

### Tools & Platforms

- Git
- GitHub
- Docker
- AWS
- Postman

---

## Projects

The portfolio currently showcases **5 projects** across frontend, full-stack, and software development.

### 1. Portfolio Website

A modern developer portfolio built with React featuring reusable components, responsive layouts, smooth page transitions, dynamic project details, and a clean interactive interface.

**Technologies:**

`React` `JavaScript` `CSS` `Framer Motion` `React Router`

---

### 2. Skill Swap

A MERN-based skill exchange platform where users can create profiles, showcase their skills, connect with other users, and exchange knowledge.

**Technologies:**

`React` `Node.js` `Express.js` `MongoDB` `JWT`

---

### 3. Nexus Notes Application

A note management application designed for creating, organizing, editing, and managing notes through a structured interface.

**Technologies:**

`React` `Node.js` `Express.js` `MongoDB`

---

### 4. Website Clones

A collection of frontend projects created to practice responsive layouts, interface recreation, and modern frontend development.

The collection includes interfaces inspired by:

- Groww
- Flipkart
- Swiggy
- MakeMyTrip

**Technologies:**

`HTML` `CSS` `JavaScript` `Responsive Design`

---

### 5. Student Management System

A student management application developed to manage structured student information and perform common data-management operations.

**Technologies:**

`Java` `MySQL`

---

## Dynamic Project Details

Projects are not limited to summary cards.

Each project can have its own dynamically generated detail page using a unique project slug.

Example:

```text
/projects/portfolio-website
/projects/skill-swap
/projects/nexus-notes
```

React Router resolves the project through:

```text
/projects/:slug
```

Project information is retrieved from the centralized project data source and rendered using reusable Project Details components.

A project detail view can contain:

- Project category
- Project title
- Description
- Technology stack
- Project overview
- Key features
- GitHub repository
- Live project link

---

## Tech Stack

### Core

- React
- JavaScript
- HTML5
- CSS3

### Build Tool

- Vite

### Routing

- React Router DOM

### Animation

- Framer Motion

### Icons

- React Icons

### Version Control

- Git
- GitHub

---

## Project Architecture

The project follows a modular component-based architecture.

```text
Portfolio-Website/
│
├── client/
│   │
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── resume.pdf
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── Navbar/
│   │   │   ├── NotFound/
│   │   │   ├── ProjectDetails/
│   │   │   ├── Projects/
│   │   │   ├── Skills/
│   │   │   ├── SocialLinks/
│   │   │   └── UI/
│   │   │
│   │   ├── data/
│   │   │   ├── portfolioData.js
│   │   │   ├── projectsData.jsx
│   │   │   └── skillsData.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectDetails.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── styles/
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── package.json
└── README.md
```

---

## Application Routing

The application uses **React Router DOM** for client-side navigation.

| Route | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/skills` | Skills |
| `/projects` | Projects |
| `/projects/:slug` | Dynamic Project Details |
| `/contact` | Contact |
| `*` | Not Found |

This allows navigation between portfolio sections without performing traditional full-page reloads.

---

## Component Architecture

The application separates page-level components from reusable UI components.

For example, the Skills system uses reusable components such as:

```text
Skills
   │
   ├── SkillCategory
   │       │
   │       └── SkillCard
   │
   └── skillsData
```

The Projects architecture follows a similar pattern:

```text
Projects
   │
   ├── ProjectCard
   │
   └── projectsData
            │
            └── ProjectDetails
                    │
                    ├── ProjectHero
                    ├── ProjectOverview
                    ├── ProjectFeatures
                    └── ProjectLinks
```

This approach keeps UI rendering separate from portfolio content and makes the application easier to maintain and extend.

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/shriutsav5246/Portfolio-Website.git
```

---

### 2. Navigate to the Project

```bash
cd Portfolio-Website
```

---

### 3. Navigate to the Client Application

```bash
cd client
```

---

### 4. Install Dependencies

```bash
npm install
```

---

### 5. Start the Development Server

```bash
npm run dev
```

Vite will start the local development server.

Open the local URL displayed in the terminal, typically:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build using:

```bash
npm run build
```

The generated production files will be placed inside the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Design Philosophy

The portfolio follows a minimal **black-and-white visual language** intended to keep attention on the content rather than excessive decorative elements.

The interface uses:

- Large typography
- High-contrast monochrome styling
- Structured spacing
- Minimal borders
- Reusable cards
- Consistent navigation
- Portrait-driven visual composition
- Subtle animations and interactions

The same visual identity is maintained throughout the Home, About, Skills, Projects, Project Details, and Contact sections.

---

## Development Approach

The application was developed with emphasis on:

- Reusable React components
- Separation of concerns
- Centralized portfolio data
- Maintainable folder organization
- Dynamic rendering
- Responsive layouts
- Client-side routing
- Scalable project architecture

Instead of hardcoding every project and skill directly inside page components, structured data files are used wherever appropriate.

This makes adding new projects, technologies, and portfolio information significantly easier.

---

## Future Enhancements

The core portfolio architecture is complete. Future development will primarily focus on enhancements and refinement.

Possible enhancements include:

- Production deployment
- Additional responsive optimizations
- UI/UX refinements
- Additional animations and micro-interactions
- Real project screenshots
- Live project links
- Additional project case studies
- Contact form backend/service integration
- SEO optimization
- Open Graph metadata
- Performance optimization
- Accessibility improvements

---

## Author

### Utsav Shrivastav

Computer Science Engineering Student  
NIMS University, Jaipur, Rajasthan, India

Focused on full-stack development, software engineering, Android development, problem solving, and continuously expanding practical development skills through projects.

---

## Connect With Me

- **GitHub:** [shriutsav5246](https://github.com/shriutsav5246)
- **LinkedIn:** [Utsav Shrivastav](https://www.linkedin.com/in/shriutsav5246/)
- **LeetCode:** [shirutsav5246](https://leetcode.com/u/shirutsav5246/)
- **Email:** utsav.vinod5246@gmail.com

---

## Repository

This project's source code is available at:

**[github.com/shriutsav5246/Portfolio-Website](https://github.com/shriutsav5246/Portfolio-Website)**

---

## Feedback

Suggestions, feedback, and opportunities for collaboration are welcome.

If you find this project useful or interesting, consider giving the repository a ⭐.

---

<p align="center">
  Designed & Developed by <strong>Utsav Shrivastav</strong>
</p>

<p align="center">
  React • Vite • JavaScript • CSS
</p>
