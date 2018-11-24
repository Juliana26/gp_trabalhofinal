import { Component, OnInit } from '@angular/core';
import { UsuarioService, Retorno } from '../Services/usuario.service'
import { Usuario } from '../Services/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
  retorno: Retorno;
  usuario: Usuario[];
  novousuario: Usuario;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.deletaUsuario();
  }
  buscarUsuário() {
    this.usuarioService.getUsuarioNome('bloodseeker').subscribe(usuario => this.usuario = usuario)
    return;
  }

  inserirUsuario() {
    this.novousuario = new Usuario;
    this.novousuario.nome = 'bloodfollen';
    this.novousuario.login = 'blood';
    this.novousuario.senha = 'follen';
    this.usuarioService.insertUsuario(this.novousuario).subscribe(retorno => this.retorno = retorno);
  }

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
  }
}
