import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../Services/usuario.model'
import { Retorno } from '../Services/retorno.model'

import { MetaLeitura } from './metaleitura.model'
import { LivroService } from '../Services/livro.service';
import { Livro } from '../Services/livro.model';
import { Status } from './status.model';

@Component({
  selector: 'app-metaleitura-cadastro',
  templateUrl: './metaleitura-cadastro.component.html',
  styleUrls: ['./metaleitura.component.css']
})
export class MetaleituraCadastroComponent implements OnInit {

  metaLeituraForm: FormGroup
  metaleitura: MetaLeitura[]
  livros: Livro[]
  livro: Livro
  usuario: Usuario
  login: string
  retorno: Retorno
  status: Status

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder, private livroService: LivroService) { }

  ngOnInit() {
    this.setInitialValues();
    this.getBooks();
    this.login = localStorage.getItem('login')
    this.getUser()
  }

  getUser() {
    this.usuarioService.getUsuarioLogin(this.login).subscribe(usuario => {
      this.usuario = usuario[0]
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

  inserirMetaLeitura() {
    this.usuario.meta_leitura.push(this.metaLeituraForm.value)
    this.usuarioService.updateUsuario(this.usuario).subscribe(retorno => {
      this.retorno = retorno;
      alert("Meta cadastrada com sucesso");
    })
  }
}
