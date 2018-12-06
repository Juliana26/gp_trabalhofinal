import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

import { Router } from '@angular/router'

import { UsuarioService } from '../Services/usuario.service'
import { Usuario } from '../Services/usuario.model'
import { Retorno } from '../Services/retorno.model'
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-alteracao.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})

export class UsuarioAlteracaoComponent implements OnInit {

  usuarioForm: FormGroup
  numberPattern = /^[0-9]*$/
  login : string
  retorno: Retorno;
  usuario: Usuario
  @Input() headerComponent: HeaderComponent

  constructor(public usuarioService: UsuarioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      login: this.fb.control({value: '', disabled: true}, [Validators.required]),
      senha: this.fb.control({value: '', disabled: true}, [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      datadenascimento: this.fb.control('', [Validators.required]),
      sexo: this.fb.control(''),
      estado: this.fb.control('', [Validators.maxLength(2)]),
      ativo: this.fb.control('true')
    })
    this.usuarioForm.get('usuario')
    this.login = localStorage.getItem('login');
    this.buscarUsuarioLogin(this.login)
  }

  buscarUsuarioLogin(login: string) {
    this.usuarioService.getUsuarioLogin(login).subscribe(usuario => {
        this.usuario = usuario[0]
        this.setValues();
    })
  }

  setValues() {
    this.usuarioForm.patchValue({
      nome: this.usuario.nome,
      email: this.usuario.email,
      login: this.usuario.login,
      senha: this.usuario.senha,
      datadenascimento: this.usuario.datadenascimento,
      sexo: this.usuario.sexo,
      estado: this.usuario.estado
    })
  }
  
  atualizarUsuario() {
    this.usuarioService.getUsuarioLogin(this.usuario.login).subscribe(usuario => {
      this.usuario = usuario[0]
      this.usuario.ativo=this.usuarioForm.value.ativo;
      this.usuario.datadenascimento=this.usuarioForm.value.datadenascimento;
      this.usuario.email=this.usuarioForm.value.email;
      this.usuario.estado=this.usuarioForm.value.estado;
      this.usuario.nome=this.usuarioForm.value.nome;
      this.usuario.sexo=this.usuarioForm.value.sexo;
      this.usuarioService.updateUsuario(this.usuario).subscribe(retorno => {
        this.retorno = retorno
        alert("Dados alterados com sucesso")
      });
    })
  }

  logout() {
    localStorage.setItem('login', 'null');
    this.router.navigate(['/home'])
  } 

  desativarConta() {
    this.usuarioService.getUsuarioLogin(this.login).subscribe(usuario => {
      this.usuario = usuario[0]
      this.usuario.ativo = false
      this.usuarioService.updateUsuario(this.usuario).subscribe(retorno => {
        this.retorno = retorno
        alert("Conta desativada com sucesso!")
        this.logout()
      })
    })
  } 
}