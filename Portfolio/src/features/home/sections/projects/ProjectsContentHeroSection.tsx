import React from "react";
import bgProjects from "../../../../assets/images/background/bgProjects.jpg";
import { Container } from "../../../../shared/components/container/Container";

interface HeroSectionProps {
  title?: string;
}

const ProjectsContentHeroSection: React.FC<HeroSectionProps> = ({
}) => {
  return (
    <section>
      <div className="relative w-full overflow-hidden">
        <img
          src={bgProjects}
          alt="about background"
          className="h-[40vh] lg:h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <Container>
        <div className="w-full lg:my-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 my-2 md:my-3 lg:my-4 text-center">
            Projeler
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsContentHeroSection;
