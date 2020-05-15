import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { User } from './../../models/users';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output, AfterViewInit, OnChanges } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html'
})

export class updateUserComponent implements OnInit, OnChanges {
  @Input() userData: any;
  user: any;
  // @Input('userData') set setData(value) {
  //   this.user = value;
  //  }
  @Output() closePane = new EventEmitter();
  editForm: FormGroup
  clickedUser: any;
  userInfo: {};


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appService: AppService, private sharedService: SharedService) {
  }
  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.userInfo = message);
    console.log(this.userInfo);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
    this.clickedUser = this.userInfo;


  }

  ngOnChanges() {
    console.log(this.userData);
  };
  updateUser(id, user) {
    this.appService.updateUser(id, this.editForm.value)
      .subscribe(
        data => {
          console.log(data)
          this.closePane.emit(data);

          this.router.navigate(['users']);
        },
        error => {
          alert(error);
        });
  }

}
