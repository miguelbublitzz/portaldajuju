
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
  },
  {
    id: '5',
    slug: 'macrame-pot-cover',
    title: 'Capa para Vasos em Macramê',
    description: 'Deixe seus vasos de plantas ainda mais charmosos com esta capa de macramê.',
    imageId: 'macrame-pot-cover',
    videoUrl: 'https://www.youtube.com/embed/_NpCP1N8yII',
    instructions: [
      'Meça a circunferência e a altura do seu vaso.',
      'Corte os fios de acordo com o tamanho do vaso.',
      'Comece a tecer a base com nós quadrados.',
      'Suba as laterais, ajustando o padrão ao formato do vaso.',
      'Finalize a borda e apare as franjas.'
    ],
    tips: ['Para um visual mais rústico, use um fio de cor natural. Se quiser um toque de cor, a mostarda fica linda!'],
    materials: [
      'Fio de Macramé Torcido 5mm - cor Natural',
      'Fio de Macramé Torcido 5mm - cor Mustard (mostarda)',
      'Fita Métrica',
      'Tesoura',
      'Vaso'
    ],
    supplierLink: '/suppliers#supplier-1'
  },
  {
    id: '6',
    slug: 'macrame-christmas-ornament',
    title: 'Enfeite Natalino de Macramê',
    description: 'Crie lindos enfeites de Natal em macramê para decorar sua árvore.',
    imageId: 'macrame-christmas-ornament',
    videoUrl: 'https://www.youtube.com/embed/mpZk9NqexaY',
    instructions: [
      'Molde o arame galvanizado no formato desejado (estrela, círculo, etc.).',
      'Encape o arame com o fio de macramê usando nós festonê.',
      'Adicione detalhes como bolas de madeira ou ramos.',
      'Faça a franja com a escova de animais para um efeito fofinho.',
      'Prenda a argola para pendurar.'
    ],
    tips: ['Use sua criatividade! Você pode criar diversos formatos e adicionar outros elementos decorativos.'],
    materials: [
      'Fio Macramé',
      'Corda de Algodão 2,5 mm',
      'Arame Galvanizado 0,7 mm',
      'Objeto redondo',
      'Ramos e folhas',
      'Fita métrica',
      'Tesoura',
      'Escova de Animais',
      'Argola',
      'Bola de madeira com furo',
      'Bola Transparente que abre'
    ],
    supplierLink: '/suppliers#supplier-3'
  },
  {
    id: '7',
    slug: 'macrame-pillow',
    title: 'Almofada de Macramê',
    description: 'Transforme uma capa de almofada simples em uma peça de decoração sofisticada.',
    imageId: 'macrame-pillow',
    videoUrl: 'https://www.youtube.com/embed/r4UOzMLmEcY',
    instructions: [
      'Marque o desenho desejado na capa da almofada com um lápis.',
      'Use o furador para criar os buracos por onde os fios passarão.',
      'Passe os fios e comece a tecer o padrão de macramê.',
      'Finalize os nós e apare as franjas.',
      'Penteie as franjas com a escova para um acabamento macio.'
    ],
    tips: ['Uma agulha de crochê pode ajudar a puxar os fios pelos furos da capa da almofada.'],
    materials: [
      'Capa de almofada',
      'Fio Macramé',
      'Régua',
      'Lápis',
      'Tesoura',
      'Fita Cola',
      'Pedaço de cartão',
      'Escova de Animais',
      'Agulha de Croché',
      'Furador'
    ],
    supplierLink: '/suppliers#supplier-1'
  },
  {
    id: '8',
    slug: 'macrame-bag-2',
    title: 'Bolsa de Macramê (Modelo 2)',
    description: 'Outro modelo incrível de bolsa de macramê para você arrasar.',
    imageId: 'macrame-bag-2',
    videoUrl: 'https://www.youtube.com/embed/5tgM5WVefis',
    instructions: [
      'Separe os fios para o corpo da bolsa e para a alça.',
      'Comece pela base da bolsa com nós quadrados.',
      'Suba as laterais no padrão desejado.',
      'Faça a alça separadamente e prenda na bolsa com os mosquetões.',
      'Finalize os detalhes e acabamentos.'
    ],
    tips: ['O uso de mosquetões torna a alça removível, permitindo que você troque por outras alças e personalize sua bolsa.'],
    materials: [
      'Tesoura',
      'fita métrica',
      'arara e ganchos',
      '2 Mosquetão de 20mm',
      'Barbante 24 fios (4mm)',
      'Bolsa: 1 linha de 150cm e 14 linhas de 450cm',
      'Alça: 1 linha de 600cm e 2 linhas de 450cm'
    ],
    supplierLink: '/suppliers#supplier-2'
  },
  {
    id: '9',
    slug: 'macrame-bookmark',
    title: 'Marcador de Páginas',
    description: 'Um marcador de páginas delicado e charmoso para seus livros.',
    imageId: 'macrame-bookmark',
    videoUrl: 'https://www.youtube.com/embed/avwrx7Gqu9U',
    instructions: [
      'Prenda as 6 linhas no palito de hashi com o nó de laçada.',
      'Siga o padrão de nós para criar o corpo do marcador.',
      'Deixe uma franja no final e apare no comprimento desejado.',
      'Penteie a franja para um acabamento mais bonito.'
    ],
    tips: ['Uma prancheta ajuda a manter o trabalho firme enquanto você tece.'],
    materials: [
      'Tesoura',
      'prancheta e fita métrica',
      'Barbante 6 fios',
      'Hashi ou Palito Churrasco de 5cm',
      '6 linhas de 150cm'
    ],
    supplierLink: '/suppliers#supplier-3'
  },
  {
    id: '10',
    slug: 'macrame-table-runner',
    title: 'Caminho de Mesa',
    description: 'Deixe sua mesa de jantar mais elegante com este caminho de mesa em macramê.',
    imageId: 'macrame-table-runner',
    videoUrl: 'https://www.youtube.com/embed/hhGlDixl5Zg',
    instructions: [
      'Prenda os fios na arara ou suporte.',
      'Comece a tecer o padrão desejado, como uma sequência de nós quadrados.',
      'Continue até atingir o comprimento desejado para sua mesa.',
      'Finalize as duas pontas com franjas.',
      'Apare e penteie as franjas para um acabamento perfeito.'
    ],
    tips: ['Meça sua mesa antes de começar para garantir que o caminho de mesa terá o tamanho ideal.'],
    materials: [
      'Tesoura, ganchos, arara e fita métrica',
      'Barbante 24 fios (4mm)',
      '20 linhas de 450cm (4,50 metros)'
    ],
    supplierLink: '/suppliers#supplier-1'
  },
  {
    id: '11',
    slug: 'macrame-cross',
    title: 'Cruz em Macramê',
    description: 'Uma peça delicada e cheia de significado para decorar ou presentear.',
    imageId: 'macrame-cross',
    videoUrl: 'https://www.youtube.com/embed/W3dgo6A0_kw',
    instructions: [
      'Use a base de EVA e alfinetes para moldar o formato da cruz.',
      'Comece a tecer a parte vertical da cruz.',
      'Depois, teça a parte horizontal e una as duas partes.',
      'Use cola de silicone para dar um acabamento firme.',
      'Deixe secar bem antes de remover os alfinetes.'
    ],
    tips: ['A base de EVA com alfinetes é um ótimo truque para manter o formato exato de peças geométricas como esta.'],
    materials: [
      'Tesoura, fita métrica, cola silicone, base eva e alfinetes',
      'Barbante 24 fios',
      '1 linha de 150cm',
      '1 linha de 100cm'
    ],
    supplierLink: '/suppliers#supplier-3'
  },
  {
    id: '12',
    slug: 'macrame-snowflake',
    title: 'Floco de Neve para o Natal',
    description: 'Decore sua casa para o Natal com estes lindos flocos de neve em macramê.',
    imageId: 'macrame-snowflake',
    videoUrl: 'https://www.youtube.com/embed/iFlsviusqX0',
    instructions: [
      'Use a base de EVA e alfinetes para criar o formato do floco de neve.',
      'Trabalhe cada uma das 6 pontas do floco separadamente.',
      'Una as pontas no centro.',
      'Prepare a mistura de cola para endurecer a peça.',
      'Passe a cola na peça ainda presa nos alfinetes e deixe secar completamente.'
    ],
    tips: ['A receita de cola com álcool ajuda a peça a secar mais rápido e a ficar bem firme.'],
    materials: [
      'Tesoura, base eva, alfinetes, cola branca e fita métrica',
      'Barbante 24 fios (4mm)',
      '6 linhas de 70cm',
      '6 linhas de 60cm',
      '6 linhas de 50cm',
      '12 linhas de 30cm',
      'Receita Cola: 2 colheres de Cola, 1 colher de Água, 1 colher de álcool'
    ],
    supplierLink: '/suppliers#supplier-3'
  },
  {
    id: '13',
    slug: 'macrame-christmas-ornaments-set',
    title: 'Enfeites de Natal (Kit)',
    description: 'Um kit com 3 lindos enfeites de natal: mini painel, guirlanda e estrela.',
    imageId: 'macrame-christmas-ornaments-set',
    videoUrl: 'https://www.youtube.com/embed/watch?v=n7z3_h-45dg',
    instructions: [
      'Siga as instruções do vídeo para cada um dos enfeites.',
      'Use a receita de cola para endurecer as peças e garantir que mantenham o formato.',
      'Penteie as franjas com a rasqueadeira para um acabamento fofinho.',
      'Adicione um fio para pendurar na árvore.'
    ],
    tips: ['Faça vários kits para presentear amigos e familiares no Natal!'],
    materials: [
      'Tesoura, fita métrica, rasqueadeira, cola branca, álcool, água, base eva e alfinetes',
      'Barbante 24 fios (4mm)',
      '1und Hashi ou Palito de churrasco de 8cm',
      '2und Argola plástica de 4,5cm',
      'PAINEL: 6 linhas de 50cm',
      'GUIRLANDA: 14 linhas de 40cm',
      'ESTRELA: 12 linhas de 40cm',
      'Receita Cola: 2 colheres de Cola, 1 colher de Água, 1 colher de álcool'
    ],
    supplierLink: '/suppliers#supplier-3'
  },
  {
    id: '14',
    slug: 'macrame-heart-keychain',
    title: 'Chaveiro de Coração',
    description: 'Um chaveiro de coração em macramê, perfeito para presentear ou vender.',
    imageId: 'macrame-heart-keychain',
    videoUrl: 'https://www.youtube.com/embed/0ZV5JE-LMmo',
    instructions: [
      'Prenda os fios no mosquetão.',
      'Use a base de EVA e alfinetes para ajudar a dar o formato de coração.',
      'Siga o padrão de nós para formar o coração.',
      'Finalize com o nó escondido para um acabamento limpo.',
      'Apare e penteie as franjas.'
    ],
    tips: ['A fita crepe pode ser uma aliada para prender os fios na base de EVA.'],
    materials: [
      'Tesoura, fita crepe, base eva, alfinetes e fita métrica',
      'Barbante 24 fios (4mm)',
      'Mosquetão 1,5cm',
      '5 linhas de 80cm',
      '1 linha de 90cm',
      '1 linha de 30cm'
    ],
    supplierLink: '/suppliers#supplier-2'
  },
  {
    id: '15',
    slug: 'macrame-plant-hanger',
    title: 'Suporte para Planta',
    description: 'Um suporte de plantas clássico para decorar sua casa com muito verde.',
    imageId: 'macrame-plant-hanger',
    videoUrl: 'https://www.youtube.com/embed/watch?v=f-f5hplrfqg',
    instructions: [
      'Prenda os fios na argola com o nó de laçada.',
      'Faça o nó escondido para um acabamento superior.',
      'Separe os fios em grupos e faça sequências de nós quadrados.',
      'Crie a "cesta" que irá segurar o vaso.',
      'Finalize com um grande nó na base e deixe uma franja bonita.'
    ],
    tips: ['Este suporte tem 58cm, mas você pode ajustar o comprimento dos fios para fazê-lo maior ou menor.'],
    materials: [
      'Tesoura, fita métrica, ganchos e arara',
      'Barbante 24 fios',
      'Argola de 4cm',
      '6 linhas de 200cm',
      '2 linhas de 50cm'
    ],
    supplierLink: '/suppliers#supplier-2'
  },
  {
    id: '16',
    slug: 'macrame-keychains-3-models',
    title: '3 Modelos de Chaveiros Rápidos',
    description: 'Aprenda a fazer 3 modelos de chaveiros em macramê de forma rápida e fácil.',
    imageId: 'macrame-keychains-3-models',
    videoUrl: 'https://www.youtube.com/embed/Kc5pT5as5j0',
    instructions: [
      'Siga o passo a passo do vídeo para cada um dos três modelos.',
      'Modelo 1: 00:25 – 2 fios de 80 cm, 1 fio de 30 cm',
      'Modelo 2: 03:48 – 2 fios de 100 cm, 1 fio de 30 cm',
      'Modelo 3: 06:24 – 4 fios de 80 cm, 1 fio de 30 cm',
      'Finalize cada chaveiro com o nó escondido e apare as franjas.'
    ],
    tips: ['Estes chaveiros são ótimos para aproveitar sobras de fios de outros projetos!'],
    materials: [
      'Tesoura e fita métrica',
      'Mosquetão de 2cm x 4cm - 3 unidades',
      'Barbante 24 fios',
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
