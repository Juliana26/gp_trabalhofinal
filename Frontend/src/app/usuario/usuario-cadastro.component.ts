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
    this.buildForm()
  }

  buildForm() {
    this.usuarioForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
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
    this.buscarUsuarioLogin(this.usuarioForm.value.login);
    if(this.usuario.login === this.usuarioForm.value.login){
      alert('Login não disponível! Por favor escolha outro e tente novamente!');
    } else {
      return this.usuarioService.insertUsuario(this.usuarioForm.value)
      .subscribe(retorno => {
        this.retorno = retorno
        alert("Usuário inserido com sucesso!")
        this.buildForm()
        this.router.navigate(['/login'])
      })
    }    
  } 

  buscarUsuarioLogin(login: string) {
    this.usuarioService.getUsuarioNome(login).subscribe(usuario => this.usuario = usuario)
  }
}

