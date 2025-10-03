import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Lightbulb, Link as LinkIcon, ShoppingCart, Store } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fornecedores | Cantinho Macramê da Juju',
  description: 'Encontre os melhores fornecedores de materiais para seus projetos de macramê.',
};

const cottonCords = [
  {
    name: 'Cordão de algodão 3mm torcido – 1kg (200m) 🧶',
    href: 'https://shopee.com.br/1kg-corda-cord%C3%A3o-algod%C3%A3o-3mm-TORCIDO-rende-aprox-200m-i.511413210.9489786986?sp_atk=9975b9f4-136a-4b98-897a-738dd7380866&xptdk=9975b9f4-136a-4b98-897a-738dd7380866',
  },
  {
    name: 'Cordão São José 3mm (6 rolos – fio cru, super macio) 🌿',
    href: 'https://shopee.com.br/6-rolos-Cord%C3%A3o-3mm-Fio-cru-S%C3%A3o-Jose-algod%C3%A3o-para-macram%C3%AA-i.809311379.19497098824?sp_atk=e6b7cb76-5e0e-49e1-8997-9f431120b764&xptdk=e6b7cb76-5e0e-49e1-8997-9f431120b764',
  },
  {
    name: 'Fio para macramê Pingouin 400g 🎨',
    href: 'https://shopee.com.br/Fio-Macram%C3%AA-Pingouin-400g-i.773140395.23998010323?sp_atk=9821e322-9fb6-47bc-a3e5-0a3f9288b82d&xptdk=9821e322-9fb6-47bc-a3e5-0a3f9288b82d',
  },
];

const tools = [
  {
    name: 'Tesoura profissional para artesanato e costura ✂️✨',
    href: 'https://shopee.com.br/Tesoura-Profissional-para-Costura-e-Artesanato-em-Tecidos-SQ-23-7-CM-A%C3%87O-INOX-RESISTENTE.-i.1521803658.23998502342?sp_atk=61b4244a-d72f-45f5-8061-4a109c8dee86&xptdk=61b4244a-d72f-45f5-8061-4a109c8dee86',
  },
  {
    name: 'Cola de silicone líquida (kit com 3 unidades) 💧',
    href: 'https://shopee.com.br/Cola-Do-Artes%C3%A3o-Silicone-L%C3%ADquida-60ml-KIT-c-03-unidades-i.729126523.23492918859?sp_atk=dceb5ab0-3929-4274-b1f9-d9c54d3f3f3e&xptdk=dceb5ab0-3929-4274-b1f9-d9c54d3f3f3e',
  },
];

const stores = [
  {
    name: 'Lojas na Shopee 🏬',
    description: 'Você encontra ótimas opções de materiais em várias lojas no Brasil inteiro 🌍✨',
    href: 'https://shopee.com.br/vitrine_loja?entryPoint=ShopBySearch&searchKeyword=fio%20macrame',
  }
];

export default function SuppliersPage() {
  return (
    <div className="container py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">🌸 Fornecedores de Materiais 🌸</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Aqui estão alguns fornecedores confiáveis para você montar seu cantinho de macramê com muito carinho, seja em qualquer lugar do Brasil ✨🧵
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-3xl font-headline">
              <LinkIcon className="h-8 w-8 mr-3 text-primary" />
              Cordões de Algodão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {cottonCords.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-muted/30 rounded-lg border">
                  <span className="text-base text-foreground/90 mb-3 sm:mb-0">{item.name}</span>
                  <Button asChild size="sm">
                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                      Ver produto <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-3xl font-headline">
              <ShoppingCart className="h-8 w-8 mr-3 text-primary" />
              Ferramentas e Complementos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {tools.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-muted/30 rounded-lg border">
                  <span className="text-base text-foreground/90 mb-3 sm:mb-0">{item.name}</span>
                  <Button asChild size="sm">
                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                      Ver produto <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-3xl font-headline">
              <Store className="h-8 w-8 mr-3 text-primary" />
              Lojas Indicadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {stores.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-muted/30 rounded-lg border">
                  <div>
                    <span className="text-base font-semibold text-foreground/90 block">{item.name}</span>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Button asChild size="sm" className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0">
                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                      Ver lojas <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-rose-50 border-rose-200">
            <CardHeader>
                <CardTitle className="flex items-center text-xl font-headline">
                    <Lightbulb className="h-5 w-5 mr-3" />
                    Dica da Juju
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base text-foreground/90">
                Prefira fios de algodão de boa qualidade 🌷, porque eles deixam o acabamento das peças muito mais bonito e profissional.
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
