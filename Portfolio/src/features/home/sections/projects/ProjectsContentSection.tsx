import React from "react";
import bgProjects from "../../../../assets/images/background/bgProjects.jpg";
import { Container } from "../../../../shared/components/container/Container";
import { projectCards } from "../../data/projects/projectsData";
import ProjectContentCard from "../../components/projects/ProjectContentCard";

interface HeroSectionProps {
  title?: string;
}

const ProjectsContentSection: React.FC<HeroSectionProps> = ({}) => {
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
          <p className="text-center text-gray-900 md:text-lg lg:text-xl mb-8">
            Aşağıda geliştirdiğim projeler ve bu projelerde kullandığım
            teknolojiler detaylı olarak listelenmiştir.
          </p>
        </div>
      </Container>

      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 pb-10 md:pb-16 lg:pb-24">
        {projectCards.map((project) => (
          <ProjectContentCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsContentSection;
