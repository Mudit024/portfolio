// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logos
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logos
import glaLogo from "./assets/education_logo/gla_logo.jpg";
import bsaLogo from "./assets/education_logo/bsa_logo.jpg";
import vpsLogo from "./assets/education_logo/vps_logo.jpg";

// Project Section Logos
import githubdetLogo from "./assets/work_logo/p1.png";
import csprepLogo from "./assets/work_logo/p2.jpeg";
import movierecLogo from "./assets/work_logo/p3.png";
import webverLogo from "./assets/work_logo/p6.png";
import imagesearchLogo from "./assets/work_logo/p5.png";
import newsappLogo from "./assets/work_logo/p4.png";

// BIO STATS & INFO
export const bioInfo = {
  name: "Mudit Jawara",
  roles: [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Competitive Programmer",
    "MCA Candidate @ MNNIT",
  ],
  bio: "Passionate Full-Stack Software Engineer pursuing MCA at MNNIT Allahabad with 2+ years of experience building high-performance web applications, scalable REST APIs, and interactive desktop vault tools. Proven problem solver actively competing on LeetCode & Codeforces.",
  email: "muditjawara3006@gmail.com",
  location: "Prayagraj, UP / Indore, MP",
  resumeUrl: "https://drive.google.com/file/d/15GuKwCXIUrC6VoGgXMEbi989xd8KlczK/view?usp=sharing",
  githubUrl: "https://github.com/Mudit024",
  linkedinUrl: "https://www.linkedin.com/in/mudit-jawara/",
};

export const bioStats = [
  { label: "Education", value: "MCA @ MNNIT", subtext: "Prayagraj (8.22 CGPA)" },
  { label: "Experience", value: "2+ Years", subtext: "Full Stack & Web Dev" },
  { label: "DSA & CP", value: "500+ Solved", subtext: "LeetCode & Codeforces" },
  { label: "Projects", value: "10+ Built", subtext: "Full Stack & Desktop" },
];

// SKILLS INFO
export const SkillsInfo = [
  {
    title: "Frontend",
    category: "Frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "Angular", logo: angularLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    category: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Springboot", logo: springbootLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    category: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
      { name: "C-Sharp", logo: csharpLogo },
    ],
  },
  {
    title: "Tools & DevOps",
    category: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

// EXPERIENCES
export const experiences = [];

// EDUCATION
export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Motilal Nehru National Institute of Technology (MNNIT) Allahabad",
    location: "Prayagraj, UP",
    date: "Aug 2024 - Present",
    grade: "8.22 CGPA",
    desc: "Pursuing Master of Computer Applications (MCA). Core coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Computer Networks, Software Engineering, and Object-Oriented System Design. Actively competitive programming on LeetCode & Codeforces.",
    degree: "Master of Computer Applications (MCA)",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Dr APJ Abdul Kalam University",
    location: "Indore, MP",
    date: "Aug 2020 - Jun 2023",
    grade: "66.6%",
    desc: "Completed Bachelor of Science in Computer Science. Built foundational expertise in C/C++, Java, DBMS, web development, and computer architecture.",
    degree: "Bachelor of Science - B.Sc (Computer Science)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Jindal Vidya Mandir",
    location: "Toranagallu, KA",
    date: "Apr 2019 - March 2020",
    grade: "85.4%",
    desc: "Completed Senior Secondary CBSE Class XII with focus on Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE (Class XII) - Science (PCM)",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Jindal Vidya Mandir",
    location: "Toranagallu, KA",
    date: "Apr 2017 - March 2018",
    grade: "73.4%",
    desc: "Completed Secondary School CBSE Class X with distinctions in Mathematics and Computer Science.",
    degree: "CBSE (Class X)",
  },
];

