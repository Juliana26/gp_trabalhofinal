import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
    this.usuariologado();
  }

  usuariologado() : boolean{
    if (localStorage.getItem('login') !== 'null') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.setItem('login', 'null');
    this.router.navigate(['/home'])
  }

}
