import certificate1 from "../../../../assets/images/certificates/certificate-1.jpg";
import certificate2 from "../../../../assets/images/certificates/certificate-2.jpg";
import certificate3 from "../../../../assets/images/certificates/certificate-3.jpg";
import certificate4 from "../../../../assets/images/certificates/certificate-4.jpg";
import certificate5 from "../../../../assets/images/certificates/certificate-5.jpg";
import certificate6 from "../../../../assets/images/certificates/certificate-6.jpg";

export interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "React JS : Uygulamalı ReactJS -Redux Eğitimi",
    organization: "Udemy",
    date: "2025",
    image: certificate1,
  },
  {
    id: 2,
    title: "WebWeld: JavaScript Front-End Bootcamp",
    organization: "techcareer.net",
    date: "2024",
    image: certificate2,
  },
  {
    id: 3,
    title: "Python Django ile Web Uygulama Geliştirme",
    organization: "BTK Akademi",
    date: "2024",
    image: certificate3,
  },
  {
    id: 4,
    title: "Django ile Web Geliştirme",
    organization: "BTK Akademi",
    date: "2024",
    image: certificate4,
  },
  {
    id: 5,
    title: "Front-End Web Geliştirme Atölyesi",
    organization: "BTK Akademi",
    date: "2023",
    image: certificate5,
  },
  {
    id: 6,
    title: "Yapay Zeka Uzmanlığı Eğitimi",
    organization: "Fatih Sultan Mehmet Üniversitesi",
    date: "2023",
    image: certificate6,
  },
];
