import { Container } from "../../../../shared/components/container/Container";
import ExperienceCard from "../../components/experience/ExperienceCard";
import { experienceCards } from "../../data/experience/experienceData";

const ExperienceSection = () => {
  return (
    <Container>
      <section>
        <div className="lg:my-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 my-2 md:my-4 lg:my-6 text-center">
            Profesyonel Deneyim
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            {experienceCards.map((card, index) => (
              <ExperienceCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ExperienceSection;
