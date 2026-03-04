import ContactInfo from "../../components/contact/ContactInfo";
import ContactAnimation from "../../components/contact/ContactAnimation";
import { Container } from "../../../../shared/components/container/Container";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const ContactSection = () => {
  return (
    <Container>
      <section className="w-full max-lg:mb-6 lg:mb-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 my-2 md:my-4 lg:my-6">
            Birlikte Çalışalım
          </h2>

          <p className="flex text-base md:text-lg lg:text-xl max-lg:text-center lg:max-w-2xl leading-relaxed">
            Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olma
            fırsatları hakkında görüşmeye her zaman açığım. İletişime geçmekten
            çekinmeyin
          </p>
          <p className="flex text-base md:text-lg lg:text-xl items-center justify-center gap-2 my-3">
            <VscWorkspaceTrusted className="md:text-xl lg:text-2xl text-green-500" />{" "}
            Genellikle 24 saat içinde yanıt veririm.
          </p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:p-8">
          <div className="order-2 lg:order-1 my-5 lg:my-0">

            <ContactInfo />
          </div>
          <div className="order-1 lg:order-2">
            <ContactAnimation />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ContactSection;
