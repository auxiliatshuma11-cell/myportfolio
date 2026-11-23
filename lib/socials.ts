import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiVercel } from "react-icons/si";

export type Social = { name: string; href: string; Icon: IconType };

export const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/auxiliatshuma11-cell",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/auxilia-tshuma-848724406/",
    Icon: FaLinkedin,
  },
  { name: "Vercel", href: "https://vercel.com/auxilia", Icon: SiVercel },
  { name: "WhatsApp", href: "https://wa.me/263782526975", Icon: FaWhatsapp },
];