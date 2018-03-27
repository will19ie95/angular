import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { Http } from '@angular/http';

import { UserService } from "../user.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  user: User = {
    username: "",
    email: ""
  };

  constructor(private http: Http, private userService: UserService) {}

  ngOnInit() {
    // this.userService.logIn();
    this.getUser();
  }

  getUser(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      console.log("Welcome Back: ", this.user);
    } else {
      console.log("No User Logged In", " ERROR");
    }
  }

  // onLogIn(): void {
  //   this.getUser();
  // }

  onLogOut(): void {
    // const req = this.http.post('/api/logout', this.user).subscribe(res => {
    //   if (res.json().status === "OK") {
    //     console.log("Logout Successful: ", res.json());
    //   } else {
    //     console.log("error: ", res.json());
    //   }
    // }, err => {
    //   console.log("Error, Could not add item", this.user, err);
    // });
    this.userService.logOut().subscribe(data => {
      if (data.status === "OK") {
        this.user = {
          username: "",
          email: ""
        };
        console.log("Logged Out", data);
      } else {
        console.log("FAILED to logout", data.error);
      }
    });
  }
}
