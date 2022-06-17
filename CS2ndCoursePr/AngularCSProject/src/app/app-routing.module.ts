import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './user/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';

const routes: Routes = [
  { path: "", redirectTo: 'LogInPage', pathMatch: 'full' },
  { path: "LogInPage", component: LoginPageComponent },
  { path: "SignUpPage", component: SignUpPageComponent },
  { path: "UserPage", component: UserPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
