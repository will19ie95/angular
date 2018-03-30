import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { UserService } from "./user.service";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AdditemFormComponent } from './additem-form/additem-form.component';
import { GetitemFormComponent } from './getitem-form/getitem-form.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { VerifyFormComponent } from './verify-form/verify-form.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupFormComponent,
    LoginFormComponent,
    SearchFormComponent,
    AdditemFormComponent,
    GetitemFormComponent,
    VerifyFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MessagesModule,
    MessageModule
  ],
  providers: [UserService, AuthService, AuthGuardService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
