import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  user: User;

  constructor(private authService: AuthService, private router: Router) {
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
    this.authService.login(this.user).subscribe(() => {
      // this.user = this.authService.getUserDetails();
      console.log("Logged in as :", this.user);
      // send it to subscribers:
      this.authService.loginUserObs(this.user);
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
    });
  }

}
