import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../Services/usuario.model';

import { PlanoLeitura } from './planoleitura.model';

@Component({
    selector: 'app-listaplanosleitura',
    templateUrl: './listaplanosleitura.component.html',
    styleUrls: ['./planoleitura.component.css']
})
export class ListaplanosleituraComponent implements OnInit {

    planosleitura: PlanoLeitura[];
    login: string
    usuario: Usuario

    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.login = localStorage.getItem('login')
        this.buscaPlanos()
    }

    buscaPlanos() {
        this.usuarioService.getUsuarioLogin(this.login).subscribe(user => {
            this.usuario = user[0]
            this.planosleitura = this.usuario.periodo_leitura
        })
    }
}