import type { Project } from "../../data/projects/projectsData";
import { TbClick } from "react-icons/tb";
import { GiClick } from "react-icons/gi";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="group rounded-xl lg:rounded-2xl border-2 border-cyan-950 bg-gray-900 p-4 md:p-6 lg:p-8">
      <div className="overflow-hidden rounded-lg lg:rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[35%] object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </div>

      <div className="mt-4 lg:mt-5 flex flex-col gap-2 lg:gap-3">
        <h3 className="text-lg lg:text-xl max-lg:text-center font-semibold text-white">{project.title}</h3>

        <p className="text-base lg:text-lg text-gray-400 leading-relaxed whitespace-pre-line line-clamp-3">
          {project.description}
        </p>

        <span className="my-2 lg:my-3">
          <Link
            to={`/projects#project-${project.id}`}
            className="font-medium text-base lg:text-lg text-blue-400 inline-block hover:text-blue-200 ease-in-out transition-colors"
          >
            <div className="flex items-center gap-1">
              Detaylı Bilgi <TbClick />
            </div>
          </Link>
        </span>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              title={tech.name}
              className="flex items-center justify-center w-9 md:w-10 lg:w-12 h-9 md:h-10 lg:h-12 rounded-full border border-white/10 bg-[#222222]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 lg:w-7 h-6 lg:h-7 object-contain"
              />
            </div>
          ))}
        </div>

        <span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pt-3 text-base lg:text-lg font-medium text-blue-400 hover:text-blue-200 ease-in-out transition-colors"
          >
            Siteyi Keşfet <GiClick />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
