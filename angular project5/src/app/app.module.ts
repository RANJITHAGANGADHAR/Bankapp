import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
//import { Http2SecureServer } from 'http2';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CrudComponent,
    Page1Component,
    Page2Component,
  
//
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,NgbModule,
    ReactiveFormsModule,
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
