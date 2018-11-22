import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service'
import { Usuario } from './usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuario('bloodseeker').subscribe(usuario => this.usuario = usuario)
    console.log(this.usuario);
  }
}
