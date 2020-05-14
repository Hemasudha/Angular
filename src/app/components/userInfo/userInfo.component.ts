import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-userInfo',
  templateUrl: './userInfo.component.html'
})
export class userInfoComponent implements OnInit{
  @Input() public user: any;
  @Output() onUpdate=new EventEmitter();
  userForm: FormGroup;
  showForm: boolean = true;

constructor(private appService:AppService,
  private router:Router,private formBuilder:FormBuilder,private bsModalRef: BsModalRef,
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
update(id,user){
    this.appService.updateUser(id,this.userForm.value)
      .subscribe(
        data => {
          this.showForm = false
          this.onUpdate.emit(data)
          this.router.navigate(['users']);
        })
}
}
