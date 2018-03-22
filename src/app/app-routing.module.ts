import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AdditemFormComponent } from './additem-form/additem-form.component';
import { GetitemFormComponent } from './getitem-form/getitem-form.component';
import { SearchFormComponent } from './search-form/search-form.component';


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
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
    path: "additem",
    component: AdditemFormComponent
  },
  {
    path: "getitem",
    component: GetitemFormComponent
  },
  {
    path: "search",
    component: SearchFormComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
