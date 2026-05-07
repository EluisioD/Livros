import { Component, OnInit } from '@angular/core';
import { AutorService } from '../services/autor.service';
import { FiltroService } from '../services/filtro.service';

/**
 * Tab1Page - Página Inicial: Identificação do Autor
 * 
 * Esta página apresenta as informações obrigatórias do autor conforme o guião oficial:
 * - Identificação do autor: nome, data de nascimento, naturalidade
 * - Breve biografia
 * - Fotografia do autor
 */
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  // Dados do autor
  public autor: any;

  constructor(private autorService: AutorService, private filtroService: FiltroService) {
    this.autor = this.autorService.getAutor();
  }

  ngOnInit() {
    // Inicialização se necessária
  }

  /**
   * Filtra e navega para livros lidos
   */
  filtrarLidos() {
    this.filtroService.setEstadoFiltro('lido');
  }
}
