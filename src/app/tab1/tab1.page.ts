import { Component } from '@angular/core';
import { FiltroService } from '../services/filtro.service';

/**
 * Tab1Page - Página Inicial
 * Apresenta boas-vindas e estatísticas da biblioteca
 */
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private filtroService: FiltroService) {}

  /**
   * Filtra e navega para livros lidos
   */
  filtrarLidos() {
    this.filtroService.setStatusFiltro('lido');
  }

}
