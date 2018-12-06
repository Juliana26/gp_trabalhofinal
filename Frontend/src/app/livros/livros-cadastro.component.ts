import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Router } from '@angular/router'

import { LivroService } from '../Services/livro.service'
import { Livro } from '../Services/livro.model'
import { Retorno } from '../Services/retorno.model';


@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosCadastroComponent implements OnInit {

  livroForm: FormGroup
  livro: Livro
  retorno: Retorno

  constructor(private livroService: LivroService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.livroForm = this.fb.group({
      titulo: this.fb.control('', Validators.required),
      autor: this.fb.control(''),
      editora: this.fb.control(''),
      sinopse: this.fb.control(''),
      avaliacao: this.fb.control(''),
    })
  }

  inserirLivro() {
    return this.livroService.insertLivro(this.livroForm.value)
    .subscribe(retorno => {
      this.retorno = retorno,
      alert("Livro cadastrado com sucesso")
      this.buildForm()
      this.router.navigate(['/listaLivro'])
    })
  }

  buscarLivro(titulo: string) {
    this.livroService.getLivroTitulo(titulo).subscribe(book => {
      this.livro = book
    })
  }

}
