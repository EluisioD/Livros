import { Component } from '@angular/core';

/**
 * Tab3Page - Página "Sobre o Autor"
 * 
 * Esta página apresenta informações pessoais do autor,
 * incluindo dados biográficos, educação e interesses.
 */
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  // Dados do Autor - Eluisio Dias
  autor = {
    nome: 'Eluisio Dias',
    dataNascimento: '24 de fevereiro de 2005',
    naturalidade: 'Meaux, França',
    idade: 19,
    foto: 'https://ionicframework.com/docs/img/demos/avatar.png', // Foto de perfil
    // Biografia do autor com informações pessoais e académicas
    biografia: 'Eluisio Dias nasceu a 24 de fevereiro de 2005 em Meaux. Atualmente, frequenta o 2.º ano de Engenharia Informática no Instituto Politécnico de Viana do Castelo, na Escola Superior de Tecnologia e Gestão.\n\nAlém do percurso académico, destaca-se pelo forte interesse em atletismo, sendo estudante-atleta e procurando constantemente melhorar o seu desempenho desportivo, especialmente nas provas de velocidade. Tem também interesse por liderança, trabalho em equipa e desenvolvimento pessoal, participando em formações como a Academia de Liderança Colaborativa.\n\nNa área tecnológica e criativa, demonstra entusiasmo por programação, criação de websites, desenvolvimento de projetos em Python e produção de conteúdos digitais. Tem interesse em videojogos, modelação 3D, tecnologia e criação de vídeos para o YouTube, incluindo gameplays e conteúdos relacionados com setups e coleções pessoais.\n\nFora da tecnologia e do desporto, gosta de imaginar projetos criativos, construir modelos LEGO originais e explorar novas ideias para o futuro.',
    // Array de interesses e hobbies
    interesses: ['Atletismo', 'Programação', 'Websites', 'Python', 'Criação de conteúdos digitais', 'Videojogos', 'Modelação 3D', 'YouTube', 'LEGO']
  };

  constructor() {}
}
