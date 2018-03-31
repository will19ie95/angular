import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;
  public addUser: User = {
    username : "",
    email: "",
    password: ""
  };

  constructor(private auth: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }

  onSignUp(): void {
    this.auth.adduser(this.addUser).subscribe((data) => {
      // display on status = "OK" and status = "error"
      const message = {
        severity: "",
        summary: "",
      };
      if (data.status === "OK") {
        message.severity = "success";
        message.summary = "Verification Key Sent";
      } else if (data.status === "error") {
        message.severity = "error";
        message.summary = data.message;
      }
      this.messageService.add(message);
      this.signupForm.reset();
      this.signupForm.resetForm();
    }, (err) => {
      console.error(err);
    });
  }

}
