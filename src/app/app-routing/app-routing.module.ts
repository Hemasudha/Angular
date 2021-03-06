import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router"
import { CommonModule } from '@angular/common';
import { loginComponent } from '../components/login/login.component';
import { usersComponent } from '../components/users/users.component';
import { postsComponent } from '../components/posts/posts.component';
import { CommentsComponent } from '../components/comments/comments.component';
import { updateUserComponent } from '../components/update-user/update-user.component';
import { errorComponent } from '../components/error/error.component';
const appRoutes:Routes=[
  {
    path: "login",
    component: loginComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path:"users",
    component:usersComponent
  },

  {
    path:"posts",
    component:postsComponent
  },
  {
    path:"comments",
    component:CommentsComponent
  },
  {
    path:"edit",
    component:updateUserComponent
  },
  {
    path:"**",
    component: errorComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
