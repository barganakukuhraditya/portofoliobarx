export const profile = {
  name: "Bargana",
  logoLetter: "B",
  logo: "/logo-porto.png",
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
  photo: "/profile-barx.png",
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
  photo: "/profile-barx.png",
  stats: [
    { label: "Projects", value: "6" },
    { label: "GPA", value: "3,65" },
    { label: "Graduating", value: "2026" },
  ],
  bio: [
    "I'm an Applied Informatics Engineering student at Universitas Logistik dan Bisnis Internasional, focused on back end development with Go and MongoDB. I enjoy designing databases, building RESTful APIs, and implementing authentication for web and mobile applications. Through my internship at PT Pos Indonesia and project-based work, I've built backend systems that run in production, and my research on delivery delay prediction was published in JITK (SINTA 2). Beyond back end development, I'm also interested in Software QA and Multimedia, where I enjoy making sure products work reliably and look great.",
  ],
  currently: [
    { icon: "code", title: "Building", text: "RESTful APIs & backend systems" },
    { icon: "flask", title: "Exploring", text: "Go ecosystem & NoSQL design" },
    { icon: "rocket", title: "Learning", text: "Scalable backend architecture" },
  ],
  traits: ["Problem Solver", "Fast Learner", "Team Player", "Disciplined"],
} as const;

export type ExperienceItem = {
  type: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  images?: string[];
  links?: { label: string; href: string }[];
};

export type ExperienceSection = {
  eyebrow: string;
  heading: string;
  description: string;
  items: ExperienceItem[];
};

export const experience: ExperienceSection = {
  eyebrow: "Growth & Experience",
  heading: "Experience",
  description:
    "A look at the professional experience that shaped my back end engineering skills.",
  items: [
    {
      type: "Internship",
      title: "Junior Back End Developer",
      organization: "Corporate Communication Division - PT Pos Indonesia",
      period: "October 2025 - January 2026",
      description:
        "Engineered the backend of a Mailroom Information System using Go and MongoDB, implementing JWT authentication and secure CRUD operations. Designed a scalable NoSQL document schema with BSON/JSON structs to optimize data handling and keep data synchronized. Developed and deployed RESTful APIs to Heroku, establishing a production environment integrated with a Flutter mobile application.",
      images: [
        "/experience/pos-indonesia-2.jpg",
        "/experience/pos-indonesia-1.jpg",
        "/experience/pos-indonesia-3.jpg",
      ],
      links: [
        // { label: "Certificate of Completion", href: "https://..." },
      ],
    },
  ],
};

export const organization: ExperienceSection = {
  eyebrow: "Leadership & Community",
  heading: "Organization",
  description:
    "Organizational experience that built my teamwork, communication, and leadership skills.",
  items: [
    {
      type: "Organization",
      title: "Development Team",
      organization: "Himpunan Mahasiswa Teknik Informatika (HIMATIF) - ULBI",
      period: "2023 - 2025",
      description:
        "Developer Team member in the Academic and Scientific Division, building software for academic programs and running technical workshops and study groups on software engineering for Informatics Engineering students.",
      images: [
        "/organization/himatif-1.jpg",
        "/organization/himatif-2.jpg",
        "/organization/himatif-3.jpg",
      ],
      links: [
        { label: "Certificate of Completion",
          href: "/sertifikasi/himatif.png"
        }
      ],
    },
  ],
};

