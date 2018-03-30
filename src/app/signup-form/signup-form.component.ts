import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(): void {
    this.auth.adduser(this.addUser).subscribe(() => {
      this.router.navigateByUrl("/home");
    }, (err) => {
      console.error(err);
    });
  }

  onVerify(): void {

    // const data = {
    //   email: this.verifyForm.value.email,
    //   key: this.verifyForm.value.key
    // };

    // const req = this.http.post('/api/verify', this.verifyUser).subscribe(res => {
    //   res.json();
    //   console.log(res.json());
    // }, err => {
    //   console.log("Error, Could not Verify user", this.verifyUser, err);
    // });
    // console.log("Signed Up");
    // console.log(this.signupForm.value, this.signupForm.valid);
  }

}
