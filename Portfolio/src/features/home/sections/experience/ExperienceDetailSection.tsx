import { Container } from "../../../../shared/components/container/Container";
import ExperienceDetailCard from "../../components/experience/ExperienceDetailCard";
import { experienceCards } from "../../data/experience/experienceData";
import bgExperience from "../../../../assets/images/background/bgExperience.jpg";

const ExperienceDetailSection: React.FC = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <img
          src={bgExperience}
          alt="experience background"
          className="h-[40vh] lg:h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <Container>
        <section className="flex flex-col items-center justify-center w-full">
          <div className="my-6 md:my-8 lg:my-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 my-4 text-center">
              Profesyonel Deneyimler
            </h2>
            <p className="text-center text-gray-900 md:text-lg lg:text-xl mb-8">
              Aşağıda tüm deneyimlerim ve kazandığım tecrübeler detaylı olarak
              listelenmiştir.
            </p>

            <div className="grid grid-cols-1 lg:max-w-5xl gap-6">
              {experienceCards.map((card, index) => (
                <ExperienceDetailCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ExperienceDetailSection;
