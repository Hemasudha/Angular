import { AppService } from 'src/app/services/app.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl:'./users.component.html',
  styleUrls:['./users.component.scss']
})
export class usersComponent implements OnInit{
  users: any;
  page: Number = 1;
  constructor(private appService:AppService){}
  ngOnInit(){
  this.appService.getUsers().subscribe(res=>{
      this.users=res
    })
  }

}
