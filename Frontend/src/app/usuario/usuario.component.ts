import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service'
import { Usuario } from './usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  retono: string;
  usuario: Usuario[];
  novousuario: Usuario;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuario('bloodseeker').subscribe(usuario => this.usuario = usuario)
    console.log(this.usuario);
    this.inserirUsuario();
  }
  inserirUsuario() {
    this.novousuario = new Usuario;
    this.novousuario.nome = 'bloodfollen';
    this.novousuario.login = 'blood';
    this.novousuario.senha = 'follen';
    this.usuarioService.insertUsuario(this.novousuario).subscribe(retorno => this.retono = retorno);
  }
}
