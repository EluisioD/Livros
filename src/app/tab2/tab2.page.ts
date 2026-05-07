import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LIVROS } from '../dados-livros';
import { FiltroService } from '../services/filtro.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false, 
})
export class Tab2Page implements OnInit {
  // Lista de todos os livros
  public listaLivros = LIVROS;
  
  // Livros a exibir (pode ser filtrado)
  public livrosFiltrados = LIVROS;
  
  // Categorias disponíveis
  public categorias: string[] = [];
  
  // Categoria selecionada para filtro
  public categoriaSelecionada: string = 'Todas';
  
  // Filtro de status (lido/por ler)
  public statusFiltro: string = 'todos'; // 'todos', 'lido', 'por-ler'
  
  constructor(private router: Router, private filtroService: FiltroService) {}

  ngOnInit() {
    // Extrair categorias únicas
    this.categorias = ['Todas', ...new Set(this.listaLivros.map(l => l.categoria))];
    
    // Subscrever ao serviço de filtro
    this.filtroService.statusFiltro$.subscribe(status => {
      this.statusFiltro = status;
      this.aplicarFiltros();
    });
    
    this.aplicarFiltros();
  }
  
  /**
   * Aplica os filtros selecionados aos livros
   */
  aplicarFiltros() {
    this.livrosFiltrados = this.listaLivros.filter(livro => {
      // Filtro de categoria
      const categoria = this.categoriaSelecionada === 'Todas' || livro.categoria === this.categoriaSelecionada;
      
      // Filtro de status (lido/por ler)
      let status = true;
      if (this.statusFiltro === 'lido') {
        status = livro.lido === true;
      } else if (this.statusFiltro === 'por-ler') {
        status = livro.lido === false;
      }
      
      return categoria && status;
    });
  }
  
  /**
   * Filtra livros por categoria
   */
  filtrarPorCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.aplicarFiltros();
  }
  
  /**
   * Filtra livros por status (lido/por ler)
   */
  filtrarPorStatus(status: any) {
    this.statusFiltro = status || 'todos';
    this.aplicarFiltros();
  }
  
  /**
   * Marca um livro como lido ou por ler
   */
  toggleLido(livro: any) {
    livro.lido = !livro.lido;
    this.aplicarFiltros();
  }
  
  /**
   * Navega para a página de detalhes do livro
   */
  verDetalhe(id: number) {
    this.router.navigate(['/detalhe-livro', id]);
  }
}