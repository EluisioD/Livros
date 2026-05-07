import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * FavoritosService
 * Serviço para gerir livros favoritos
 */
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  // BehaviorSubject para armazenar IDs dos livros favoritos
  private favoritosSubject = new BehaviorSubject<number[]>([]);
  public favoritos$ = this.favoritosSubject.asObservable();

  constructor() { }

  /**
   * Adiciona um livro aos favoritos
   */
  adicionarFavorito(id: number) {
    const favoritos = this.favoritosSubject.value;
    if (!favoritos.includes(id)) {
      this.favoritosSubject.next([...favoritos, id]);
    }
  }

  /**
   * Remove um livro dos favoritos
   */
  removerFavorito(id: number) {
    const favoritos = this.favoritosSubject.value;
    this.favoritosSubject.next(favoritos.filter(f => f !== id));
  }

  /**
   * Verifica se um livro é favorito
   */
  isFavorito(id: number): boolean {
    return this.favoritosSubject.value.includes(id);
  }

  /**
   * Retorna os IDs dos favoritos
   */
  getFavoritos(): number[] {
    return this.favoritosSubject.value;
  }

  /**
   * Toggle favorito
   */
  toggleFavorito(id: number) {
    if (this.isFavorito(id)) {
      this.removerFavorito(id);
    } else {
      this.adicionarFavorito(id);
    }
  }
}
