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
  // BehaviorSubject para armazenar o filtro de estado de leitura
  private estadoFiltroSubject = new BehaviorSubject<string>('todos');
  public estadoFiltro$ = this.estadoFiltroSubject.asObservable();

  // BehaviorSubject para armazenar o filtro de categoria
  private categoriaFiltroSubject = new BehaviorSubject<string>('Todas');
  public categoriaFiltro$ = this.categoriaFiltroSubject.asObservable();

  constructor() { }

  /**
   * Define o filtro de estado de leitura
   */
  setEstadoFiltro(estado: string) {
    this.estadoFiltroSubject.next(estado);
  }

  /**
   * Define o filtro de categoria
   */
  setCategoriafiltro(categoria: string) {
    this.categoriaFiltroSubject.next(categoria);
  }

  /**
   * Retorna o valor atual do filtro de estado de leitura
   */
  getEstadoFiltro(): string {
    return this.estadoFiltroSubject.value;
  }

  /**
   * Retorna o valor atual do filtro de categoria
   */
  getCategoriafiltro(): string {
    return this.categoriaFiltroSubject.value;
  }
}
