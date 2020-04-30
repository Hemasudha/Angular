import { loginComponent } from './../../components/login/login.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class navbarComponent implements OnInit {
public username:any;
  constructor() { }
  ngOnInit() {
    let email=JSON.parse(localStorage.getItem('userDetails')).email ;
    this.username = email.split('@')[0].toUpperCase()
  }

  logOut() {
    localStorage.clear()
  }
}

