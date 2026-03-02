import Bootstrap from "../../../../assets/images/bootstrap.png";
import Css from "../../../../assets/images/css-3.png";
import Django from "../../../../assets/images/django.png";
import Figma from "../../../../assets/images/figma.png";
import Git from "../../../../assets/images/git.png";
import Github from "../../../../assets/images/github.png";
import Html from "../../../../assets/images/html-5.png";
import Javascript from "../../../../assets/images/javascript.png";
import MaterialUi from "../../../../assets/images/material-ui.png";
import MongoDB from "../../../../assets/images/mongodb.png";
import Python from "../../../../assets/images/python.png";
import Reactlogo from "../../../../assets/images/react.png";
import Scss from "../../../../assets/images/scss.png";
import Tailwind from "../../../../assets/images/tailwind.png";
import Typescript from "../../../../assets/images/typescript.png";
import AdobePhotoshop from "../../../../assets/images/adobe-photoshop.png";

export interface TechIcon {
  src: string;
  alt: string;
  name: string;
}

const icons: TechIcon[] = [
  { src: Javascript, alt: "Javascript", name: "JAVASCRIPT" },
  { src: Typescript, alt: "Typescript", name: "TYPESCRIPT" },
  { src: Python, alt: "Python", name: "PYTHON" },
  { src: Html, alt: "Html", name: "HTML-5" },
  { src: Css, alt: "Css", name: "CSS" },
  { src: Reactlogo, alt: "React", name: "REACT" },
  { src: Django, alt: "Django", name: "DJANGO" },
  { src: MongoDB, alt: "MongoDB", name: "MONGODB" },
  { src: Git, alt: "Git", name: "GIT" },
  { src: Github, alt: "Github", name: "GITHUB" },
  { src: MaterialUi, alt: "Material UI", name: "MATERIAL UI" },
  { src: Tailwind, alt: "Tailwind", name: "TAILWIND" },
  { src: Bootstrap, alt: "Bootstrap", name: "BOOTSTRAP" },
  { src: Scss, alt: "SCSS", name: "SCSS" },
  { src: Figma, alt: "Figma", name: "FIGMA" },
  { src: AdobePhotoshop, alt: "Adobe Photoshop", name: "PHOTOSHOP" },
];

export default icons;
