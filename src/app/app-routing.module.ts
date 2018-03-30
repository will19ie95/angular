import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AdditemFormComponent } from './additem-form/additem-form.component';
import { GetitemFormComponent } from './getitem-form/getitem-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AuthGuardService } from "./auth-guard.service";
import { VerifyFormComponent } from "./verify-form/verify-form.component";


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "login",
    component: LoginFormComponent
  },
  {
    path: "signup",
    component: SignupFormComponent
  },
  {
    path: "verify",
    component: VerifyFormComponent
  },
  {
    path: "additem",
    component: AdditemFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "getitem",
    component: GetitemFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "search",
    component: SearchFormComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
