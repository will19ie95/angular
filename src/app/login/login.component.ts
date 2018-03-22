import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor() {
    this.user = {
      username: "Yong Lei",
      email: "will19ie95@gmail.com"
    };
  }

  ngOnInit() {
  }


  logOut(): void {
    this.user = {
      username: "null",
      email: "null"
    };
    console.log("Logged Out.", this.user);
  }



}
