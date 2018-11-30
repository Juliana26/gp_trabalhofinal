import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Router } from '@angular/router'

import { UsuarioService } from '../Services/usuario.service'
import { Usuario } from '../Services/usuario.model'
import { Retorno } from '../Services/retorno.model'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})

export class UsuarioCadastroComponent implements OnInit {

  usuarioForm: FormGroup
  numberPattern = /^[0-9]*$/

  retorno: Retorno;
  usuario: Usuario;
  constructor(public usuarioService: UsuarioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      login: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      datadenascimento: this.fb.control('', [Validators.required]),
      sexo: this.fb.control('', [Validators.required]),
      estado: this.fb.control('', [Validators.required, Validators.maxLength(2)]),
      ativo: this.fb.control('true')
    })
  }

  inserirUsuario() {
    console.log(this.usuarioForm.value)
    return this.usuarioService.insertUsuario(this.usuarioForm.value)
    .subscribe(retorno => {
      this.retorno = retorno,
      this.router.navigate(['/login'])
    })
  }
  
  buscarUsuario(nome: string) {
    this.usuarioService.getUsuarioNome(nome).subscribe(usuario => this.usuario = usuario)
  }

  buscarUsuarioLogin(login: string) {
    this.usuarioService.getUsuarioNome(login).subscribe(usuario => this.usuario = usuario)
  }

  /*
  atualizarUsuario() {
    this.usuarioService.getUsuarioNome('bloodfollen').subscribe(usuario => {
      this.usuario = usuario;
      console.log(this.usuario[0].login);
      this.usuario[0].login = 'doolb';
      console.log(this.usuario[0].login);
      this.usuarioService.updateUsuario(this.usuario[0]).subscribe(retorno => this.retorno = retorno);
    })
  }
  deletaUsuario(){
    this.usuarioService.deleteUsuario('bloodfollen').subscribe(retorno => this.retorno = retorno);
  } */
}

