import educationIcon1 from "../../../../assets/images/education/education-1.png";
import educationIcon2 from "../../../../assets/images/education/education-2.png";

export interface EducationCard {
  id: number;
  department: string;
  language: string;
  school: string;
  location: string;
  icon: string;
}

export const educationCards: EducationCard[] = [
  {
    id: 1,
    department: "Mekatronik Mühendisliği",
    language: "(İngilizce)",
    school: "İzmir Katip Çelebi Üniversitesi",
    location: "İzmir/Türkiye",
    icon: educationIcon1,
  },
  {
    id: 2,
    department: "İş Sağlığı ve Güvenliği",
    language: "(Türkçe)",
    school: "Atatrük Üniversitesi",
    location: "Erzurum/Türkiye",
    icon: educationIcon2,
  },
];