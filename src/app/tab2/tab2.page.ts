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
  
  // Filtro de estado de leitura (lido/por ler)
  public estadoFiltro: string = 'todos'; // 'todos', 'lido', 'por-ler'
  
  constructor(private router: Router, private filtroService: FiltroService) {}

  ngOnInit() {
    // Extrair categorias únicas
    this.categorias = ['Todas', ...new Set(this.listaLivros.map(l => l.categoria))];
    
    // Subscrever ao serviço de filtro
    this.filtroService.estadoFiltro$.subscribe(estado => {
      this.estadoFiltro = estado;
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
      
      // Filtro de estado de leitura (lido/por ler)
      let estado = true;
      if (this.estadoFiltro === 'lido') {
        estado = livro.lido === true;
      } else if (this.estadoFiltro === 'por-ler') {
        estado = livro.lido === false;
      }
      
      return categoria && estado;
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
   * Filtra livros por estado de leitura (lido/por ler)
   */
  filtrarPorEstado(estado: any) {
    this.estadoFiltro = estado || 'todos';
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