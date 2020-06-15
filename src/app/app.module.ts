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
import {userModalComponent} from './components/user-modal/user-modal.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import {NgxPaginationModule} from 'ngx-pagination'
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

import {SharedService} from './shared.service';
import { errorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    navbarComponent,
    usersComponent,
    postsComponent,
    CommentsComponent,
    userModalComponent,
    updateUserComponent,
    errorComponent
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
    PopoverModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [AppService,BsModalRef, SharedService
    ],
  bootstrap: [AppComponent],
  entryComponents:[userModalComponent]
})
export class AppModule { }
