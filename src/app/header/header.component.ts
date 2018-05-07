import { Component, OnInit, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(public auth: AuthService) {}

  // Taken as input from parent App Module.
  @Input() user: User;
  @Input() isLoggedIn: Boolean;

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
