import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl:'./posts.component.html',
  styleUrls:['./posts.component.scss']
})
export class postsComponent implements OnInit{
  posts: any;
  page: Number = 1;
  constructor(private appService:AppService){}
  ngOnInit(){
    this.appService.getPosts().subscribe(res=>{
      this.posts = res;
    })
  }
}
