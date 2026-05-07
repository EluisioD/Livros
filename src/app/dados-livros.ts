/**
 * dados-livros.ts
 * 
 * Ficheiro de dados contendo a lista de livros favoritos.
 * Cada livro contém informações como título, autor, género, categoria, 
 * sinopse, opinião pessoal, citações e classificação.
 */

export const LIVROS = [
 // Primeiro livro: 1984
 {
    id: 1,
    titulo: '1984',
    autor: 'George Orwell',
    genero: 'Ficção Distópica',
    categoria: 'Ficção', // Categoria para filtro
    ano: 1949,
    capa: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><rect width="200" height="300" fill="%238B0000"/><text x="100" y="80" font-size="28" font-weight="bold" text-anchor="middle" fill="white">1984</text><text x="100" y="150" font-size="12" text-anchor="middle" fill="white" font-style="italic">George</text><text x="100" y="165" font-size="12" text-anchor="middle" fill="white" font-style="italic">Orwell</text><circle cx="50" cy="240" r="8" fill="yellow"/><circle cx="150" cy="240" r="8" fill="yellow"/></svg>',
    lido: true, // Indica se o livro foi lido ou não
    sinopse: 'Winston Smith vive numa sociedade totalitária controlada pelo Grande Irmão...',
    opiniao: 'Um livro assustadoramente atual que nos faz refletir sobre a liberdade.',
    citacao: 'Guerra é Paz. Liberdade é Escravidão. Ignorância é Força.',
    classificacao: 5 // Classificação de 1 a 5 estrelas
  },
  // Segundo livro: O Principezinho
  {
    id: 2,
    titulo: 'O Principezinho',
    autor: 'Antoine de Saint-Exupéry',
    genero: 'Literatura Infantil',
    categoria: 'Infantil',
    ano: 1943,
    capa: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23FFD700;stop-opacity:1" /><stop offset="100%" style="stop-color:%23FFA500;stop-opacity:1" /></linearGradient></defs><rect width="200" height="300" fill="url(%23grad1)"/><circle cx="100" cy="100" r="30" fill="%23FFB6C1" opacity="0.8"/><text x="100" y="160" font-size="20" font-weight="bold" text-anchor="middle" fill="%23333">O Principezinho</text><text x="100" y="180" font-size="10" text-anchor="middle" fill="%23333">Antoine de Saint-Exupéry</text><path d="M 50 250 Q 100 230 150 250" stroke="%23333" stroke-width="2" fill="none"/></svg>',
    lido: false,
    sinopse: 'Um piloto despenha-se no deserto do Saara e encontra um jovem príncipe...',
    opiniao: 'Uma leitura obrigatória para todas as idades, cheia de metáforas.',
    citacao: 'O essencial é invisível aos olhos.',
    classificacao: 4
  },
  // Terceiro livro: O Código Da Vinci
  {
    id: 3,
    titulo: 'O Código Da Vinci',
    autor: 'Dan Brown',
    genero: 'Mistério',
    categoria: 'Ficção',
    ano: 2003,
    capa: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><rect width="200" height="300" fill="%23663399"/><text x="100" y="80" font-size="24" font-weight="bold" text-anchor="middle" fill="%23FFD700">O CÓDIGO</text><text x="100" y="110" font-size="24" font-weight="bold" text-anchor="middle" fill="%23FFD700">DA VINCI</text><circle cx="100" cy="180" r="25" fill="none" stroke="%23FFD700" stroke-width="2"/><path d="M 100 155 L 100 205 M 75 180 L 125 180" stroke="%23FFD700" stroke-width="2"/><text x="100" y="270" font-size="10" text-anchor="middle" fill="white">Dan Brown</text></svg>',
    lido: true,
    sinopse: 'Um simbologista é envolvido num mistério envolvendo arte, história e religião...',
    opiniao: 'Uma aventura intrigante que mantém o leitor cativado do início ao fim.',
    citacao: 'A história é escrita pelos vencedores.',
    classificacao: 4
  },
  // Quarto livro: O Hobbit
  {
    id: 4,
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasia',
    categoria: 'Fantasia',
    ano: 1937,
    capa: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23228B22;stop-opacity:1" /><stop offset="100%" style="stop-color:%231a5c1a;stop-opacity:1" /></linearGradient></defs><rect width="200" height="300" fill="url(%23grad2)"/><polygon points="100,40 130,90 70,90" fill="%23DAA520"/><polygon points="100,70 120,110 80,110" fill="%23DAA520"/><text x="100" y="160" font-size="22" font-weight="bold" text-anchor="middle" fill="white">O Hobbit</text><text x="100" y="185" font-size="11" text-anchor="middle" fill="%23FFD700">J.R.R. Tolkien</text><circle cx="40" cy="250" r="5" fill="%23FFD700"/><circle cx="160" cy="250" r="5" fill="%23FFD700"/><circle cx="100" cy="260" r="5" fill="%23FFD700"/></svg>',
    lido: false,
    sinopse: 'Um hobbit viaja com anões e um mago numa aventura épica para recuperar um tesouro...',
    opiniao: 'Uma história clássica de aventura e heroísmo que inspira gerações.',
    citacao: 'Ainda há bem no mundo, e merece a pena lutar por ele.',
    classificacao: 5
  },
  // Quinto livro: Percy Jackson - O Ladrão de Raios
  {
    id: 5,
    titulo: 'Percy Jackson - O Ladrão de Raios',
    autor: 'Rick Riordan',
    genero: 'Fantasia Juvenil',
    categoria: 'Infantil',
    ano: 2005,
    capa: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%230066FF;stop-opacity:1" /><stop offset="100%" style="stop-color:%23003d99;stop-opacity:1" /></linearGradient></defs><rect width="200" height="300" fill="url(%23grad3)"/><polygon points="100,30 110,70 90,70" fill="%23FFD700"/><line x1="100" y1="70" x2="100" y2="120" stroke="%23FFD700" stroke-width="3"/><path d="M 85 120 Q 100 140 115 120" stroke="%23FFD700" stroke-width="2" fill="none"/><text x="100" y="180" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Percy Jackson</text><text x="100" y="195" font-size="11" text-anchor="middle" fill="white">O Ladrão de Raios</text><text x="100" y="215" font-size="9" text-anchor="middle" fill="%23FFFF99">Rick Riordan</text></svg>',
    lido: true,
    sinopse: 'Um rapaz de 12 anos descobre que é filho de um deus grego e é acusado de roubar um raio...',
    opiniao: 'Uma mistura perfeita de mitologia, humor e ação que mantém todos cativados.',
    citacao: 'Nem todos os deuses têm nomes familiares nos livros de história.',
    classificacao: 5
  },
  // Sexto livro: Dom Casmurro
  {
    id: 6,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    genero: 'Romance',
    categoria: 'Ficção',
    ano: 1899,
    capa: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23F5DEB3;stop-opacity:1" /><stop offset="100%" style="stop-color:%23D2B48C;stop-opacity:1" /></linearGradient></defs><rect width="200" height="300" fill="url(%23grad4)"/><rect x="20" y="20" width="160" height="260" fill="none" stroke="%23654321" stroke-width="2"/><path d="M 30 80 Q 100 100 170 80" stroke="%23654321" stroke-width="1" fill="none"/><text x="100" y="140" font-size="24" font-weight="bold" text-anchor="middle" fill="%23654321">Dom</text><text x="100" y="170" font-size="24" font-weight="bold" text-anchor="middle" fill="%23654321">Casmurro</text><text x="100" y="225" font-size="11" text-anchor="middle" fill="%23333">Machado de Assis</text></svg>',
    lido: true,
    sinopse: 'Um homem evoca memórias da sua juventude e de um amor perdido em reminiscências poéticas...',
    opiniao: 'Uma obra-prima da literatura portuguesa que explora temas de amor, traição e memória.',
    citacao: 'Quero atar as duas pontas da vida, e restaurar na velhice a adolescência.',
    classificacao: 4
  },
  // Sétimo livro: Harry Potter - A Pedra Filosofal
  {
    id: 7,
    titulo: 'Harry Potter - A Pedra Filosofal',
    autor: 'J.K. Rowling',
    genero: 'Fantasia',
    categoria: 'Infantil',
    ano: 1997,
    capa: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%239D4EDD;stop-opacity:1" /><stop offset="100%" style="stop-color:%235A189A;stop-opacity:1" /></linearGradient></defs><rect width="200" height="300" fill="url(%23grad5)"/><circle cx="100" cy="80" r="20" fill="%23FFD700"/><circle cx="100" cy="80" r="16" fill="none" stroke="%23FF6B6B" stroke-width="2"/><text x="100" y="160" font-size="18" font-weight="bold" text-anchor="middle" fill="%23FFD700">HARRY POTTER</text><text x="100" y="185" font-size="12" text-anchor="middle" fill="%23FFD700">A Pedra Filosofal</text><text x="100" y="210" font-size="10" text-anchor="middle" fill="white">J.K. Rowling</text><polygon points="50,250 100,270 150,250 130,260 100,280 70,260" fill="%23FFD700"/></svg>',
    lido: true,
    sinopse: 'Um jovem rapaz descobre que é um bruxo e é convidado a frequentar a escola de magia de Hogwarts...',
    opiniao: 'O primeiro livro de uma série extraordinária que conquistou o mundo inteiro.',
    citacao: 'O feliz que tiver coragem de morrer com honra. Mas o terrível é viver sem ela.',
    classificacao: 5
  }
];