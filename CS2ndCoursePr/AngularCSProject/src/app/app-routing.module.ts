import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpPageComponent } from './usercmp/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './usercmp/login-page/login-page.component';
import { UserPageComponent } from './usercmp/user-page/user-page.component';
import { UsercmpComponent } from './usercmp/usercmp.component';

const routes: Routes = [
  { path: '', redirectTo: 'User/LogInPage', pathMatch: 'full' },
  {
    path: 'User', component: UsercmpComponent,
    children: [
      { path: 'SignUpPage', component: SignUpPageComponent },
      { path: 'LogInPage', component: LoginPageComponent }
    ]
  },
  { path: "UserPage", component: UserPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
