import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <CardHeader className="p-0">
          {placeholder && (
            <div className="aspect-[3/2] overflow-hidden">
                <Image
                    src={placeholder.imageUrl}
                    alt={placeholder.description}
                    data-ai-hint={placeholder.imageHint}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-headline mb-2 text-primary">{project.title}</CardTitle>
          <p className="text-muted-foreground text-base mb-4">{project.description}</p>
          <div className="flex items-center text-primary font-bold">
            Ver projeto
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
