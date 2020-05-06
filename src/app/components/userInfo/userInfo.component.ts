import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-userInfo',
  templateUrl: './userInfo.component.html'
})
export class userInfoComponent implements OnInit{
  @Input() public data: any;
  userForm: FormGroup;

constructor(private formBuilder:FormBuilder,private bsModalRef: BsModalRef,
  ){}
ngOnInit(){
  this.userForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    username: ['', [Validators.required]],
    city: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });
}

}
