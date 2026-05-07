import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LIVROS } from '../dados-livros';
import { FavoritosService } from '../services/favoritos.service';

/**
 * Tab4Page - Página de Livros Favoritos
 * Mostra apenas os livros marcados como favoritos
 */
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {
  public livrosFavoritos: any[] = [];
  public listaLivros = LIVROS;

  constructor(
    private router: Router,
    private favoritosService: FavoritosService
  ) { }

  ngOnInit() {
    // Subscribe para mudanças de favoritos
    this.favoritosService.favoritos$.subscribe(() => {
      this.atualizarFavoritos();
    });
    
    this.atualizarFavoritos();
  }

  /**
   * Atualiza a lista de livros favoritos
   */
  atualizarFavoritos() {
    const idsFavoritos = this.favoritosService.getFavoritos();
    this.livrosFavoritos = this.listaLivros.filter(livro => 
      idsFavoritos.includes(livro.id)
    );
  }

  /**
   * Remove um livro dos favoritos
   */
  removerFavorito(id: number) {
    this.favoritosService.removerFavorito(id);
  }

  /**
   * Navega para detalhes do livro
   */
  verDetalhe(id: number) {
    this.router.navigate(['/detalhe-livro', id]);
  }
}
