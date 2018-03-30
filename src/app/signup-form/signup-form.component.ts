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
  addUser: User = {
    username : "",
    email: "",
    password: ""
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

}
