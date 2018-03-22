import { Component, OnInit} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  user: User;
  constructor() {
    this.user = {
      username: "Yong Lei",
      email: "will19ie95@gmail.com"
    };
  }

  ngOnInit() {}

  logOut(): void {
    this.user = {
      username: "null",
      email: "null"
    };
    console.log("Logged Out.", this.user);
  }
}
