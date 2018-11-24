import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../../Services/usuario.service';

import { Login } from './login.model'
import { Usuario } from '../usuario.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: Login  
  usuario: any
  formLogin: FormGroup

  isRedefinirSenha: boolean = false

  constructor(private usuarioService: UsuarioService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: this.formBuilder.control('', [Validators.required]),
      senha: this.formBuilder.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
    })
    this.loginUsuario = this.formLogin.value
  }

  logar(user: Login) {
    this.buscarUsuariobyLogin(user)
    if(this.usuario.login === user.login && this.usuario.senha === user.senha){
      this.router.navigate(['home']);
    }
    else {
      console.log('Usuário não cadastrado');
    }

  }

  buscarUsuariobyLogin(user: Login){
    console.log(this.usuario)
    this.usuarioService.getUsuarioLogin(user.login).subscribe(usuario => this.usuario = usuario)
    console.log(this.usuario)
  }

}