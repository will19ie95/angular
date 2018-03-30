import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.css']
})
export class VerifyFormComponent implements OnInit {

  @ViewChild('verifyForm') verifyForm: NgForm;
  verifyUser = {
    username: "",
    key: ""
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onVerify(): void {
  }

}
