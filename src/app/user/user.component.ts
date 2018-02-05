import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from '../models/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
  userList:User[];

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getUsers()
    .subscribe(users => this.userList = users);
  }

}
