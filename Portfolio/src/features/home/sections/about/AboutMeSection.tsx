import bgAbout from "../../../../assets/images/background/bgAbout.jpg";
import { Container } from "../../../../shared/components/container/Container";
import TechStack from "../../components/about/TechStack";
import icons from "../../data/about/iconsData";

const AboutMeSection: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={bgAbout}
          alt="Özel Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi"
          className="h-[40vh] lg:h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative mt-2 lg:-mt-32 flex justify-center">
        <div className="w-full max-w-sm md:max-w-xl lg:max-w-3xl rounded-sm bg-white p-8 lg:p-10 shadow-xl shadow-gray-500">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 my-2 md:my-3 lg:my-4 text-center">
            Hakkımda
          </h2>

          <p className="mb-8 lg:mb-10 text-base lg:text-lg leading-relaxed text-gray-600">
            Mekatronik Mühendisliği mezunu olup teknoloji ve yazılım geliştirme
            alanlarına büyük ilgi duyan bir geliştiriciyim. Akademik eğitimim
            boyunca otomasyon sistemleri, mühendislik temelleri ve analitik
            problem çözme konularında güçlü bir altyapı edindim. Zamanla bu
            teknik altyapımı yazılım geliştirme alanında ilerleterek modern web
            teknolojileri üzerine yoğunlaştım.
            <br />
            <br />
            Mühendislik eğitimimin yanı sıra üretim sektöründe aktif olarak
            çalışarak özellikle endüstriyel üretim süreçleri ve kaynak robotları
            üzerinde pratik deneyim kazandım. Bu deneyim, gerçek dünya
            problemlerini analiz etme, süreçleri iyileştirme ve verimlilik
            odaklı çözümler üretme konusunda bana önemli bir bakış açısı
            kazandırdı.
            <br />
            <br />
            Yazılım geliştirme alanında HTML, CSS, JavaScript ve React gibi
            modern web teknolojileri üzerinde kendimi geliştirmeye devam
            ediyorum. Temiz kod yazımı, kullanıcı dostu arayüzler tasarlama ve
            sürdürülebilir yazılım çözümleri üretme konularına önem veriyorum.
            <br />
            <br />
            Hedefim, web teknolojileri alanında kendimi sürekli geliştirerek
            modern, ölçeklenebilir ve kullanıcı odaklı uygulamalar geliştiren
            bir yazılım geliştirici olmaktır. Aynı zamanda teknik problem çözme
            becerilerimi kullanarak gerçek dünyadaki ihtiyaçlara yönelik dijital
            çözümler üretmeyi amaçlıyorum.
          </p>
        </div>
      </div>
      <Container>
        <div className="py-2 md:py-5 lg:py-8">
          <TechStack icons={icons} />
        </div>
      </Container>
    </section>
  );
};

export default AboutMeSection;
