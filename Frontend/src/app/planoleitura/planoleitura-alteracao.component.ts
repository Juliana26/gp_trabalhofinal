import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../Services/usuario.model';
import { Retorno } from '../Services/retorno.model';

import { Livro } from '../Services/livro.model';
import { LivroService } from '../Services/livro.service';
import { PlanoLeitura } from './planoleitura.model';

@Component({
  selector: 'app-planoleituraalteracao',
  templateUrl: './planoleitura-alteracao.component.html',
  styleUrls: ['./planoleitura.component.css']
})
export class PlanoleituraalteracaoComponent implements OnInit {

  planoLeituraForm: FormGroup
  livroFormSearch: FormGroup
  planoLeitura: PlanoLeitura[]
  livros: Livro[]
  livro: Livro
  usuario: Usuario
  login: string
  retorno: Retorno
  plano: PlanoLeitura

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder, private livroService: LivroService) { }

  ngOnInit() {
    this.setInitialValues();
    this.setValuesSearch()
    this.getBooks();
    this.login = localStorage.getItem('login')
    this.getUser()
  }

  getUser() {
    this.usuarioService.getUsuarioLogin(this.login).subscribe(usuario => {
      this.usuario = usuario[0]
    })
  }

  setValuesSearch() {
    this.livroFormSearch = this.fb.group({
      tituloSearch: this.fb.control('')
    })
  }

  setInitialValues() {
    this.planoLeituraForm = this.fb.group({
      nome_livro: this.fb.control('', [Validators.required]),
      inicio_leitura: this.fb.control('', [Validators.required]),
      termino_leitura: this.fb.control('', [Validators.required]),
      comentarios: this.fb.control('')
    })
  }

  getBooks() {
    this.livroService.getLivros().subscribe(books => {
      this.livros = books
    })
  }

  alterarPlanoLeitura() {
    let planoLeitura : PlanoLeitura;
    this.planoLeitura = []
    for(let i=0; i<this.usuario.periodo_leitura.length; i++){
      if(this.planoLeituraForm.value.nome_livro === this.usuario.periodo_leitura[i].nome_livro){
        planoLeitura = this.usuario.periodo_leitura[i];
        planoLeitura.inicio_leitura = this.planoLeituraForm.value.inicio_leitura;
        planoLeitura.termino_leitura = this.planoLeituraForm.value.termino_leitura;
        planoLeitura.comentarios = this.planoLeituraForm.value.comentarios;
        this.planoLeitura.push(planoLeitura);
      }
      else {
        this.planoLeitura.push(this.usuario.periodo_leitura[i]);
      }
    }
    this.usuario.periodo_leitura = this.planoLeitura
    this.usuarioService.updateUsuario(this.usuario).subscribe(retorno => {
      this.retorno = retorno;
      alert("Plano alterado com sucesso");
    })
  }

  setValues(plano: PlanoLeitura){
    this.planoLeituraForm.patchValue({
      nome_livro: plano.nome_livro,
      inicio_leitura: plano.inicio_leitura,
      termino_leitura: plano.termino_leitura,
      comentarios: plano.comentarios
    })
  }

  carregaPlano(){
    let titulo;
    let check = false;
    for(let i=0; i<this.usuario.periodo_leitura.length; i++){
      titulo = this.usuario.periodo_leitura[i].nome_livro;
      if(titulo === this.livroFormSearch.value.tituloSearch){
        this.plano = this.usuario.periodo_leitura[i];
        this.setValues(this.plano)
        this.setValuesSearch()
        check = true;
      }
    }
    if(check === false){
      alert('Não há plano cadastrada com esse exemplar!')
      this.setValuesSearch()
      this.setInitialValues()
    }
  }

}