export type PublicationItem = {
  title: string;
  venue: string;
  year: string;
  indexing?: string;
  authors?: string;
  summary?: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const publications: {
  eyebrow: string;
  heading: string;
  description: string;
  items: PublicationItem[];
} = {
  eyebrow: "Research & Publications",
  heading: "Publications",
  description:
    "Research work that combines machine learning and logistics to solve real operational problems.",
  items: [
    {
      title:
        "PSO-Optimized XGBoost for Mail Delivery Delay Prediction and Logistics SLA Compliance",
      venue: "JITK (Jurnal Ilmu Pengetahuan dan Teknologi Komputer)",
      year: "2026",
      indexing: "SINTA 2",
      authors: "Syafrial Fachri Pane, Bargana Kukuh Raditya",
      summary: "A PSO-optimized XGBoost framework for predicting postal letter delivery delays and SLA violations, reaching 0.6605 accuracy and 0.6059 F1-score. Posting day was the strongest delay driver at 78.6%.",
      tags: [
        "XGBoost",
        "Particle Swarm Optimization",
        "Machine Learning",
        "Delay Prediction",
        "Logistics SLA",
      ],
      links: [
        { label: "Read Paper", href: "https://doi.org/10.33480/jitk.v12i1.8282" },
      ],
    },
    {
      title: "Tutorial Membuat Aplikasi Pencatatan Keuangan UMKM Berbasis Web",
      venue: "Penerbit Buku Pedia",
      year: "2023",
      indexing: "Book",
      authors:
        "Ghaida Fasya Yuthika Afifah, Bargana Kukuh Raditya, Roni Habibi",
      summary:
        "A step-by-step tutorial book on building a financial recording application for MSMEs, covering the back end development process through to a finished application, developed with PHP and a MySQL database.",
      tags: ["PHP", "MySQL", "Back End", "Web Application", "MSME Finance"],
      links: [
        { label: "View on Google Scholar", href: "https://books.google.co.id/books?hl=en&lr=&id=1GvWEAAAQBAJ&oi=fnd&pg=PP1&dq=info:QZGq4R5KiiQJ:scholar.google.com&ots=aQZDVB0r1a&sig=NYENTLQAyy0GyjqMswuOW5thGD0&redir_esc=y#v=onepage&q&f=false" },
      ],
    },
  ],
};

export type ProjectItem = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  href?: string;
};

export const projects: {
  eyebrow: string;
  heading: string;
  description: string;
  moreLink: { label: string; href: string };
  items: ProjectItem[];
} = {
  eyebrow: "Selected work",
  heading: "Work Gallery",
  description:
    "A collection of back end systems, APIs, and digital projects I've built.",
  moreLink: {
    label: "View More Projects",
    href: "https://github.com/username-kamu",
  },
  items: [
    {
      title: "Mailroom Information System",
      description:
        "Back end of a mailroom information system built during my internship at PT Pos Indonesia, featuring JWT authentication, secure CRUD operations, and RESTful APIs deployed to Heroku for a Flutter mobile app.",
      image: "/projects/mailingroom.png",
      tags: ["Go", "MongoDB", "JWT", "RESTful API", "Heroku", "Flutter"],
      // href: "https://github.com/username-kamu/repo",
    },
    {
      title: "Elfume Android Application",
      description:
        "A mobile perfume e-commerce application with a Flutter cross-platform front end, powered by a high-performance Go Fiber back end and a MongoDB database.",
      image: "/projects/elfume.png",
      tags: ["Go Fiber", "MongoDB", "Flutter", "Dart", "E-Commerce"],
      // href: "https://github.com/username-kamu/repo",
    },
    {
      title: "Idbiz Graphic Design Service Platform",
      description:
        "A service marketplace platform for graphic design, built with the JSCroot JavaScript framework on the front end, Go Fiber for the back end API, and MongoDB for persistent data management.",
      image: "/projects/idbiz.png",
      tags: ["Go Fiber", "MongoDB", "JSCroot", "REST API", "Marketplace"],
      href: "https://id.biz.id/",
    },
    {
      title: "Parfum.id",
      description:
        "A perfume website for browsing and shopping fragrance products online. Built with Go for the back end API, JavaScript for the front end, and MongoDB for data management.",
      image: "/projects/parfumid.png",
      tags: ["Go Fiber", "MongoDB", "JavaScript", "REST API", "Marketplace"],
      href: "https://idparfum.github.io/",
    },
    {
      title: "LearnOn.id",
      description:
        "A learning platform that brings together online and offline training courses along with a book catalog. Built with Go Fiber for the back end API, MongoDB for data management, and JavaScript for the front end.",
      image: "/projects/learnonid.png",
      tags: ["Go Fiber", "MongoDB", "JavaScript", "REST API", "Learning Platform"],
      href: "https://learnonid.github.io/",
    },
  ],
};