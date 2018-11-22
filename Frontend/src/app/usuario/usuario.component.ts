import { Component, OnInit } from '@angular/core';
import { UsuarioService, Cat } from '../usuario.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  gato: Cat;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getCat('bloodseeker').subscribe(gato => this.gato = gato)
  }
  getgato(){
  }
}
