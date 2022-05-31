import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestglobalComponent } from './testglobal/testglobal.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { IntroComponent } from './site/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    TestglobalComponent,
    TodoFormComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
