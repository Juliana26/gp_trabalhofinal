import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../Services/usuario.service';

import { Login } from './login.model'
import { Usuario } from '../Services/usuario.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: Login
  usuarioLogado: Usuario
  formLogin: FormGroup

  constructor(private usuarioService: UsuarioService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: this.formBuilder.control('', [Validators.required]),
      senha: this.formBuilder.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
    })
  }

  logar(user: Login) {
    this.loginUsuario = user
    this.usuarioService.getUsuarioLogin(user.login).subscribe(usuario => {
      this.usuarioLogado = usuario[0]
      this.isLogged()
    })
  }

  isLogged() {
    if (this.usuarioLogado.senha == this.loginUsuario.senha && this.usuarioLogado.ativo) {
      localStorage.setItem('login', this.usuarioLogado.login)
      this.router.navigate(['/home'])
    } else {
      if(this.usuarioLogado.ativo === false){
        alert("Usuário inativo! Por favor, defina uma nova senha.")
        this.router.navigate(['/redefineSenha'])
      } else {
        alert('Dados inválidos!')
      }
    }
  }
}