import React from "react";
import ProjectCard from "../../components/projects/ProjectCard";
import { projectCards } from "../../data/projects/projectsData";
import { Container } from "../../../../shared/components/container/Container";

const ProjectsSection: React.FC = () => {
  return (
    <Container>
      <section>
        <div className="my-6 md:my-8 lg:my-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 my-2 md:my-4 lg:my-12 text-center">
            Projeler
          </h2>

          <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
            {projectCards.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ProjectsSection;
