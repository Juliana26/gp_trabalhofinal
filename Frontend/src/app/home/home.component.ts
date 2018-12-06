import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.usuariologado()
  }

  usuariologado() : boolean {
    if (localStorage.getItem('login') !== 'null') {
      return true;
    } else {
      return false;
    }
  }

}
