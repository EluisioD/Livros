import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LIVROS } from '../dados-livros';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false, 
})
export class Tab2Page {
  // O ERRO ESTAVA AQUI: faltava a palavra LIVROS a seguir ao sinal de igual!
  public listaLivros = LIVROS; 
  
  constructor(private router: Router) {}
  
  verDetalhe(id: number) {
    this.router.navigate(['/detalhe-livro', id]);
  }
}