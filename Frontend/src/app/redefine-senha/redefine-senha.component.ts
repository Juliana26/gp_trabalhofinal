import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Services/usuario.model'
import { RedefineSenha } from './redefine-senha.model';
import { Retorno } from '../Services/retorno.model';

@Component({
  selector: 'app-redefine-senha',
  templateUrl: './redefine-senha.component.html',
  styleUrls: ['./redefine-senha.component.css']
})
export class RedefineSenhaComponent implements OnInit {

  formRedefineSenha: FormGroup
  usuario: Usuario
  retorno: Retorno

  constructor(private usuarioService: UsuarioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formRedefineSenha = this.fb.group({
      login: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), Validators.minLength(6)]),
      confirmacao: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), Validators.minLength(6)])
    })
  }

  redefineSenha(redefine: RedefineSenha) {
    if (redefine.senha !== redefine.confirmacao) {
      alert("Senhas não coincidem")
    } else {
      this.usuarioService.getUsuarioLogin(redefine.login).subscribe(usuario => {
        this.usuario = usuario[0]
        this.usuario.ativo = true
        this.usuario.senha = redefine.senha
        this.usuarioService.updateUsuario(this.usuario).subscribe(retorno => {
          this.retorno = retorno
          alert("Redefinição de senha realizada com sucesso!")
          this.router.navigate(['/login'])
        })
      })
    }
  }

}
