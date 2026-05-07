import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LIVROS } from '../dados-livros'; 

@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.page.html',
  styleUrls: ['./detalhe-livro.page.scss'],
  standalone: false, // Obrigatório conforme as suas aulas
})
export class DetalheLivroPage implements OnInit {
  public livro: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Recebe o parâmetro ID e procura na base de dados verdadeira
    const idRecebido = Number(this.route.snapshot.paramMap.get('id'));
    this.livro = LIVROS.find(l => l.id === idRecebido);
  }
}