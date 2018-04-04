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
  user: User = {
    username: "",
    email: "",
    password: ""
  };

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
    this.authService.login(this.user).subscribe(data => {}, (err) => {
      console.error(err);
    });
  }

}
