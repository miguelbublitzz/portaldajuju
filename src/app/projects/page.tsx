import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos | Cantinho Macramê da Juju',
  description: 'Explore nossos projetos de macramê com tutoriais completos.',
};

export default function ProjectsPage() {
  return (
    <div className="container py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Nossos Projetos</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          De bolsas a itens de decoração, encontre aqui o seu próximo projeto de macramê. Todos com passo a passo detalhado para você criar sem medo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
