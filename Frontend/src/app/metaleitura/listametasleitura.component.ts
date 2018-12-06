import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../Services/usuario.model';

import { MetaLeitura } from './metaleitura.model';

@Component({
  selector: 'app-listametasleitura',
  templateUrl: './listametasleitura.component.html',
  styleUrls: ['./metaleitura.component.css']
})
export class ListaMetasLeituraComponent implements OnInit {

  metasleitura: MetaLeitura[];
  login: string
  usuario: Usuario

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.login = localStorage.getItem('login')
    this.buscaMetas()
  }

  buscaMetas() {
    this.usuarioService.getUsuarioLogin(this.login).subscribe(user => {
        this.usuario = user[0]
        this.metasleitura = this.usuario.meta_leitura
    })
  }
}