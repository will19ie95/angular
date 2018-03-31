import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { User } from './user';
import { MessageService } from './message.service';

// Interfaces here
export interface UserDetails {
  _id: string;
  email: string;
  username: string;
  exp: number;
  iat: number;
}

interface LoginResponse {
  token: string;
  user: User;
}

export interface VerifyUser {
  email: string;
  key: string;
}

@Injectable()
export class AuthService {
  private token: string;
  private userDetails: UserDetails;
  private user = new Subject<any>();
  private userObserver = this.user.asObservable();
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    })
  };

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) { }

  private saveToken(token: string): void {
    localStorage.setItem('twitter-clone-token', token);
    this.token = token;
  }

  public getToken(): string {
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

  public adduser(user: User): Observable<any> {
    return this.http.post('/api/adduser', user);
  }

  public login(user: User): Observable<any> {
    // return this.request('post', 'login', user);
    const base = this.http.post('/api/login', user, this.httpOptions);
    const request = base.pipe(
      map((data: LoginResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        if (data.user) {
          this.loginUserObs(data.user);
        }
        return data;
      })
    );

    return request;

  }

  public getuser(): Observable<any> {
    return this.http.get('/api/user', this.httpOptions);
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
    return this.userObserver;
  }

  public loginUserObs(user: User) {
    console.log("changing users: ", user);
    this.user.next(user);
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('twitter-clone-token');
    this.loginUserObs(null);
    this.router.navigateByUrl('/');
  }

  public verifyUser(verifyUser: VerifyUser): Observable<any> {

    const base = this.http.post('/api/verify', verifyUser, this.httpOptions);
    const request = base.pipe(
      map((data: any) => {
        // console.log("/api/verify ", data);
        const message = {
          severity: "",
          summary: "",
        };
        if (data.status === "OK") {
          message.severity = "success";
          message.summary = "Successfully Verified √";
          this.router.navigateByUrl("/home");
        } else if (data.status === "error") {
          message.severity = "error";
          message.summary = data.error;
        }
        this.messageService.add(message);
        return data;
      }));

    return request;
  }
}
