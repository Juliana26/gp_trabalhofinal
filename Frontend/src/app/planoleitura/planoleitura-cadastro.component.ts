import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../Services/usuario.model'
import { Retorno } from '../Services/retorno.model'

import { PlanoLeitura } from './planoleitura.model'
import { Livro } from '../Services/livro.model';
import { LivroService } from '../Services/livro.service';

@Component({
  selector: 'app-planoleituracadastro',
  templateUrl: './planoleitura-cadastro.component.html',
  styleUrls: ['./planoleitura.component.css']
})
export class PlanoleituracadastroComponent implements OnInit {

  planoLeituraForm: FormGroup
  planoLeitura: PlanoLeitura
  livros: Livro[]
  login: string
  usuario: Usuario
  retorno: Retorno

  constructor(private usuarioService: UsuarioService, private livroService: LivroService, private fb: FormBuilder) { }

  ngOnInit() {
    this.setInitialValues();
    this.getBooks();
    this.login = localStorage.getItem('login');
    this.getUser();
  }

  setInitialValues() {
    this.planoLeituraForm = this.fb.group({
      nome_livro: this.fb.control('', [Validators.required]),
      inicio_leitura: this.fb.control('', [Validators.required]),
      termino_leitura: this.fb.control('', [Validators.required]),
      comentarios: this.fb.control('')
    })
  }

  getUser() {
    this.usuarioService.getUsuarioLogin(this.login).subscribe(user => {
      this.usuario = user[0]
    })
  }

  getBooks() {
    this.livroService.getLivros().subscribe(books => this.livros = books)
  }

  inserirPlanoLeitura() {
    if (!this.usuario.periodo_leitura) {
      this.usuario.periodo_leitura = [];
    }
    this.usuario.periodo_leitura.push(this.planoLeituraForm.value)
    this.usuarioService.updateUsuario(this.usuario).subscribe(retorno => {
      this.retorno = retorno;
      alert("Período de leitura cadastrado com sucesso");
    })
  }



}
