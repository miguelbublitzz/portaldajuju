import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandPlatter, HeartHandshake, Package, Store, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'Projetos',
    description: 'Inspire-se com tutoriais passo a passo para criar peças incríveis.',
    href: '/projects',
  },
  {
    icon: <Store className="h-10 w-10 text-primary" />,
    title: 'Fornecedores',
    description: 'Encontre os melhores materiais para seus projetos de macramê.',
    href: '/suppliers',
  },
  {
    icon: <HandPlatter className="h-10 w-10 text-primary" />,
    title: 'Renda Extra',
    description: 'Dicas práticas para transformar seu hobby em um negócio de sucesso.',
    href: '/extra-income',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto text-center fade-in">
        <div className="flex justify-center mb-6">
          <HeartHandshake className="h-24 w-24 text-primary/80" />
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
          Bem-vinda ao Cantinho Macramê da Juju
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground/80">
          Seu espaço para aprender, criar e se inspirar no maravilhoso mundo do macramê. Explore nossos projetos, encontre os melhores fornecedores e aprenda a gerar uma renda extra com sua arte.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group h-full">
              <Card className="h-full text-center hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 mb-4 group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-headline text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <Button variant="outline" className="w-full mt-auto group-hover:bg-accent/50 transition-colors">
                    Ver Mais
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
