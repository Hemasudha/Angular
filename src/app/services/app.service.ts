import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class AppService {
  constructor(private http:HttpClient){}

  baseUrl: string = 'https://jsonplaceholder.typicode.com';
  requestHeaders = new HttpHeaders().set('Content-Type', 'text')
              .append('Authorization', localStorage.getItem('token'));


getUsers(){
  return this.http.get(this.baseUrl+'/users', {
    headers: this.requestHeaders
}
  );
}
getPosts(){
  return this.http.get(this.baseUrl+'/posts',{
    headers: this.requestHeaders
})
}
getComments(){
  return this.http.get(this.baseUrl+'/comments',{
    headers: this.requestHeaders
})
}
getUserById(id) {

  return this.http.get<User>(this.baseUrl + '/users/' + id);
}
updateUser(id:number,user:User){
  return this.http.put(this.baseUrl + '/users/'+id,user);
}

deleteUser(id: number) {
  return this.http.delete(this.baseUrl + '/users/' + id);
}

}



