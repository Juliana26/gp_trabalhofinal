import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../Services/usuario.model';
import { Retorno } from '../Services/retorno.model';

import { MetaLeitura } from './metaleitura.model';
import { Livro } from '../Services/livro.model';
import { Status } from './status.model';
import { LivroService } from '../Services/livro.service';

@Component({
  selector: 'app-metaleitura-alteracao',
  templateUrl: './metaleitura-alteracao.component.html',
  styleUrls: ['./metaleitura.component.css']
})
export class MetaleituraAlteracaoComponent implements OnInit {

  metaLeituraForm: FormGroup
  livroFormSearch: FormGroup
  metaleitura: MetaLeitura[]
  livros: Livro[]
  livro: Livro
  usuario: Usuario
  login: string
  retorno: Retorno
  status: Status
  meta: MetaLeitura

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
    this.metaLeituraForm = this.fb.group({
      nome_livro: this.fb.control('', [Validators.required]),
      tempo_leitura: this.fb.control('', [Validators.required]),
      data_inicio_previsao: this.fb.control('', [Validators.required]),
      data_termino_previsao: this.fb.control('', [Validators.required]),
      status: this.fb.control('', [Validators.required])
    })
  }

  getBooks() {
    this.livroService.getLivros().subscribe(books => {
      this.livros = books
    })
  }

  alterarMetaLeitura() {
    let metaLeitura : MetaLeitura;
    this.metaleitura = []
    for(let i=0; i<this.usuario.meta_leitura.length; i++){
      if(this.metaLeituraForm.value.nome_livro === this.usuario.meta_leitura[i].nome_livro){
        metaLeitura = this.usuario.meta_leitura[i];
        metaLeitura.data_inicio_previsao = this.metaLeituraForm.value.data_inicio_previsao;
        metaLeitura.data_termino_previsao = this.metaLeituraForm.value.data_termino_previsao;
        metaLeitura.tempo_leitura = this.metaLeituraForm.value.tempo_leitura;
        metaLeitura.status = this.metaLeituraForm.value.status;
        this.metaleitura.push(metaLeitura);
      }
      else {
        this.metaleitura.push(this.usuario.meta_leitura[i]);
      }
    }
    this.usuario.meta_leitura = this.metaleitura
    this.usuarioService.updateUsuario(this.usuario).subscribe(retorno => {
      this.retorno = retorno;
      alert("Meta alterada com sucesso");
    })
  }

  setValues(meta: MetaLeitura){
    this.metaLeituraForm.patchValue({
      nome_livro: meta.nome_livro,
      tempo_leitura: meta.tempo_leitura,
      data_inicio_previsao: meta.data_inicio_previsao,
      data_termino_previsao: meta.data_termino_previsao,
      status: meta.status
    })
  }

  carregaMeta(){
    let titulo;
    let check = false;
    for(let i=0; i<this.usuario.meta_leitura.length; i++){
      titulo = this.usuario.meta_leitura[i].nome_livro;
      if(titulo === this.livroFormSearch.value.tituloSearch){
        this.meta = this.usuario.meta_leitura[i];
        this.setValues(this.meta)
        this.setValuesSearch()
        check = true;
      }
    }
    if(check === false){
      alert('Não há meta cadastrada com esse exemplar!')
      this.setValuesSearch()
      this.setInitialValues()
    }
  }
}