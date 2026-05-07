import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LIVROS } from '../dados-livros';
import { FavoritosService } from '../services/favoritos.service';

/**
 * DetalheLivroPage - Página de Detalhes do Livro
 * Mostra informações completas e permite marcar como favorito/lido
 */
@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.page.html',
  styleUrls: ['./detalhe-livro.page.scss'],
  standalone: false,
})
export class DetalheLivroPage implements OnInit {
  public livro: any;
  public isFavorito: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private favoritosService: FavoritosService
  ) { }

  ngOnInit() {
    // Recebe o parâmetro ID e procura na base de dados
    const idRecebido = Number(this.route.snapshot.paramMap.get('id'));
    this.livro = LIVROS.find(l => l.id === idRecebido);
    
    // Verifica se o livro é favorito
    this.verificarFavorito();
    
    // Subscribe para mudanças de favoritos
    this.favoritosService.favoritos$.subscribe(() => {
      this.verificarFavorito();
    });
  }

  /**
   * Verifica se o livro atual é favorito
   */
  verificarFavorito() {
    if (this.livro) {
      this.isFavorito = this.favoritosService.isFavorito(this.livro.id);
    }
  }

  /**
   * Toggle favorito
   */
  toggleFavorito() {
    if (this.livro) {
      this.favoritosService.toggleFavorito(this.livro.id);
    }
  }

  /**
   * Marca livro como lido/por ler
   */
  toggleLido() {
    if (this.livro) {
      this.livro.lido = !this.livro.lido;
    }
  }
}