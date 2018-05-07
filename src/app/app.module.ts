import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

// Routes
import { AppRoutingModule } from "./app-routing.module";

// primeNG
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

// Angular Material Wrapped
import { MaterialModule } from "./material.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// Forms Component
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SearchFormComponent } from './forms/search-form/search-form.component';
import { AdditemFormComponent } from './forms/additem-form/additem-form.component';
import { GetitemFormComponent } from './forms/getitem-form/getitem-form.component';
import { VerifyFormComponent } from './forms/verify-form/verify-form.component';

import { AuthService } from './services/auth.service';
import { UserService } from "./services/user.service";
import { AuthGuardService } from './services/auth-guard.service';
import { MessageService } from './services/message.service';
import { ItemService } from './services/item.service';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetComponent } from './tweet/tweet.component';

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
    TweetsComponent,
    TweetComponent
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
    MessageModule,
    CardModule,
    ButtonModule
  ],
  providers: [UserService, AuthService, AuthGuardService, MessageService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
