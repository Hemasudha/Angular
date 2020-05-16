import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"


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
}



