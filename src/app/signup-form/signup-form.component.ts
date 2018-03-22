import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;
  user: User = {};

  constructor() { }

  ngOnInit() {
  }

  onSignUp(): void {
    console.log("Signed Up");
    console.log(this.signupForm.value, this.signupForm.valid);
  }

}
