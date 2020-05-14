import { usersComponent } from './../users/users.component';
import { User } from './../../models/users';
import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector:'app-popup',
  templateUrl:'./popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class popupComponent implements OnInit{
  @Input() userInfo;
  @Output() onFinish=new EventEmitter();
  content: any


  constructor(){}
  ngOnInit(){

    console.log(this.userInfo)

    // this.content = this.popovers

  }
  ngAfterViewInit(){
    // console.log(this.popTemplate)
  }
  finished(){
  }

}
