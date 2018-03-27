import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Http } from '@angular/http';

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;
  @ViewChild('verifyForm') verifyForm: NgForm;
  addUser: User = {
    username : "",
    email: "",
    password: ""
  };
  verifyUser = {
    username: "",
    key: ""
  };

  constructor(private http: Http, private auth: AuthService) { }

  ngOnInit() {
  }

  onSignUp(): void {
    const req = this.http.post('/api/adduser', this.addUser).subscribe(res => {
      res.json();
      console.log(res.json());
    }, err => {
      console.log("Error, Could not add user", this.addUser, err);
    });
  }

  onVerify(): void {

    // const data = {
    //   email: this.verifyForm.value.email,
    //   key: this.verifyForm.value.key
    // };

    const req = this.http.post('/api/verify', this.verifyUser).subscribe(res => {
      res.json();
      console.log(res.json());
    }, err => {
      console.log("Error, Could not Verify user", this.verifyUser, err);
    });
    // console.log("Signed Up");
    // console.log(this.signupForm.value, this.signupForm.valid);
  }

}
