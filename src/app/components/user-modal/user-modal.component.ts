import { Component, Input, OnInit,  ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html'
})
export class userModalComponent implements OnInit{
  @Input() public user: any;
  showForm: boolean = true;
  users: any;
  @ViewChild('f') public userForm: NgForm;

constructor(public bsModalRef: BsModalRef,
  ){}
ngOnInit(){

}
updateModal(user) {
  this.users = JSON.parse(localStorage.getItem('user'))
  const itemIndex = this.users.findIndex(item => item.id === user.id);
  this.users[itemIndex] = this.userForm.value;
    localStorage.setItem('user',JSON.stringify(this.users))
    this.bsModalRef.hide();
}
}
