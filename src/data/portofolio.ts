export const profile = {
  name: "Bargana",
  logoLetter: "B",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "What I Can Do", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
];

export const hero = {
  marqueeText: "BARGANA KUKUH",
  photo: "/barx.png",
  photoAlt: "Foto Bargana Kukuh Raditya",
};

export const contact = {
  eyebrow: "Get in touch",
  heading: ["Let's", "Work", "Together"],
  tagline: "Looking for the next problem worth solving.",
  description:
    "I'm open to opportunities where I can contribute to backend development, RESTful API design, and database engineering with Go and MongoDB.",
  resume: {
    label: "Download Resume",
    href: "/CV-ATS-BarganaKukuhRaditya.pdf",
  },
  items: [
    {
      type: "email",
      label: "Email",
      value: "barganakukuh@gmail.com",
      href: "mailto:barganakukuh@gmail.com",
      external: false,
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/barganakukuhraditya",
      href: "https://github.com/barganakukuhraditya",
      external: true,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/bargana-kukuh-raditya",
      href: "https://linkedin.com/in/bargana-kukuh-raditya/",
      external: true,
    },
  ],
} as const;

export const capabilities = {
  eyebrow: "My capabilities",
  heading: "What I Can Do",
  description:
    "I combine backend engineering, database design, and API development skills to build reliable, efficient, and maintainable systems for web and mobile applications.",
  techGroups: [
    // grup kiri (kartu 01)
    ["html", "css", "flutter", "dart", "go", "php", "mysql", "mongodb", "python", "postman"],
    // grup kanan (kartu 02)
    ["git", "figma", "notion", "trello", "google", "canva", "capcut"],
  ],
  cards: [
    {
      number: "01",
      category: "Back End & API Development",
      icon: "server",
      description:
        "Building backend services and RESTful APIs with Go, from authentication and secure CRUD operations to deployment in a production environment, with a focus on reliability and maintainability.",
      tags: [
        "Go",
        "Fiber",
        "Gorm",
        "RESTful API",
        "JWT Authentication",
        "Heroku Deployment",
        "Postman",
      ],
    },
    {
      number: "02",
      category: "Digital Operations",
      icon: "workflow",
      description:
        "Supporting teams with organized data, documentation, research, and digital workflows while helping keep day-to-day operations smooth and efficient.",
      tags: [
        "Data Organization",
        "Documentation",
        "Research",
        "Digital Workflow",
        "Task Management",
        "Google Workspace",
        "Content Design",
      ],
    },
  ],
} as const;

export const about = {
  eyebrow: "About me",
  heading: "Back End Developer. Problem Solver.",
  name: "Bargana Kukuh Raditya",
  photo: "/barx.png",
  stats: [
    { label: "Projects", value: "2" },
    { label: "GPA", value: "3,65" },
    { label: "Graduating", value: "2026" },
  ],
  bio: [
    "I'm an Applied Informatics Engineering student at Universitas Logistik dan Bisnis Internasional, focused on back end development with Go and MongoDB. I enjoy designing databases, building RESTful APIs, and implementing authentication for web and mobile applications.",
    "Through my internship at PT Pos Indonesia and project-based work, I've built backend systems that run in production and integrate with Flutter apps. My research on delivery delay prediction was also published in JITK (SINTA 2).",
  ],
  currently: [
    { icon: "code", title: "Building", text: "RESTful APIs & backend systems" },
    { icon: "flask", title: "Exploring", text: "Go ecosystem & NoSQL design" },
    { icon: "rocket", title: "Learning", text: "Scalable backend architecture" },
  ],
  traits: ["Problem Solver", "Fast Learner", "Team Player", "Disciplined"],
} as const;