import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  user: User = {};

  constructor() {
  }

  ngOnInit() {
  }

  onLogIn(): void {
    // this.user = {
    //   username: "Yong Lei",
    //   email: "will19ie95@gmail.com"
    // };
    // console.log("Logged In.", this.user);
    console.log("Logged In");
    console.log(this.loginForm.value, this.loginForm.valid);
  }
}
