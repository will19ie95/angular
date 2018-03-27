import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  user = {
    email: "",
    password: ""
  };

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  onLogIn(): void {
    const req = this.http.post('/api/login', this.user).subscribe(res => {
      if (res.json().status === "OK") {
        console.log("Login Successful: ", res.json());
      } else {
        console.log("error: ", res.json());
      }
    }, err => {
      console.log("Error, Could not add item", this.user, err);
    });
  }
}
