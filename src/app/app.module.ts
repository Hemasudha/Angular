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


@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    navbarComponent,
    usersComponent,
    postsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
