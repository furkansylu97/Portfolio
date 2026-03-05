import { Container } from "../../../../shared/components/container/Container";
import type { Project } from "../../data/projects/projectsData";
import { GiClick } from "react-icons/gi";

interface Props {
  project: Project;
}

const ProjectContentCard: React.FC<Props> = ({ project }) => {
  return (
    <Container>
      <section
        id={`project-${project.id}`}
        className="scroll-mt-32 border border-cyan-950 bg-gray-900 rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-10"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 overflow-hidden lg:mt-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold max-lg:text-center text-white">
              {project.title}
            </h2>

            <ul className="text-base lg:text-lg text-gray-300 leading-relaxed space-y-3">
              {project.description.split("\n").map((line, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-extrabold text-cyan-400">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  title={tech.name}
                  className="flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 rounded-full border border-white/10 bg-[#222222]"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 lg:w-7 h-6 lg:h-7 object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base lg:text-lg font-medium text-blue-400 hover:text-blue-200 transition-colors"
              >
                Siteyi Keşfet <GiClick />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ProjectContentCard;
