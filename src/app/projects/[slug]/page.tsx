import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Lightbulb, ListOrdered, ShoppingCart, Video } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Projeto não encontrado',
    }
  }
 
  return {
    title: `${project.title} | Cantinho Macramê da Juju`,
    description: project.description,
  }
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <div className="container py-12 fade-in">
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          {placeholder && (
            <div className="relative w-full aspect-video">
                <Image
                    src={placeholder.imageUrl}
                    alt={placeholder.description}
                    data-ai-hint={placeholder.imageHint}
                    fill
                    className="object-cover"
                />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Embedded Video */}
              <section>
                <h2 className="flex items-center text-2xl font-headline font-bold text-primary mb-4">
                  <Video className="h-6 w-6 mr-3" />
                  Vídeo Tutorial
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden border">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={project.videoUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                </div>
              </section>

              {/* Instructions */}
              <section>
                <h2 className="flex items-center text-2xl font-headline font-bold text-primary mb-4">
                  <ListOrdered className="h-6 w-6 mr-3" />
                  Instruções
                </h2>
                <ul className="space-y-3">
                  {project.instructions.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mt-1 mr-3 text-primary/70 flex-shrink-0" />
                      <span className="text-lg text-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-8 lg:mt-0">
              {/* Materials */}
              <section>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-headline">
                      <ShoppingCart className="h-5 w-5 mr-3" />
                      Materiais Necessários
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.materials.map((material, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-base">{material}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-6">
                      <Link href={project.supplierLink}>Comprar Materiais</Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>

              {/* Juju's Tips */}
              <section>
                <Card className="bg-rose-50 border-rose-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-headline">
                      <Lightbulb className="h-5 w-5 mr-3" />
                      Dicas da Juju
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-base text-foreground/90">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </aside>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
