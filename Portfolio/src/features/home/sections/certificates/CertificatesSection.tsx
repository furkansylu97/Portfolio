import { Container } from "../../../../shared/components/container/Container";
import CertificateCard from "../../components/certificates/CertificateCard";
import { certificatesData } from "../../data/certificates/certificatesData";
import bgCertificates from "../../../../assets/images/background/bgCertificates.jpg"

const CertificatesSection = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <img
          src={bgCertificates}
          alt="experience background"
          className="h-[40vh] lg:h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <section className="py-8 md:py-12 lg:py-20">
        <Container>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="text-center mb-6 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 my-4 text-center">
                Sertifikalar
              </h2>
              <p className="text-center text-gray-900 md:text-lg lg:text-xl mb-2 md:mb-4 lg:mb-8">
                Aldığım mesleki eğitimler ve sertifikalar
              </p>
            </div>

            <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {certificatesData.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CertificatesSection;
