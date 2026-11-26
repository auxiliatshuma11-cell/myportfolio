export type NavLink = { label: string; id: string };
export type Stat = { value: string; label: string };
export type Skill = { name: string; level: number };
export type Role = { title: string; steps: string[] };
export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
  href: string;
  secondaryLink?: { label: string; href: string };
};
export type Certification = {
  title: string;
  issuer?: string;
  date?: string;
  href: string;
};

export const contactEmail = "auxiliatshuma11@gmail.com";

export const navLinks: NavLink[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export const aboutParagraphs: string[] = [
  "I am a passionate junior software engineer and designer focused on creating functional, visually appealing digital solutions. I also have some basic knowledge of digital marketing, while my professional focus remains software engineering and design.",
  "I enjoy building responsive websites, designing intuitive user interfaces, and solving real-world problems through technology.",
  "With a strong interest in web development and user experience design, I continuously seek opportunities to learn, grow, and improve my skills.",
  "I am committed to delivering high-quality work that combines creativity with technical expertise.",
  "My goal is to develop innovative and user-friendly digital experiences that make a positive impact.",
];

export const stats: Stat[] = [
  { value: "0+", label: "Years of experience" },
  { value: "18", label: "Projects completed" },
  { value: "0+", label: "Happy clients" },
  { value: "3", label: "Skill areas" },
];

// PLACEHOLDER: every level is 80. Replace with your real percentage (0-100).
export const skills: Skill[] = [
  { name: "HTML", level: 82 },
  { name: "CSS", level: 84 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 78 },
  { name: "React", level: 83 },
  { name: "Next.js", level: 81 },
  { name: "Tailwind CSS", level: 79 },
  { name: "Git", level: 76 },
  { name: "Figma", level: 85 },
];

export const roles: Role[] = [
  {
    title: "Software Engineer",
    steps: ["Plan", "Design", "Develop", "Test", "Deploy", "Maintain"],
  },
  {
    title: "Designer",
    steps: ["Research", "Ideate", "Prototype", "Test", "Deliver"],
  },
  {
    title: "Marketing Specialist",
    steps: [
      "Research audience",
      "Shape messaging",
      "Build campaigns",
      "Analyze engagement",
      "Improve conversion",
    ],
  },
];

// Match each image to the right project, then edit the title and description.
export const projects: Project[] = [
  {
    title: "Figma design project",
    description: "A responsive interface concept designed in Figma with a clean layout and consistent visual style.",
    image: "/IMG/Screenshot%202026-11-17%20131310.png",
    imageAlt: "Screenshot of my Figma design project",
    href: "https://www.figma.com/design/Z7okGzoWyU2AMXLiltyoMW/Untitled?node-id=0-1&p=f&t=bg9795Eht1DR7nDv-0",
  },
  {
    title: "Marketing project",
    description: "A digital marketing design created in Canva to communicate a clear message and strong brand identity.",
    image: "/IMG/Screenshot%202026-11-17%20132433.png",
    imageAlt: "Screenshot of my marketing project",
    href: "https://www.canva.com/design/DAHTfCxdVuY/C7rDJ_HcNNggV-UGTXYQvw/edit",
  },
  {
    title: "GitHub projects",
    description: "A collection of coding projects that demonstrate my web development work and GitHub portfolio.",
    image: "/IMG/Screenshot%202026-11-17%20133442.png",
    imageAlt: "Screenshot of my GitHub projects",
    gallery: [
      {
        src: "/IMG/Screenshot%202026-11-17%20133442.png",
        alt: "First screenshot of my GitHub projects",
      },
      {
        src: "/IMG/Screenshot%202026-11-17%20140808.png",
        alt: "Second screenshot of my GitHub projects",
      },
    ],
    href: "https://github.com/auxiliatshuma11-cell",
    secondaryLink: {
      label: "View on Vercel",
      href: "https://nyamatusi-website-pink.vercel.app/",
    },
  },
];

export const certifications: Certification[] = [
  {
    title: "UX Certificate",
    href: "/ux%20certificate.pdf",
  },
  {
    title: "Product Designer Certificate",
    href: "/Product%20Design%20certificate.pdf",
  },
  {
    title: "UX Design Foundations Certificate",
    href: "/UX%20Design%20Foundations%20certificate.pdf",
  },
  {
    title: "Introduction to Software Engineering",
    href: "/Introduction%20to%20software%20engineering.pdf",
  },
  {
    title: "Accessibility Foundations Certificate",
    href: "/accessibility%20foundations%20certificate.pdf",
  },
];