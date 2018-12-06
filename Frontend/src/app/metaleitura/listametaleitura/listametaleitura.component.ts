import { Component, OnInit, Input } from '@angular/core';
import { MetaLeitura } from '../metaleitura.model';

@Component({
  selector: 'app-listametaleitura',
  templateUrl: './listametaleitura.component.html',
  styleUrls: ['./listametaleitura.component.css']
})
export class ListametaleituraComponent implements OnInit {

  @Input() metaleitura: MetaLeitura

  constructor() { }

  ngOnInit() {
  }

}
