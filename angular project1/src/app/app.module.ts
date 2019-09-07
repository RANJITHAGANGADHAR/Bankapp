import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IdcardComponent } from './idcard/idcard.component';
import { MainComponent } from './main/main.component';
 import { SignComponent } from './sign/sign.component';
import { FacbookComponent } from './facbook/facbook.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { SlideComponent } from './slide/slide.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TempletComponent } from './templet/templet.component';
import { HomeComponent } from './home/home.component';
//import { RandomComponent } from './random/random.component';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';
import { CrudComponent } from './crud/crud.component';
import { WebsiteComponent } from './website/website.component';
//ng import { TablefilterComponent } from './tablefilter/tablefilter.component';
//import {MatTableModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    LoginComponent,
    IdcardComponent,
    MainComponent,
    FacbookComponent,
    EmploginComponent,
    SlideComponent,
    CarouselComponent,
    TempletComponent,
    HomeComponent,
  //  RandomComponent,
    TableResponsiveComponent,
  CrudComponent,
  WebsiteComponent,
    //TablefilterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   // MatTableModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
