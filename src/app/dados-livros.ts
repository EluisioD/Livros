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
    capa: 'https://images-na.ssl-images-amazon.com/images/P/0451524934.01.L.jpg',
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
    capa: 'https://images-na.ssl-images-amazon.com/images/P/0156012197.01.L.jpg',
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
    capa: 'https://images-na.ssl-images-amazon.com/images/P/0385504209.01.L.jpg',
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
    capa: 'https://images-na.ssl-images-amazon.com/images/P/0007458428.01.L.jpg',
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
    capa: 'https://images-na.ssl-images-amazon.com/images/P/0439765935.01.L.jpg',
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
    capa: 'https://images-na.ssl-images-amazon.com/images/P/8532509559.01.L.jpg',
    lido: false,
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
    capa: 'https://images-na.ssl-images-amazon.com/images/P/043913959X.01.L.jpg',
    lido: true,
    sinopse: 'Um jovem rapaz descobre que é um bruxo e é convidado a frequentar a escola de magia de Hogwarts...',
    opiniao: 'O primeiro livro de uma série extraordinária que conquistou o mundo inteiro.',
    citacao: 'O feliz que tiver coragem de morrer com honra. Mas o terrível é viver sem ela.',
    classificacao: 5
  }
];