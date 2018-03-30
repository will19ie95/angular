import { Component, OnInit, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private auth: AuthService) {}

  // Taken as input from parent App Module.
  @Input() user: User;
  @Input() isLoggedIn: Boolean;

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
