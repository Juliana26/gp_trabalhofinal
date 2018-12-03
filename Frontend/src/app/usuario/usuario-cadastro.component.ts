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
      senha: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), Validators.minLength(6)]),
      datadenascimento: this.fb.control('', [Validators.required]),
      sexo: this.fb.control(''),
      estado: this.fb.control('', [Validators.maxLength(2)]),
      ativo: this.fb.control('true')
    })
  }
  
  inserirUsuario() {
    return this.usuarioService.insertUsuario(this.usuarioForm.value)
      .subscribe(retorno => {
        this.retorno = retorno
        alert("Usuário inserido com sucesso!")
        this.router.navigate(['/login'])
      })
  }

  buscarUsuario(nome: string) {
    this.usuarioService.getUsuarioNome(nome).subscribe(usuario => this.usuario = usuario)
  }

  buscarUsuarioLogin(login: string) {
    this.usuarioService.getUsuarioNome(login).subscribe(usuario => this.usuario = usuario)
  }
}

