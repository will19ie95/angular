import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  user: User;

  constructor(private http: HttpClient) {
  }

  // getUser(): Observable<User> {
  //   const req = this.http.post(this.loginUrl, {
  //     username: "demo",
  //     password: "demo"
  //   }).subscribe(res => {
  //     if (res.json().status === "OK") {
  //       this.user = res.json();
  //       console.log("Login Successful: ", this.user);
  //       return of(this.user);
  //     } else {
  //       console.log("error: ", res.json());
  //       this.user = res.json();
  //       return of({});
  //     }
  //   }, err => {
  //     console.log("Error, Could not add item", this.user, err);
  //     return of({});
  //   });
  //   return of(this.user);
  // }

  getUser(): User {
    console.log("getting user.", this.user);
    return this.user;
  }

  logIn(user: User): Observable<any> {
    const loginUrl = 'api/login';
    // const user = {
    //   username: "demo",
    //   password: "demo"
    // };
    // this.user = this.http.post(loginUrl, body, httpOptions);

    return this.http.post(loginUrl, user, httpOptions);
  }

  logOut(): Observable<any> {
    const body = {};
    const logoutUrl = 'api/logout';

    // const req = this.http.post(logoutUrl, body, httpOptions)

    return this.http.post(logoutUrl, body, httpOptions);
    // return this.http.post(logoutUrl, this.user, httpOptions)
    //   .pipe();
  }


}
