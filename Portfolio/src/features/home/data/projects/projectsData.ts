import projectImage1 from "../../../../assets/images/projects/project-1.jpg";
import projectImage2 from "../../../../assets/images/projects/project-2.jpg";
import projectImage3 from "../../../../assets/images/projects/project-3.jpg";
import projectImage4 from "../../../../assets/images/projects/project-4.jpg";

import reactIcon from "../../../../assets/images/react.png";
import typescriptIcon from "../../../../assets/images/typescript.png";
import tailwindIcon from "../../../../assets/images/tailwind.png";
import figmaIcon from "../../../../assets/images/figma.png";
import javascriptIcon from "../../../../assets/images/javascript.png";
import bootstrapIcon from "../../../../assets/images/bootstrap.png";
import html5Icon from "../../../../assets/images/html-5.png";
import scssIcon from "../../../../assets/images/scss.png";
import css3Icon from "../../../../assets/images/css-3.png";

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl: string;
}

export const projectCards: Project[] = [
  {
    id: 1,
    title: "Özel Fidanlar Rehabilitasyon Merkezi",
    description: `React + TypeScript ile tip güvenli, ölçeklenebilir ve component-based frontend mimarisi geliştirdim.
Tailwind CSS ile utility-first, sürdürülebilir ve tutarlı bir tasarım sistemi oluşturdum.
Headless CMS entegrasyonu yaparak dinamik içerik yönetimi ve API tabanlı veri akışı kurguladım.
Mobile-first responsive yapı ve semantic HTML ile SEO uyumlu teknik altyapı oluşturup performans optimizasyonları gerçekleştirdim.
Lighthouse odaklı hız iyileştirmeleri (bundle optimizasyonu, lazy loading, asset minimizasyonu) uyguladım.
Production deployment sürecini yönettim; sunucu yapılandırması, build optimizasyonu ve yayına alma süreçlerini uçtan uca gerçekleştirdim`,
    image: projectImage1,
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "Figma", icon: figmaIcon },
    ],
    liveUrl: "https://ozelfidanlar.com/",
  },
  {
    id: 2,
    title: "Portfolyo Website",
    description: `React kullanarak ölçeklenebilir ve tamamen bileşen tabanlı bir frontend mimarisi geliştirdim.
    Modern Tailwind Css ve Typescript ile responsive, performans odaklı ve kullanıcı merkezli bir arayüz tasarladım.
    Proje klasör ve dosya yapısını profesyonel yazılım geliştirme standartlarına uygun şekilde kurgulayarak sürdürülebilir ve kolay bakım yapılabilir bir yapı oluşturdum.
    Build ve deployment süreçlerini uçtan uca yöneterek uygulamayı production ortamında Vercel üzerinden yayına aldım.`,
    image: projectImage2,
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "Figma", icon: figmaIcon },
    ],
    liveUrl: "/",
  },
  {
    id: 3,
    title: "TransitFlow Website",
    description: `Web teknolojilerinden yararlanarak, çeşitli cihazlarda sorunsuz bir kullanıcı deneyimi sağlayan modern ve duyarlı bir düzen oluşturdum.
    Web sitesinin etkileşimini geliştirmek ve öne çıkan içeriği etkili bir şekilde sergilemek için Swiper kaydırıcı kitaplığını uyguladım.
    Mobil öncelikli bir yaklaşımla tasarlanan web sitesi, farklı ekran boyutlarına ve yönelimlerine sorunsuz bir şekilde uyum sağladım`,
    image: projectImage3,
    technologies: [
      { name: "Html-5", icon: html5Icon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Css", icon: css3Icon },
      { name: "Scss", icon: scssIcon },
      { name: "Figma", icon: figmaIcon },
    ],
    liveUrl: "/",
  },
  {
    id: 4,
    title: "Flesh Film Websitesi",
    description: `State Management: Uygulama genelinde ölçeklenebilir ve öngörülebilir veri akışı sağlamak amacıyla React ve Redux ile merkezi durum yönetimi implementasyonu gerçekleştirildi.
    API Entegrasyonu: Canlı film verileri, RESTful servis mimarisi üzerinden The Movie Database (TMDB) API kullanılarak dinamik olarak entegre edildi. Asenkron veri akışı ve hata yönetimi optimize edildi.
    Routing & Navigation: React Router ile dinamik ve SPA (Single Page Application) mimarisine uygun istemci taraflı yönlendirme kurgulandı.
    UI / Styling: Duyarlı (responsive) ve modüler tasarım yapısı, SCSS (Sass) ön işlemcisi kullanılarak geliştirildi. BEM metodolojisi ile sürdürülebilir CSS mimarisi sağlandı.
    Component Architecture: Modern React prensiplerine uygun olarak Functional Components ve React Hooks (useState, useEffect, useDispatch, useSelector) kullanıldı.
    Performance Optimization: Bileşen bazlı yeniden render kontrolü ve temiz lifecycle yönetimi ile performans iyileştirmeleri uygulandı.`,
    image: projectImage4,
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Css", icon: css3Icon },
      { name: "Scss", icon: scssIcon },
      { name: "Figma", icon: figmaIcon },
    ],
    liveUrl: "/",
  },
];
