import type { IconType } from "react-icons";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

type Tech = { name: string; Icon: IconType; color: string };

const tech: Tech[] = [
  { name: "HTML", Icon: FaHtml5, color: "#e44d26" },
  { name: "CSS", Icon: FaCss3Alt, color: "#2d9cdb" },
  { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git", Icon: FaGitAlt, color: "#f05032" },
];

export default function TechIcons() {
  return (
    <ul className="flex flex-wrap gap-5">
      {tech.map(({ name, Icon, color }) => (
        <li key={name} title={name}>
          <Icon aria-hidden="true" size={30} color={color} />
          <span className="sr-only">{name}</span>
        </li>
      ))}
    </ul>
  );
}