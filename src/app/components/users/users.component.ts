import { Router } from '@angular/router';
  import { AppService } from 'src/app/services/app.service';
  import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
  import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
  import { userInfoComponent } from '../userInfo/userInfo.component';
import { User } from 'src/app/models/users';
import { SharedService } from '../../shared.service';


  @Component({
    selector: 'app-users',
    templateUrl:'./users.component.html',
    styleUrls:['./users.component.scss']
  })
  export class usersComponent implements OnInit{
    // user:User[]
    users;
     page: Number = 1;
    modalRef: BsModalRef;
    showDiv = false;
    userInfo: any;
    context;
    message: string;
    constructor(private appService:AppService,
      private modalService: BsModalService,
      private router:Router, private sharedService: SharedService){
      }
    ngOnInit(){
    this.appService.getUsers().subscribe(res=>{
        this.users=res
      })
      this.sharedService.sharedMessage.subscribe(message => this.message = message)
    }
    ViewUserModal(i) {
      this.modalRef = this.modalService.show(userInfoComponent, { class: 'modal-md',
      initialState: {
        user: this.users[i],
        } });
      this.modalRef.content.closeBtn = 'Close';
      };

      getpopOver(i){
        this.context = {
          username: this.users[i].name,
          phone: this.users[i].phone
        };

      }
      editUser(i){
        this.showDiv = true
        this.userInfo= this.users[i]
        // console.log(this.userInfo)
        this.sharedService.nextMessage(this.userInfo);
        this.router.navigate(['/edit'])
      }
      changeCount(data) {
        console.log(data);
        this.showDiv = true;
      }
      backTousers(data){
        console.log(data)
      }
      deleteUser(user: User): void {
        this.appService.deleteUser(user.id)
          .subscribe( data => {
            this.users = this.users.filter(u => u !== user);
          })
      };
}
