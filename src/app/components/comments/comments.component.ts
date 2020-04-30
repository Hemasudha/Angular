import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: any;
  constructor(private appService:AppService) { }
  ngOnInit() {
    this.appService.getComments().subscribe(res=>{
      this.comments = res;
    })
  }
}
