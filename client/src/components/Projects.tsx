import { projetos } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projetos" className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 pb-4 border-b-4 border-white inline-block w-full">
          Meus Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.id} project={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}