// PROJECTS
export const projects = [
  {
    id: 0,
    title: "CareerCrafter",
    category: "Full Stack",
    description:
      "CareerCrafter is an AI-powered full-stack job portal connecting students with recruiters through a streamlined dashboard. Features include AI resume analysis powered by Gemini AI, role-based access, job postings, candidate management, real-time application tracking, and JWT-secured authentication.",
    features: [
      "AI-Powered Resume Analysis via Gemini AI API",
      "Role-Based Dashboards for Candidates & Recruiters",
      "Application State Tracking & Cloudinary File Management",
      "Secure JWT Authentication & Protected REST Routes",
    ],
    image: githubdetLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "Gemini AI",
    ],
    github: "https://github.com/hg2411/CareerCrafter",
    webapp: "https://career-crafter-mocha.vercel.app/",
  },
  {
    id: 1,
    title: "CodeRadar",
    category: "Full Stack",
    description:
      "CodeRadar aggregates upcoming coding contests across Codeforces, LeetCode, CodeChef, AtCoder, HackerRank, and GeeksforGeeks into a unified real-time dashboard. Built with Spring Boot and React, offering customizable contest reminders, favorites, and performance analytics.",
    features: [
      "Multi-Platform Contest Scraping & REST API Aggregation",
      "Automated Email Reminders with JavaMailSender",
      "Spring Security & JWT Authentication with MongoDB",
      "Interactive Personal Dashboard with Contest Bookmarks",
    ],
    image: csprepLogo,
    tags: [
      "React",
      "Java",
      "Spring Boot",
      "Spring Security",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],
    github: "https://github.com/AlgoCoder12/CodeRadar",
    webapp: "https://github.com/AlgoCoder12/CodeRadar",
  },
  {
    id: 2,
    title: "FileRakshak",
    category: "Desktop App",
    description:
      "FileRakshak is a secure desktop vault application built with Electron.js designed to protect sensitive personal and project files. Employs AES-256 military-grade encryption, auto-locking on idle, webcam intrusion capture on failed logins, and owner emergency alerts.",
    features: [
      "AES-256 File & Folder Encryption Engine",
      "Failed Login Intruder Capture via Device Webcam",
      "Auto-Lock Idle Sentinel & Recovery Protocols",
      "Native Cross-Platform Desktop UI (Electron)",
    ],
    image: movierecLogo,
    tags: [
      "Electron.js",
      "Node.js",
      "JavaScript",
      "AES Encryption",
      "Desktop App",
      "HTML5/CSS3",
    ],
    github: "https://github.com/Softablitz25/Filerakshak123",
    webapp: "https://github.com/Softablitz25/Filerakshak123",
  },
  {
    id: 3,
    title: "Rentify",
    category: "Full Stack",
    description:
      "Rentify is a full-stack MERN car rental platform that enables users to browse, book, and manage vehicle rentals seamlessly. It features secure authentication, role-based access, booking management, and an intuitive responsive interface.",
    features: [
      "JWT Authentication & Role-Based Authorization",
      "Car Booking & Rental Management System",
      "Admin Dashboard for Vehicle & Booking Management",
      "Responsive MERN Stack Application",
    ],
    image: newsappLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Mudit024/Rentify",
    webapp: "https://rentify-demo.vercel.app",
  },
  {
    id: 4,
    title: "TalentIQ",
    category: "Full Stack",
    description:
      "TalentIQ is an AI-powered recruitment platform that streamlines hiring through resume analysis, AI interview assistance, recruiter-student communication, and real-time video interviews using modern web technologies.",
    features: [
      "AI Resume Analysis & Job Matching",
      "Integrated Video Interviews (Stream SDK)",
      "Recruiter & Student Chat System",
      "Authentication with Clerk & Background Jobs using Inngest",
    ],
    image: imagesearchLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "Stream SDK",
      "Inngest",
      "Gemini AI",
    ],
    github: "https://github.com/AiResumeX/Talent-IQ",
    webapp: "https://talentiq-demo.vercel.app",
  },
  {
    id: 5,
    title: "CampusRank",
    category: "Full Stack",
    description:
      "CampusRank is a college result and ranking management platform built for MNNIT. It enables secure student authentication, automated CGPA and class rank generation, transcript management, and admin-controlled result publishing.",
    features: [
      "College Email Authentication & OTP Verification",
      "Automated CGPA & Class Rank Generation",
      "Transcript Upload & Result Management",
      "Admin Dashboard for Student Records & Rankings",
    ],
    image: webverLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/Mudit024/CampusRank",
    webapp: "https://campusrank-demo.vercel.app",
  },
];
