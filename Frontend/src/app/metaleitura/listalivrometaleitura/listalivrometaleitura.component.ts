import { Component, OnInit, Input } from '@angular/core';
import { Livro } from 'src/app/Services/livro.model';

@Component({
  selector: 'app-listalivrometaleitura',
  templateUrl: './listalivrometaleitura.component.html',
  styleUrls: ['./listalivrometaleitura.component.css']
})
export class ListalivrometaleituraComponent implements OnInit {

  @Input() livro: Livro

  constructor() { }

  ngOnInit() {
  }

}
