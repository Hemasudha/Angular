import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http:HttpClient){}

  baseUrl: string = 'https://jsonplaceholder.typicode.com';


getUsers(){
  return this.http.get(this.baseUrl+'/users');
}
getPosts(){
  return this.http.get(this.baseUrl+'/posts')
}
getComments(){
  return this.http.get(this.baseUrl+'/comments')
}
}


