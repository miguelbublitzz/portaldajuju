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
    title: 'Bolsa de Macramê 👜',
    description: 'Aprenda a fazer uma bolsa de macramê elegante e prática para o dia a dia.',
    imageId: 'macrame-bag',
    videoUrl: 'https://www.youtube.com/embed/wbzsi46vjsY',
    instructions: [
      'Corte os fios no tamanho adequado.',
      'Prenda os fios no suporte e comece com o nó de laçada.',
      'Siga o padrão de nós quadrados para formar o corpo da bolsa.',
      'Crie a alça com nós festonê.',
      'Finalize com um penteado nos fios da franja.'
    ],
    tips: [
      'Na França, as artesãs me ensinaram que, antes de começar uma bolsa de macramê, é bom passar os fios de algodão rapidamente no vapor do ferro de passar. Isso ajuda a alinhar os fios, deixa o trançado mais uniforme e evita aquelas ondulações chatas no acabamento. É um truque simples, mas que dá um ar de peça profissional desde o primeiro nó! 🧵🔥'
    ],
    materials: [
        'CORDÃO DE ALGODÃO 3mm',
        '1 fio base de 2m',
        '26 fios de 3,70m',
        '2 fios de 7m cada (alça)',
        '2 fios de aproximadamente 40cm cada (nó escondido na alça)',
        'Cola universal para artesanato',
        'Botão de ímã (opcional)',
        'Mosquetão (opcional)'
    ],
    supplierLink: '/suppliers#supplier-1'
  },
  {
    id: '2',
    slug: 'macrame-belt',
    title: 'Cinto de Macramê 👗',
    description: 'Um acessório charmoso para compor seus looks. Fácil e rápido de fazer.',
    imageId: 'macrame-belt',
    videoUrl: 'https://www.youtube.com/embed/MBRoVVuGMBk',
    instructions: [
      'Passe os fios pela argola de madeira e dobre ao meio.',
      'Faça um nó de laçada para prender os fios na argola.',
      'Trabalhe com nós quadrados ou o ponto DNA, como preferir.',
      'Meça o cinto na sua cintura para saber o comprimento ideal.',
      'Finalize com um nó simples e apare as franjas.'
    ],
    tips: [
      'Quando eu morava na França, aprendi com uma artesã parisiense que, para cintos de macramê, o segredo está em umedecer levemente o fio náutico antes de começar. Isso deixa os nós mais firmes e evita que o cinto laceie com o tempo. Essa técnica quase ninguém ensina, mas faz toda a diferença no acabamento final! ✨👗'
    ],
    materials: [
        'Fio náutico de 5mm (ou cordão de algodão 2–3mm)',
        '6 fios com 6,55m cada (ajustar ao tamanho da cintura)',
        '1 argola de madeira com 5cm de diâmetro',
        'Tesoura ✂️',
        'Fita métrica 📏',
        'Isqueiro (acabamento no fio náutico) ou cola de silicone (acabamento em algodão)'
    ],
    supplierLink: '/suppliers#supplier-2'
  },
  {
    id: '3',
    slug: 'macrame-basket',
    title: 'Cesto Grande em Macramê 🧺',
    description: 'Organize e decore qualquer ambiente com este lindo cesto de macramê.',
    imageId: 'macrame-basket',
    videoUrl: 'https://www.youtube.com/embed/edOn5L6s1nI',
    instructions: [
      'Use uma tigela como molde para a base.',
      'Comece com um círculo mágico de macramê no fundo da tigela.',
      'Suba as laterais do cesto, prendendo novos fios conforme necessário.',
      'Continue tecendo até atingir a altura desejada.',
      'Retire da tigela e faça o acabamento da borda.'
    ],
    tips: [
      'Cada nó muda o resultado final, então não se preocupem se o seu cesto ficar único — isso é que deixa sua arte ainda mais linda 💕.'
    ],
    materials: [
        'Tigela base (20cm de largura x 9cm de altura)',
        '1 fio guia de 4m',
        '61 fios de 3m cada',
        'Cola universal ou linha + agulha (acabamento)',
        'Cordão de algodão 3mm e 4mm'
    ],
    supplierLink: '/suppliers#supplier-1'
  },
  {
    id: '4',
    slug: 'banana-holder',
    title: 'Suporte para Bananas 🍌',
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
      'Sempre que for usar miçangas de madeira no macramê, passe um pedacinho de fita adesiva na ponta do cordão antes de inserir. Isso deixa a ponta firme como uma agulha e facilita muito na hora de colocar as miçangas, sem desfiar o fio. Assim, o trabalho fica rápido e o acabamento bem mais limpo! 🌿👌'
    ],
    materials: [
        'Cordão de algodão',
        '1 cordão de 6mm com 30cm (alça)',
        '4 cordões de 4mm com 130cm cada',
        '1 cordão de 3mm com 70cm (nó escondido)',
        '8 miçangas de madeira de 10mm'
    ],
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
