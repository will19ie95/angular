import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

import { User } from './user';

// Interfaces here
export interface UserDetails {
  _id: string;
  email: string;
  username: string;
  exp: number;
  iat: number;
}

// jwt Token
interface TokenResponse {
  token: string;
}

@Injectable()
export class AuthService {
  private token: string;
  private userDetails: UserDetails;
  private user = new Subject<any>();
  

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('twitter-clone-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('twitter-clone-token');
    }
    return this.token;
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // private request(method: 'post' | 'get', type: 'login' | 'adduser' | 'user', user?: User): Observable<any> {
  //   let base;
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this.getToken()}`
  //     })
  //   };

  //   if (method === 'post') {
  //     base = this.http.post(`/api/${type}`, user);
  //   } else {
  //     base = this.http.get(`/api/${type}`, httpOptions);
  //   }

  //   const request = base.pipe(
  //     map((data: TokenResponse) => {
  //       if (data.token) {
  //         console.log("token data:", data.token);
  //         this.saveToken(data.token);
  //       }
  //       console.log("DATA,", data);
  //       return data;
  //     })
  //   );

  //   console.log("requrest: ", request);
  //   return request;
  // }

  public adduser(user: User): Observable<any> {
    // return this.request('post', 'adduser', user);
    return this.http.post('/api/adduser', user);
  }

  public login(user: User): Observable<any> {
    // return this.request('post', 'login', user);
    const base = this.http.post('/api/login', user);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          console.log("token data:", data.token);
          this.saveToken(data.token);
        }
        console.log("DATA,", data);
        return data;
      })
    );

    return request;

  }

  public getuser(): Observable<any> {
    // return this.request('get', 'user');
    // console.log("Getting User")
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    })
  };
    return this.http.get('/api/user', httpOptions);
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      this.userDetails = JSON.parse(payload);
      return this.userDetails;
    } else {
      return null;
    }
  }

  public getuserObs(): Observable<any> {
    return this.user.asObservable();
  }

  public loginUserObs(user: User) {
    this.user.next(user);
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('twitter-clone-token');
    this.loginUserObs(null);
    this.router.navigateByUrl('/');
  }
}
