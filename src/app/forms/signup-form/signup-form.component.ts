import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;
  public addUser: User = {
    username : "",
    email: "",
    password: ""
  };

  constructor(private auth: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }

  onSignUp(): void {
    this.auth.adduser(this.addUser).subscribe((data) => {
      this.messageService.broadcast(data);
      this.signupForm.reset();
      this.signupForm.resetForm();
    }, (err) => {
      console.error(err);
    });
  }

}
