import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserpageComponent } from './userpage/userpage.component';
import { FooterComponent } from './userpage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    B1Component,
    B2Component,
    UserpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
