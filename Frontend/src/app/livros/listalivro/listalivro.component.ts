import { Component, OnInit, Input } from '@angular/core';
import { Livro } from 'src/app/Services/livro.model';

@Component({
  selector: 'app-listalivro',
  templateUrl: './listalivro.component.html',
  styleUrls: ['./listalivro.component.css']
})
export class ListalivroComponent implements OnInit {

  @Input() livro: Livro;

  constructor() { }

  ngOnInit() {
  }

}
