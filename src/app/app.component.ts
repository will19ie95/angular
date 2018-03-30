import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user: User = {
    username: "",
    email: ""
  };

  user_sub: Subscription;

  constructor(public authService: AuthService, private router: Router) {
    // if (!this.authService.isLoggedIn()) {
    //   this.router.navigate(['login']);
    // }
  }

  ngOnInit() {
    this.subscribeUser();
  }

  ngOnDestroy() {
    this.user_sub.unsubscribe();
  }

  subscribeUser() {
    this.user_sub = this.authService.getuserObs().subscribe(user => {
      this.user = user;
    }, (err) => {
      console.error(err);
    });
  }

  // getUser(): void {
  //   // this.user = this.authService.getUserDetails();
  //   this.user_sub = this.authService.getuserObs().subscribe(user => {
  //     this.user = user;
  //     console.log("this user", this.user);
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }

}
