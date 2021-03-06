import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './models//user.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { MessageService, Message } from './services/message.service';

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
  msgs: Message[] = [];
  msg = {
    severity: 'info',
    summary: 'Info Message',
    detail: 'Infor works'
  };

  user_sub: Subscription;
  msg_sub: Subscription;

  constructor(public authService: AuthService, private router: Router, private messageService: MessageService) {
    // redirect to home if logged in
    if (!authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    this.subscribeUser();
    this.subscribeMessages();
  }

  ngOnDestroy() {
    this.user_sub.unsubscribe();
    this.msg_sub.unsubscribe();
  }

  subscribeUser() {
    this.user_sub = this.authService.getuserObserver().subscribe(user => {
      this.user = user;
    }, (err) => {
      console.error(err);
    });
  }

  subscribeMessages() {
    this.msg_sub = this.messageService.getObserver().subscribe(msg => {
      this.msgs = [];
      if (msg) {
        this.msgs.push(msg);
      }
    }, (err) => {
      console.error(err);
    });
  }

  clearMessages() {
    this.messageService.clear();
  }



}
