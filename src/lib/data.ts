export type Material = string;

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageId: string;
  videoUrl: string;
  instructions: string[];
  tips: string[];
  materials: Material[];
  supplierLink: string;
}

export interface Supplier {
  id: string;
  name: string;
  description: string;
  website: string;
  imageId: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'macrame-bag',
    title: 'Bolsa de Macramê',
    description: 'Aprenda a fazer uma bolsa de macramê elegante e prática para o dia a dia.',
    imageId: 'macrame-bag',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    instructions: [
      'Corte os fios no tamanho adequado.',
      'Prenda os fios no suporte e comece com o nó de laçada.',
      'Siga o padrão de nós quadrados para formar o corpo da bolsa.',
      'Crie a alça com nós festonê.',
      'Finalize com um penteado nos fios da franja.'
    ],
    tips: [
      'Mantenha a tensão dos nós uniforme para um acabamento profissional.',
      'Use um cabide ou galho firme como suporte para trabalhar com mais conforto.',
      'Se errar, desfaça o nó com cuidado para não danificar o fio.'
    ],
    materials: ['Cordão de algodão 4mm', 'Cola para artesanato', 'Botão magnético (opcional)', 'Mosquetão (opcional)'],
    supplierLink: '/suppliers#supplier-1'
  },
  {
    id: '2',
    slug: 'macrame-belt',
    title: 'Cinto de Macramê',
    description: 'Um acessório charmoso para compor seus looks. Fácil e rápido de fazer.',
    imageId: 'macrame-belt',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructions: [
      'Passe os fios pela argola de madeira e dobre ao meio.',
      'Faça um nó de laçada para prender os fios na argola.',
      'Trabalhe com nós quadrados ou o ponto DNA, como preferir.',
      'Meça o cinto na sua cintura para saber o comprimento ideal.',
      'Finalize com um nó simples e apare as franjas.'
    ],
    tips: [
      'Fio náutico é ótimo para cintos por ser mais firme e durável.',
      'Para um efeito mais delicado, use um fio de algodão mais fino.'
    ],
    materials: ['Fio náutico ou cordão de algodão 3mm', 'Argola de madeira', 'Tesoura'],
    supplierLink: '/suppliers#supplier-2'
  },
  {
    id: '3',
    slug: 'macrame-basket',
    title: 'Cesto de Macramê',
    description: 'Organize e decore qualquer ambiente com este lindo cesto de macramê.',
    imageId: 'macrame-basket',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructions: [
      'Use uma tigela como molde para a base.',
      'Comece com um círculo mágico de macramê no fundo da tigela.',
      'Suba as laterais do cesto, prendendo novos fios conforme necessário.',
      'Continue tecendo até atingir a altura desejada.',
      'Retire da tigela e faça o acabamento da borda.'
    ],
    tips: [
      'Usar um fio mais grosso deixará seu cesto mais estruturado.',
      'A cola ajuda a dar mais firmeza para a peça final.'
    ],
    materials: ['Tigela para molde', 'Cordão de algodão 5mm', 'Cola branca', 'Agulha de tapeçaria'],
    supplierLink: '/suppliers#supplier-1'
  },
  {
    id: '4',
    slug: 'banana-holder',
    title: 'Suporte para Bananas',
    description: 'Um jeito criativo e funcional de armazenar suas frutas e decorar a cozinha.',
    imageId: 'macrame-banana-holder',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructions: [
      'Corte 8 fios de 2 metros cada.',
      'Junte todos os fios e faça um nó grande em uma das pontas, formando um laço para pendurar.',
      'Separe os fios em 4 grupos de 4 fios.',
      'Faça uma sequência de nós quadrados em cada grupo.',
      'Junte os grupos para formar a "cesta" onde as bananas ficarão.',
      'Finalize com um nó grande na parte de baixo, e adicione contas de madeira se desejar.'
    ],
    tips: [
      'Use contas de madeira grandes para um visual mais rústico.',
      'Certifique-se que o nó superior é bem forte para aguentar o peso das frutas.'
    ],
    materials: ['Cordão de algodão 3mm', 'Contas de madeira (opcional)'],
    supplierLink: '/suppliers#supplier-2'
  }
];

export const suppliers: Supplier[] = [
  {
    id: 'supplier-1',
    name: 'Armarinho Fios de Ouro',
    description: 'A maior variedade de fios de algodão, barbantes e acessórios para macramê da região. Entregamos em todo o Brasil.',
    website: '#',
    imageId: 'supplier-generic'
  },
  {
    id: 'supplier-2',
    name: 'Madeira & Arte',
    description: 'Argolas, bastões, contas e tudo em madeira para dar um acabamento perfeito e natural às suas peças de macramê.',
    website: '#',
    imageId: 'supplier-generic'
  },
  {
    id: 'supplier-3',
    name: 'Click Aviamentos',
    description: 'Sua loja online de aviamentos. Encontre tesouras, agulhas, colas, botões e muito mais para seus projetos de artesanato.',
    website: '#',
    imageId: 'supplier-generic'
  }
];
