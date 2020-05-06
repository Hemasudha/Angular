  import { AppService } from 'src/app/services/app.service';
  import { Component, OnInit } from '@angular/core';
  import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
  import { userInfoComponent } from '../userInfo/userInfo.component';

  @Component({
    selector: 'app-users',
    templateUrl:'./users.component.html',
    styleUrls:['./users.component.scss']
  })
  export class usersComponent implements OnInit{
    users: any;
    page: Number = 1;
    modalRef: BsModalRef;
    constructor(private appService:AppService,private modalService: BsModalService){}
    ngOnInit(){
    this.appService.getUsers().subscribe(res=>{
        this.users=res
      })
    }
    ViewUserModal(i) {
      this.modalRef = this.modalService.show(userInfoComponent, { class: 'modal-md',
      initialState: {
        data: this.users[i],
        } });
      this.modalRef.content.closeBtn = 'Close';
      };

  }
