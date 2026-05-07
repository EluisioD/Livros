import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * FiltroService
 * Serviço para compartilhar o estado do filtro entre componentes
 */
@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  // BehaviorSubject para armazenar o filtro de status
  private statusFiltroSubject = new BehaviorSubject<string>('todos');
  public statusFiltro$ = this.statusFiltroSubject.asObservable();

  // BehaviorSubject para armazenar o filtro de categoria
  private categoriaFiltroSubject = new BehaviorSubject<string>('Todas');
  public categoriaFiltro$ = this.categoriaFiltroSubject.asObservable();

  constructor() { }

  /**
   * Define o filtro de status
   */
  setStatusFiltro(status: string) {
    this.statusFiltroSubject.next(status);
  }

  /**
   * Define o filtro de categoria
   */
  setCategoriafiltro(categoria: string) {
    this.categoriaFiltroSubject.next(categoria);
  }

  /**
   * Retorna o valor atual do filtro de status
   */
  getStatusFiltro(): string {
    return this.statusFiltroSubject.value;
  }

  /**
   * Retorna o valor atual do filtro de categoria
   */
  getCategoriafiltro(): string {
    return this.categoriaFiltroSubject.value;
  }
}
