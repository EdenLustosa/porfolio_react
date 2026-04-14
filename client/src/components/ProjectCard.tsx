import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col min-h-96">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {project.nome}
      </h3>
      
      <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
        {project.descricao}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tecnologias.map((tech, index) => (
          <span
            key={index}
            className="bg-sky-300 text-white px-3 py-1 rounded-full text-sm font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href={project.link}
          className="relative px-8 py-3 bg-white text-sky-600 font-bold uppercase text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:-translate-y-0.5 border-2 border-white hover:border-sky-300"
        >
          Ver Detalhes
        </a>
      </div>
    </div>
  );
}
