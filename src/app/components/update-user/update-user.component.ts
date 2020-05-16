import { FormGroup, Validators, NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild} from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html'
})

export class updateUserComponent implements OnInit{
  user: any;
  clickedUser: any;
  userInfo: any;
  users: any;
  @ViewChild('form') public form:NgForm
  constructor(
    private router: Router,
     private sharedService: SharedService) {
  }
  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.userInfo = message);
    this.clickedUser = this.userInfo;
  }
  updateUser(user) {
    this.users = JSON.parse(localStorage.getItem('user'))
    const itemIndex = this.users.findIndex(item => item.id === this.clickedUser.id);
    this.users[itemIndex] = this.form.value;
      localStorage.setItem('user',JSON.stringify(this.users))
          this.router.navigate(['users']);
  }

}
