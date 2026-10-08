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
  name: "Hussein Aziz Ali",
  role: "Information Technology Student · Web Developer",
  eyebrow: "INFORMATION TECHNOLOGY",
  shortBio:
    "An Information Technology student focused on building practical digital solutions across web development, databases, APIs and software engineering.",
  heroBio:
    "I build practical web experiences and software projects while exploring databases, APIs, cybersecurity, and modern development tools.",
  location: "Karbala, Iraq",
  email: "hussein.albdeiri3@gmail.com",
  phone: "+964 783 784 2856",
  github: "https://github.com/DxRaVen7",
  linkedin: "https://www.linkedin.com/in/raven-1aa066442/",
  instagram: "https://www.instagram.com/qwaz.7/",
  cvUrl: "#",
 image: "/images/profile (3).jpg",
  available: true,
  rotatingRoles: [
    "Web Development",
    "Database Systems",
    "C# & .NET",
    "Cybersecurity",
  ],
};

export const stats = [
  { value: "3rd", label: "Year IT Student" },
  { value: "04+", label: "Technical Projects" },
  { value: "08+", label: "Core Technologies" },
  { value: "04", label: "Professional Certificates" },
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
    { name: "PHP", level: 70, icon: "PHP" },
    { name: "Laravel", level: 70, icon: "L" },
    { name: "REST APIs", level: 65, icon: "API" },
  ],

  Database: [
    { name: "MySQL", level: 80, icon: "SQL" },
    { name: "SQL", level: 85, icon: "SQL" },
    { name: "Database Design", level: 78, icon: "DB" },
    { name: "phpMyAdmin", level: 75, icon: "PM" },
  ],
};
export const projects: Project[] = [
  {
    id: "project-01",
    title: "Integrated Blood Bank System",
    category: "Software & Database",
    year: "2026",
    description:
      "An integrated blood bank system designed to manage donor records, blood data, and operational workflows.",
    fullDescription:
      "An academic software project focused on building an integrated blood bank management system. The project combines database design, relational data management, RESTful API development, and practical troubleshooting to support structured and reliable handling of donor and blood bank information.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "SQL",
      "REST APIs",
    ],
    features: [
      "Donor records management",
      "Relational database design",
      "Multi-table relationships",
      "RESTful API integration",
      "Practical system troubleshooting",
    ],
  },

  {
    id: "project-02",
    title: "Interactive Web Portfolio",
    category: "Web Development",
    year: "2026",
    description:
      "A personal portfolio built with modern web technologies to showcase projects, technical skills, education, and achievements.",
    fullDescription:
      "A responsive personal portfolio developed with Next.js and TypeScript. The project uses a data-driven structure to organize profile information, technical skills, projects, education, certificates, and contact links while providing an interactive and modern user experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Motion",
    ],
    features: [
      "Responsive design",
      "Data-driven content",
      "Interactive sections",
      "Animated user interface",
      "Project showcase",
    ],
    github: "https://github.com/DxRaVen7/dxraven-portfolio",
    demo: "#",
  },

  {
    id: "project-03",
    title: "Security Research & Vulnerability Analysis",
    category: "Cybersecurity",
    year: "2026",
    description:
      "Independent security research focused on identifying potential risks in local systems and analyzing unauthorized access scenarios.",
    fullDescription:
      "An independent security research project involving analysis of local systems and investigation of security weaknesses. The research examined NFC data retention in local ATM environments and highlighted potential risks related to unauthorized access and sensitive data exposure.",
    technologies: [
      "Cybersecurity",
      "Security Research",
      "NFC",
      "ATM Systems",
    ],
    features: [
      "Security analysis",
      "Vulnerability identification",
      "Risk assessment",
      "Unauthorized access analysis",
      "Independent technical research",
    ],
  },
];
export const education: TimelineItem[] = [
  {
    year: "2024 → Present",
    title: "Bachelor's in Information Technology",
    place: "Warith Al-Anbiyaa University — Karbala",
    description:
      "Third-year Information Technology student with a focus on software development, databases, web technologies, and cybersecurity.",
  },
];
export const certificates: Certificate[] = [
  {
    title: "Web Application Development",
    issuer: "Warith Al-Anbiyaa University",
    date: "July 12, 2025",
  },
  {
    title: "Linux Operating System",
    issuer: "Warith Al-Anbiyaa University",
    date: "July 4, 2026",
  },
  {
    title: "Data Science",
    issuer: "Warith Al-Anbiyaa University",
    date: "July 11, 2026",
  },
  {
    title: "Advanced Machine Learning",
    issuer: "Warith Al-Anbiyaa University",
    date: "July 20, 2026",
  },
];
export const blogPosts = [
  {
    tag: "LEARNING",
    title: "My Journey as an Information Technology Student",
    excerpt:
      "Exploring software development, databases, web technologies, and cybersecurity while building practical projects and expanding my technical skills.",
    date: "2026",
  },
  {
    tag: "DATABASE",
    title: "Building Better Database Projects",
    excerpt:
      "A practical look at how database design, SQL, relationships, and structured data can turn a real-world idea into a working system.",
    date: "2026",
  },
  {
    tag: "CYBERSECURITY",
    title: "Learning Through Security Research",
    excerpt:
      "How independent security research helps me understand systems more deeply and think about software from a security perspective.",
    date: "2026",
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
