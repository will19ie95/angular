import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;
  @ViewChild('verifyForm') verifyForm: NgForm;
  user: User = {};
  key;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSignUp(): void {
    const req = this.http.post('/api/adduser', this.user).subscribe(res => {
      res.json();
      console.log(res.json());
    }, err => {
      console.log("Error, Could not add user", this.user, err);
    });
    // console.log("Signed Up");
    // console.log(this.signupForm.value, this.signupForm.valid);
  }

  onVerify(): void {

    const data = {
      email: this.verifyForm.value.email,
      key: this.verifyForm.value.key
    };

    const req = this.http.post('/api/verify', data).subscribe(res => {
      res.json();
      console.log(res.json());
    }, err => {
      console.log("Error, Could not add user", this.user, err);
    });
    // console.log("Signed Up");
    // console.log(this.signupForm.value, this.signupForm.valid);
  }

}
