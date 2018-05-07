import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./services/auth-guard.service";

// Forms Component
import { LoginFormComponent } from "./forms/login-form/login-form.component";
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { AdditemFormComponent } from './forms/additem-form/additem-form.component';
import { GetitemFormComponent } from './forms/getitem-form/getitem-form.component';
import { SearchFormComponent } from './forms/search-form/search-form.component';
import { VerifyFormComponent } from "./forms/verify-form/verify-form.component";


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
