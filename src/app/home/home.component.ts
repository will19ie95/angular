import { Input, Component, OnInit} from '@angular/core';
import { User } from '../models/user.model';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.user = this.authService.getUserDetails();
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
