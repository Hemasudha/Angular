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
    this.username=JSON.parse(localStorage.getItem('userDetails')).email.replace(/@[^@]+$/, '');  }

  logOut() {
    localStorage.clear()
  }
}

