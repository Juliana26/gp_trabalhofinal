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
  }

  usuariologado() {
    if(localStorage.getItem('login') != 'null'){
      return true;
    }
    return false;
  }

  logout() {
    localStorage.setItem('login', 'null');
    console.log(localStorage.getItem('login'))
    this.router.navigate(['/home'])
  }

}
