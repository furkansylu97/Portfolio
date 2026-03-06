import { Container } from "../../../../shared/components/container/Container";
import { contactData } from "../../data/contact/contactData";
import bgContact from "../../../../assets/images/background/bgContact.jpg";
import ContactForm from "../../components/contact/ContactForm";

const ContactContentSection = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <img
          src={bgContact}
          alt="contact background"
          className="h-[40vh] lg:h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <section className="py-10 md:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col w-full">
            <div className="text-center mb-10 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 mb-4">
                İletişim
              </h2>

              <p className="text-gray-700 md:text-lg lg:text-xl max-w-2xl mx-auto">
                Projeler, iş birlikleri veya herhangi bir soru için benimle
                iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="flex flex-col justify-center border rounded-xl shadow-sm bg-[#101828]">
                <div className="flex flex-col gap-4 lg:gap-6 py-8 lg:py-0 px-4 md:px-6 lg:px-8">
                  {contactData.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 md:gap-3 lg:gap-4 p-3 border bg-cyan-500 rounded-xl"
                      >
                        <div className="text-[#101828] p-3 rounded-lg text-xl">
                          <Icon />
                        </div>

                        <div>
                          <p className="font-semibold text-[#101828]">
                            {item.title}
                          </p>

                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              className="text-gray-800 hover:text-[#101828] motion-safe:hover:font-semibold transition"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-800">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactContentSection;
