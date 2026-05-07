import { Component, OnInit } from '@angular/core';
import { AutorService } from '../services/autor.service';

/**
 * Tab3Page - Página "Mais Informações"
 * 
 * Esta página apresenta informações adicionais pessoais do autor,
 * incluindo dados biográficos expandidos, educação e interesses.
 */
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  // Dados do Autor
  public autor: any;

  constructor(private autorService: AutorService) {
    this.autor = this.autorService.getAutor();
  }

  ngOnInit() {
    // Inicialização se necessária
  }
}
