import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService, Message } from '../message.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  user: User;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
    if (this.authService.isLoggedIn) {
      router.navigateByUrl("/home");
    }
  }

  ngOnInit() {
    this.user = this.authService.getUserDetails();
    // prevent template error, fix me
    if (!this.user) {
      this.user = {
        username: "",
          email: ""
      };
    }
  }

  onLogIn(): void {
    this.authService.login(this.user).subscribe(data => {
      // display on status = "OK" and status = "error"
      const message = {
        severity: "",
        summary: "",
      };
      if (data.status === "OK") {
        message.severity = "success";
        message.summary = "Welcome " + data.user.username;
        this.router.navigateByUrl("/home");
      } else if (data.status === "error") {
        message.severity = "error";
        message.summary = data.error.message;
      }
      this.messageService.add(message);
    }, (err) => {
      console.error(err);
    });
  }

}
