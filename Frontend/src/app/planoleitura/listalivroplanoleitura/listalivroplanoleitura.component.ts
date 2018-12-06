import { Component, OnInit, Input } from '@angular/core';
import { Livro } from 'src/app/Services/livro.model';

@Component({
  selector: 'app-listalivroplanoleitura',
  templateUrl: './listalivroplanoleitura.component.html',
  styleUrls: ['./listalivroplanoleitura.component.css']
})
export class ListalivroplanoleituraComponent implements OnInit {

  @Input() livro: Livro

  constructor() { }

  ngOnInit() {
  }

}
