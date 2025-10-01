import Image from 'next/image';
import type { Supplier } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface SupplierCardProps {
  supplier: Supplier;
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === supplier.imageId);

  return (
    <Card id={supplier.id} className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        {placeholder && (
          <div className="md:w-1/3 flex-shrink-0">
            <div className="relative aspect-video md:aspect-square h-full">
              <Image
                src={placeholder.imageUrl}
                alt={placeholder.description}
                data-ai-hint={placeholder.imageHint}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
        <div className="flex-grow">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-headline font-bold text-primary mb-2">{supplier.name}</h2>
              <p className="text-base text-muted-foreground mb-4">{supplier.description}</p>
            </div>
            <Button asChild className="mt-4 w-full md:w-auto self-start">
              <Link href={supplier.website} target="_blank" rel="noopener noreferrer">
                Visitar Site <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
