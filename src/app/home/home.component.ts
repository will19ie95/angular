import { Component, OnInit} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  logIn(): void {
    // this.user = {
    //   username: "Yong Lei",
    //   email: "will19ie95@gmail.com"
    // };
    // console.log("Logged In.", this.user);
  }

  signUp(): void {
  }

}
