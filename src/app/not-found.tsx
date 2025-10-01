import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center p-4">
      <Frown className="w-24 h-24 text-primary/50 mb-4" />
      <h1 className="text-4xl font-bold font-headline text-primary mb-2">404 - Página Não Encontrada</h1>
      <p className="text-lg text-muted-foreground mb-6">Oops! Parece que este cantinho não existe.</p>
      <Button asChild>
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  );
}
