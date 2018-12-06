import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { LivroService } from '../Services/livro.service'
import { Livro } from '../Services/livro.model'
import { Retorno } from '../Services/retorno.model';


@Component({
  selector: 'app-livros-alteracao',
  templateUrl: './livros-alteracao.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosAlteracaoComponent implements OnInit {

  livroForm: FormGroup
  livroFormSearch: FormGroup
  livro: Livro
  retorno: Retorno
  titulo: string
  livros: Livro[];

  constructor(private livroService: LivroService, private fb: FormBuilder) { }

  ngOnInit() {
    
    this.setValuesInicial()

    this.setValuesInicialSearch()

    this.getLivros()
  }

  setValuesInicialSearch() {
    this.livroFormSearch = this.fb.group({
      tituloSearch: this.fb.control('')
    })
  }

  setValuesInicial() {
    this.livroForm = this.fb.group({
      titulo: this.fb.control('', [Validators.required]),
      autor: this.fb.control(''),
      editora: this.fb.control(''),
      sinopse: this.fb.control(''),
      avaliacao: this.fb.control(''),
    })
  }

  setValues() {
      this.livroForm.patchValue({
        titulo: this.livro.titulo,
        autor: this.livro.autor,
        editora: this.livro.editora,
        sinopse: this.livro.sinopse,
        avaliacao: this.livro.avaliacao
      })
  }

  buscarLivro() {
    this.titulo = this.livroFormSearch.value.tituloSearch
    this.livroService.getLivroTitulo(this.titulo).subscribe(book => {
      this.livro = book[0]
      this.setValues()
      this.setValuesInicialSearch()
    })
  }

  atualizarLivro() {
    this.livro.titulo = this.livroForm.value.titulo
    this.livro.autor = this.livroForm.value.autor
    this.livro.editora = this.livroForm.value.editora
    this.livro.sinopse = this.livroForm.value.sinopse
    this.livro.avaliacao = this.livroForm.value.avaliacao
    this.livroService.updateLivro(this.livro).subscribe(retorno => {
      this.retorno = retorno
      alert('Livro atualizado com sucesso')
    })
  }

  deletarLivro() {
    alert('Deseja mesmo excluir esse livro?')
    this.livroService.deleteLivro(this.livro.titulo).subscribe(retorno => {
      this.retorno = retorno
      alert('Livro excluido com sucesso!')
      this.setValuesInicial()
    })
  }

  getLivros() {
    this.livroService.getLivros().subscribe(books => this.livros = books)
  }
}
