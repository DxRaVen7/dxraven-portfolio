export type Skill = {
  name: string;
  level: number;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  description: string;
};

export const profile = {
  name: "YOUR NAME",
  role: "IT Student · Web Developer",
  eyebrow: "INFORMATION TECHNOLOGY",
  shortBio:
    "An Information Technology student focused on building clean, modern and useful digital experiences.",
  heroBio:
    "I build modern web experiences, database-driven applications, and practical software projects while growing toward full-stack development.",
  location: "Iraq",
  email: "your.email@example.com",
  phone: "+964 7XX XXX XXXX",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
  cvUrl: "#",
  image: "/images/profile-placeholder.svg",
  available: true,
  rotatingRoles: ["Web Development", "Database Systems", "C# & .NET", "Problem Solving"],
};

export const stats = [
  { value: "03+", label: "Years Learning IT" },
  { value: "10+", label: "Projects & Assignments" },
  { value: "05+", label: "Core Technologies" },
  { value: "100%", label: "Curiosity to Learn" },
];

export const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: "HTML", level: 90, icon: "HTML" },
    { name: "CSS", level: 85, icon: "CSS" },
    { name: "JavaScript", level: 80, icon: "JS" },
    { name: "React", level: 75, icon: "R" },
    { name: "Next.js", level: 70, icon: "N" },
  ],
  Backend: [
    { name: "C#", level: 65, icon: "C#" },
    { name: ".NET", level: 60, icon: ".N" },
    { name: "REST APIs", level: 65, icon: "API" },
    { name: "Problem Solving", level: 82, icon: "PS" },
  ],
  Database: [
    { name: "MySQL", level: 80, icon: "SQL" },
    { name: "SQL", level: 80, icon: "SQL" },
    { name: "Database Design", level: 78, icon: "DB" },
    { name: "phpMyAdmin", level: 75, icon: "PM" },
  ],
};

export const projects: Project[] = [
  {
    id: "project-01",
    title: "Campus Service Database",
    category: "Database",
    year: "2026",
    description:
      "A relational database concept for managing records, users, services, and operational data.",
    fullDescription:
      "Designed as an academic project to demonstrate database analysis, relational modeling, SQL queries, and practical data management. Replace this description with your real project story.",
    technologies: ["MySQL", "SQL", "phpMyAdmin"],
    features: [
      "Relational database design",
      "Primary & foreign keys",
      "CRUD operations",
      "Practical SQL queries",
    ],
    github: "https://github.com/yourusername/campus-service-database",
  },
  {
    id: "project-02",
    title: "Interactive Web Portfolio",
    category: "Web",
    year: "2026",
    description:
      "A dynamic portfolio built with Next.js, TypeScript and Motion with a data-driven architecture.",
    fullDescription:
      "This portfolio itself is a project: component-based UI, reusable data structures, responsive layout, interactive project details and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Responsive design",
      "Data-driven content",
      "Animated sections",
      "Interactive project modal",
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
  {
    id: "project-03",
    title: "Task Management App",
    category: "Web",
    year: "2026",
    description:
      "A clean task workflow concept for organizing work, priorities and completion states.",
    fullDescription:
      "Replace this card with one of your actual projects. The structure is already ready for screenshots, live demos and GitHub links.",
    technologies: ["React", "JavaScript", "CSS"],
    features: ["Create tasks", "Status tracking", "Priority filters", "Responsive UI"],
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: "project-04",
    title: "C# Console Management System",
    category: "C#",
    year: "2026",
    description:
      "A C# project for practicing object-oriented programming, collections and application logic.",
    fullDescription:
      "Use this project slot for your future C# / .NET work. It is intentionally included so the portfolio grows with your career direction.",
    technologies: ["C#", ".NET", "OOP"],
    features: ["OOP concepts", "Input validation", "Business logic", "Structured code"],
    github: "https://github.com/yourusername/csharp-management",
  },
];

export const education: TimelineItem[] = [
  {
    year: "2024 → Present",
    title: "Bachelor’s in Information Technology",
    place: "University / College Name",
    description:
      "Add your university, department, expected graduation date, and the most relevant subjects you study.",
  },
  {
    year: "2026",
    title: "Database & Web Development Focus",
    place: "Academic Projects",
    description:
      "Worked with database design, SQL, web development concepts, and practical software projects.",
  },
  {
    year: "2026",
    title: "C# & .NET Learning Path",
    place: "Self Learning",
    description:
      "Building backend and full-stack foundations with C#, .NET and modern web development.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Certificate Name",
    issuer: "Platform / Institution",
    date: "2026",
  },
  {
    title: "Another Certificate",
    issuer: "Platform / Institution",
    date: "2026",
  },
  {
    title: "Add Your Next Certificate",
    issuer: "Platform / Institution",
    date: "2026",
  },
];

export const blogPosts = [
  {
    tag: "LEARNING",
    title: "What I’m learning as an IT student",
    excerpt:
      "Notes about web development, databases, programming and the path from university projects to real-world software.",
    date: "Oct 2026",
  },
  {
    tag: "DATABASE",
    title: "How I approach database projects",
    excerpt:
      "A simple way to turn a real establishment or workflow into tables, relationships and useful queries.",
    date: "Oct 2026",
  },
  {
    tag: "WEB",
    title: "Why I like building interactive interfaces",
    excerpt:
      "Small details like motion, spacing and responsiveness can make a project feel much more professional.",
    date: "Oct 2026",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
