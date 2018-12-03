import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Router } from '@angular/router'

import { LivroService } from '../Services/livro.service'
import { Livro } from '../Services/livro.model'
import { Retorno } from '../Services/retorno.model';


@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livroForm: FormGroup
  livro: Livro
  retorno: Retorno

  constructor(private livroService: LivroService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.livroForm = this.fb.group({
      titulo: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      autor: this.fb.control('',),
      editora: this.fb.control('',),
      sinopse: this.fb.control('',),
      avaliacao: this.fb.control('',),
    })
  }

  inserirLivro() {
    console.log(this.livroForm.value)
    return this.livroService.insertLivro(this.livroForm.value)
    .subscribe(retorno => {
      this.retorno = retorno,
      this.router.navigate(['/livro'])
    })
  }

  buscarLivro(titulo: string) {
    this.livroService.getLivroNome(titulo).subscribe(book => {
      this.livro = book
      console.log(book)
    })
  }

}
