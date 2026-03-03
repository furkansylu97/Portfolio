import { Container } from "../../../../shared/components/container/Container";
import EducationCard from "../../components/education/EducationCard";
import { educationCards } from "../../data/education/educationData";

const EducationSection = () => {
  return (
    <Container>
      <section className="flex items-center justify-center w-full">
        <div className="my-6 md:my-8 lg:my-10 max-lg:w-full">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-cyan-950 my-2 md:my-4 lg:my-6 text-center">
            Eğitim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            {educationCards.map((card, index) => (
              <EducationCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default EducationSection;
