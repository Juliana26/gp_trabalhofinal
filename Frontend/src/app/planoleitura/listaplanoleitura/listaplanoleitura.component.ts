import { Component, OnInit, Input } from '@angular/core';
import { PlanoLeitura } from '../planoleitura.model';

@Component({
  selector: 'app-listaplanoleitura',
  templateUrl: './listaplanoleitura.component.html',
  styleUrls: ['./listaplanoleitura.component.css']
})
export class ListaplanoleituraComponent implements OnInit {

  @Input() planoleitura : PlanoLeitura;

  constructor() { }

  ngOnInit() {
  }

}
