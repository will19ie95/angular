import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  user: User;
  constructor(private http: Http) {
    this.user = {
      username: "Yong Lei",
      email: "will19ie95@gmail.com"
    };
  }

  ngOnInit() {}

  onLogOut(): void {
    const req = this.http.post('/api/logout', this.user).subscribe(res => {
      if (res.json().status === "OK") {
        console.log("Logout Successful: ", res.json());
      } else {
        console.log("error: ", res.json());
      }
    }, err => {
      console.log("Error, Could not add item", this.user, err);
    });
  }
}
