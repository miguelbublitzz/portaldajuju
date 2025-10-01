import { SupplierCard } from '@/components/supplier-card';
import { suppliers } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fornecedores | Cantinho Macramê da Juju',
  description: 'Encontre os melhores fornecedores de materiais para seus projetos de macramê.',
};

export default function SuppliersPage() {
  return (
    <div className="container py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Nossos Fornecedores Parceiros</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Qualidade e variedade são essenciais. Confira nossa lista de fornecedores recomendados para garantir os melhores materiais para sua arte.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {suppliers.map((supplier) => (
          <SupplierCard key={supplier.id} supplier={supplier} />
        ))}
      </div>
    </div>
  );
}
