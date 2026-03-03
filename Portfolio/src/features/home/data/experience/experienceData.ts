import cardIcon1 from "../../../../assets/images/experience/card-1.png";
import cardIcon2 from "../../../../assets/images/experience/card-2.png";

export interface ExperienceCard {
  id: number;
  slug: string
  title: string;
  company: string;
  location: string;
  description: string;
  icon: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    slug: "project-manager",
    title: "Proje Yöneticisi | Türk Telekom",
    company: "Kod-A Bilişim",
    location: "İzmir/Türkiye",
    description: `Türk Telekom şirketi evrakları fiziksel ve dijital doküman arşivi süreç yönetimi, iş planlaması ve operasyon koordinasyonunu gerçekleştirdim.
      Çalışan performans analizlerini oluşturarak ekip verimliliğini artırmaya yönelik veri odaklı değerlendirmeler yaptım.
      MSSQL üzerinde sorgular yazarak süreç verilerini analiz ettim, düzenli raporlar ve performans çıktılarını yönetime sundum.
      Azure DevOps üzerinden proje yönetimi ve süreç takibi yaparak görev dağılımı, ve ilerleme analizlerini yönettim.`,
    icon: cardIcon1,
  },
  {
    id: 2,
    slug: "front-end-developer",
    title: "Front-End Developer",
    company: "Kod-A Bilişim",
    location: " İstanbul/Türkiye",
    description: `HTML, CSS ve JavaScript kullanarak kullanıcı dostu ve erişilebilir web ara yüzleri geliştirerek çeşitli projelere liderlik ettim ve bunları uyguladım.
    React.js gibi modern JavaScript çerçevelerini kullanarak dinamik ve duyarlı web uygulamaları geliştirdim.
    Ara yüzleri optimize etmek için UI/UX tasarım ilkelerini uygulayarak kullanıcı deneyimini geliştirdim..
    Sorunsuz tasarımlar oluşturmak için Figma gibi araçları kullanarak tasarım ekibiyle işbirliği yaptım.
    Web uygulamalarının performansını iyileştirmek için çeşitli optimizasyon teknikleri uyguladım ve performans izleme araçlarından yararlandım.
    Proje yönetim araçlarını kullanarak ekip içinde etkili iletişimi sağladım ve görevleri zamanında tamamladım.
    Yeni teknolojiler ve trendlerle güncel kalarak sürekli öğrenmeye ve kişisel gelişime öncelik verdim.`,
    icon: cardIcon2,
  },
];
