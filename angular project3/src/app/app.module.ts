import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
      imports: [
            BrowserModule,
            HttpClientModule,
            ReactiveFormsModule,
            
      ],
      declarations: [
            AppComponent,
         
            SignupComponent,
         
            LoginComponent
      ],
      providers: [],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { }
