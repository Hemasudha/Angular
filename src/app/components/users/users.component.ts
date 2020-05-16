import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { userModalComponent } from '../user-modal/user-modal.component';
import { SharedService } from '../../shared.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

  @Component({
    selector: 'app-users',
    templateUrl:'./users.component.html',
    styleUrls:['./users.component.scss']
  })
  export class usersComponent implements OnInit{
    users: any;
    data: any;
     page: Number = 1;
    modalRef: BsModalRef;
    userInfo: any;
    context;
    message: any;
    showAlert:boolean = false;
    alerts: any[] = [{
      type: 'success',
      msg: `Deleted successfully.`,
      timeout: 5000
    }];

    constructor(private appService:AppService,
      private modalService: BsModalService,
      private router:Router,
      private sharedService: SharedService,
      ){
      }
    ngOnInit(){
      this.getUsers();
      this.users = JSON.parse(localStorage.getItem('user'))
      this.sharedService.sharedMessage.subscribe(message => this.message = message)
    }
    getUsers(){
      this.appService.getUsers().subscribe(res=>{
        this.data=res
         localStorage.setItem('user',JSON.stringify(this.data))
        console.log(this.data)
      })
    }
    ViewUserModal(i) {
      this.modalRef = this.modalService.show(userModalComponent, { class: 'modal-md',
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
      editUser(user){
        const itemIndex = this.users.findIndex(item => item.id === user.id);
        this.userInfo= this.users[itemIndex]
        this.sharedService.nextMessage(this.userInfo);
        this.router.navigate(['/edit'])
      }
      deleteUser(user) {
           let index = this.users.indexOf(user);
           this.users.splice(index,1);
           this.showAlert = true;

      };
      onClosed(dismissedAlert: AlertComponent): void {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
      }
}
