import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Tag, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renda Extra | Cantinho Macramê da Juju',
  description: 'Aprenda a transformar seu hobby de macramê em uma fonte de renda.',
};

export default function ExtraIncomePage() {
  return (
    <div className="container py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Transforme seu Hobby em Renda</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Vender suas peças de macramê pode ser uma jornada gratificante. Aqui estão algumas dicas práticas da Juju para você começar a lucrar com sua arte.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Tag className="h-8 w-8 text-primary mr-4" />
              <CardTitle className="text-3xl font-headline">Dicas de Precificação</CardTitle>
            </div>
            <CardDescription className="text-base">Calcular o preço justo é crucial para o sucesso.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p><strong className="text-primary/90">Custo dos Materiais:</strong> Some o valor de todo o material utilizado em uma peça (fios, argolas, contas, etc.).</p>
            <p><strong className="text-primary/90">Sua Hora de Trabalho:</strong> Defina um valor para sua hora de trabalho (ex: R$ 15/hora) e multiplique pelo tempo gasto na produção.</p>
            <p><strong className="text-primary/90">Custos Fixos e Variáveis:</strong> Adicione uma porcentagem (ex: 20%) sobre a soma de materiais e mão de obra para cobrir custos como luz, internet, embalagens e marketing.</p>
            <p><strong className="font-bold">Fórmula Base:</strong> (Custo dos Materiais + (Suas Horas x Valor da Hora)) + 20% = Preço Final.</p>
            <p className="text-muted-foreground pt-2">Lembre-se de pesquisar preços de peças semelhantes no mercado para garantir que seu valor seja competitivo.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Instagram className="h-8 w-8 text-primary mr-4" />
              <CardTitle className="text-3xl font-headline">Marketing no Instagram</CardTitle>
            </div>
             <CardDescription className="text-base">O Instagram é sua principal vitrine. Use-o com estratégia!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p><strong className="text-primary/90">Fotos de Qualidade:</strong> Invista em boas fotos! Use luz natural, um fundo bonito e mostre suas peças em uso (ex: um suporte de planta com uma planta, uma bolsa em um look).</p>
            <p><strong className="text-primary/90">Vídeos Cativantes:</strong> Crie Reels mostrando o processo de criação, detalhes da peça ou dando dicas rápidas. Vídeos engajam mais!</p>
            <p><strong className="text-primary/90">Use Hashtags Relevantes:</strong> Pesquise e use uma mistura de hashtags populares (#macramebrasil, #artesanato) e de nicho (#suportedemacrame, #decoracaoboho).</p>
            <p><strong className="text-primary/90">Interaja com a Comunidade:</strong> Siga outros artesãos, comente em posts e participe de conversas. Crie uma rede de contatos.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary mr-4" />
              <CardTitle className="text-3xl font-headline">Aquisição de Clientes</CardTitle>
            </div>
            <CardDescription className="text-base">Onde e como encontrar seus primeiros clientes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p><strong className="text-primary/90">Comece com sua Rede:</strong> Seus primeiros clientes podem ser amigos, familiares e colegas. Ofereça suas peças a eles e peça para que divulguem seu trabalho.</p>
            <p><strong className="text-primary/90">Feiras de Artesanato:</strong> Participe de feiras locais. É uma ótima oportunidade para expor seu trabalho, conhecer clientes pessoalmente e fazer networking.</p>
            <p><strong className="text-primary/90">Parcerias com Lojas:</strong> Entre em contato com lojas de decoração, floriculturas ou boutiques de moda da sua cidade e proponha uma parceria (venda consignada, por exemplo).</p>
            <p><strong className="text-primary/90">Marketplaces Online:</strong> Considere vender em plataformas como Elo7 ou Etsy para alcançar um público maior.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
