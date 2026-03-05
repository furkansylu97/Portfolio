import cardIcon1 from "../../../../assets/images/experience/card-1.png";
import cardIcon2 from "../../../../assets/images/experience/card-2.png";
import cardIcon3 from "../../../../assets/images/experience/card-3.png";
import cardIcon4 from "../../../../assets/images/experience/card-4.png";

export interface ExperienceCard {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  icon: string;
  isFeatured: boolean;
}

export const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Proje Yöneticisi | Türk Telekom",
    company: "Kod-A Bilişim",
    location: "İzmir/Türkiye",
    description: `Türk Telekom şirketi evrakları fiziksel ve dijital doküman arşivi süreç yönetimi, iş planlaması ve operasyon koordinasyonunu gerçekleştirdim.
    Çalışan performans analizlerini oluşturarak ekip verimliliğini artırmaya yönelik veri odaklı değerlendirmeler yaptım.
    MSSQL üzerinde sorgular yazarak süreç verilerini analiz ettim, düzenli raporlar ve performans çıktılarını yönetime sundum.
    Azure DevOps üzerinden proje yönetimi ve süreç takibi yaparak görev dağılımı, ve ilerleme analizlerini yönettim.`,
    icon: cardIcon1,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Sustable",
    location: "İstanbul/Türkiye",
    description: `HTML, CSS ve JavaScript kullanarak kullanıcı dostu ve erişilebilir web ara yüzleri geliştirerek çeşitli projelere liderlik ettim ve bunları uyguladım.
    React.js gibi modern JavaScript çerçevelerini kullanarak dinamik ve duyarlı web uygulamaları geliştirdim.
    Ara yüzleri optimize etmek için UI/UX tasarım ilkelerini uygulayarak kullanıcı deneyimini geliştirdim..
    Sorunsuz tasarımlar oluşturmak için Figma gibi araçları kullanarak tasarım ekibiyle işbirliği yaptım.
    Web uygulamalarının performansını iyileştirmek için çeşitli optimizasyon teknikleri uyguladım ve performans izleme araçlarından yararlandım.
    Proje yönetim araçlarını kullanarak ekip içinde etkili iletişimi sağladım ve görevleri zamanında tamamladım.
    Yeni teknolojiler ve trendlerle güncel kalarak sürekli öğrenmeye ve kişisel gelişime öncelik verdim.`,
    icon: cardIcon2,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Kaynak Üretim Mühendisi",
    company: "Gençsan Hidrolik",
    location: "İzmir/Türkiye",
    description: `Panasonic Kaynak Robotunun programlanması, optimize edilmesi ve arızalarının bakımı ve onarımı.
    Süreç iyileştirme projelerinde aktif rol alarak verimliliği arttırıcı çözümler sunmak ve hata oranlarını en aza indirmek (%44'ten %61'e verimlilik artışı)
    Güvenlik ve kalite standartlarına uyumu sağlamak için operasyonel talimatlar geliştirme ve güncelleme.
    Ana süreçlerin tutarlı bir şekilde izlenmesini ve iyileştirilmesini sağlayarak kontrol planlarını tasarlanması ve uygulaması.
    Üretim katında 5S ilkelerini uygulayarak işyeri organizasyonunun iyileştirilmesi ve kesinti sürelerinin azaltılmasının sağlanması.
    Süreç verimsizliklerini belirlemek ve ortadan kaldırmak için Kaizen girişimleri konusunda ekiplerle birlikte çalışarak ölçülebilir üretkenlik iyileştirmeleri elde edilmesi.`,
    icon: cardIcon3,
    isFeatured: false,
  },
  {
    id: 4,
    title: "Stajyer Proje Mühendisi",
    company: "Ema-Tech Boyama Sistemleri",
    location: "İzmir/Türkiye",
    description: `Stajyer Ar-Ge ve Elektrik ve Otomasyon Mekatronik Mühendisi olarak çalıştım.
    Ema-tech'in Taşınabilir Araç Boya Kabini'nin tasarım ve geliştirmesinde, tasarım özelliklerine ve güvenlik yönetmeliklerine bağlı kalarak deneyim kazandım.
    Elektrik panosu montajı dahil olmak üzere elektrik otomasyon projelerinde pratik deneyim edindim.
    MCCB'ler, motor güvenlik anahtarları, sigortalar, faz koruma röleleri, zaman röleleri, röleler, kontaktörler ve PLC'ler gibi bileşenlerle çalışarak teknik becerilerimi geliştirdim.`,
    icon: cardIcon4,
    isFeatured: false,
  },
];
