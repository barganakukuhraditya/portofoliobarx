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