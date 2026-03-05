import { projectCards } from "../../data/projects/projectsData";
import ProjectContentCard from "../../components/projects/ProjectContentCard";
import ProjectsContentHeroSection from "../../sections/projects/ProjectsContentHeroSection";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className="bg-[#789a9f]">
        <ProjectsContentHeroSection />
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 pb-10 md:pb-16 lg:pb-24">
          {projectCards.map((project) => (
            <ProjectContentCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
