import { updateUserComponent } from './components/update-user/update-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppService} from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { loginComponent } from './components/login/login.component';
import {usersComponent} from './components/users/users.component'
import {navbarComponent} from './shared/navbar/navbar.component';
import { postsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import {userInfoComponent} from './components/userInfo/userInfo.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import {NgxPaginationModule} from 'ngx-pagination'
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';
import {SharedService} from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    navbarComponent,
    usersComponent,
    postsComponent,
    CommentsComponent,
    userInfoComponent,
    updateUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [AppService,BsModalRef, SharedService
    ],
  bootstrap: [AppComponent],
  entryComponents:[userInfoComponent]
})
export class AppModule { }
