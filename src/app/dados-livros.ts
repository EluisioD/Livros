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
    capa: 'https://ionicframework.com/docs/img/demos/card-media.png',
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
    capa: 'https://ionicframework.com/docs/img/demos/card-media.png',
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
    capa: 'https://ionicframework.com/docs/img/demos/card-media.png',
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
    capa: 'https://ionicframework.com/docs/img/demos/card-media.png',
    lido: false,
    sinopse: 'Um hobbit viaja com anões e um mago numa aventura épica para recuperar um tesouro...',
    opiniao: 'Uma história clássica de aventura e heroísmo que inspira gerações.',
    citacao: 'Ainda há bem no mundo, e merece a pena lutar por ele.',
    classificacao: 5
  }
];