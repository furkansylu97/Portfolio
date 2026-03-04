import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
} from "react-icons/fa6";

export interface ContactItem {
  id: number;
  icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
}

export const contactData: ContactItem[] = [
  {
    id: 1,
    icon: FaEnvelope,
    title: "Email",
    value: "furkansylu97@gmail.com",
    link: "mailto:furkansylu97@gmail.com",
  },
  {
    id: 2,
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/furkansoylu97",
    link: "https://www.linkedin.com/in/furkansoylu97",
  },
  {
    id: 3,
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/furkansylu97",
    link: "https://github.com/furkansylu97",
  },
  {
    id: 4,
    icon: FaLocationDot,
    title: "Konum",
    value: "Türkiye",
  },
];
