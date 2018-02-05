import { Injectable , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Response, Http } from "@angular/http";
 
import { User } from '../models/user';
 
@Injectable()
export class UserService{

  usersListUrl:any = "https://api.github.com/users";;  
 
  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
      //this.http.get('https://api.github.com/users').map((res) => res.json()).subscribe((res) => { console.log(res); });
       return this.http.get(this.usersListUrl).map((response) => response.json());
  }
}