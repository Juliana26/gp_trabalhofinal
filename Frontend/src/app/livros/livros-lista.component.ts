import { Component, OnInit } from '@angular/core';
import { Livro } from '../Services/livro.model';
import { LivroService } from '../Services/livro.service';

@Component({
    selector: 'app-livros-lista',
    templateUrl: './livros-lista.component.html',
    styleUrls: ['./livros.component.css']
 })

 export class LivrosListaComponent implements OnInit {

   livros: Livro[]

   constructor(private livroService: LivroService){}

    ngOnInit() {
      this.buscaLivros()
    }

    buscaLivros() {
      this.livroService.getLivros().subscribe(livros => {
         this.livros = livros;
      })
    }   


 }