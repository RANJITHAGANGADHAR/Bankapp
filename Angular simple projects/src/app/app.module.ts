import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecendComponent } from './decend/decend.component';
import { EmployeComponent } from './employe/employe.component';
import { StateComponent } from './state/state.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NewitemComponent } from './newitem/newitem.component';
import { SortComponent } from './sort/sort.component';
import { UnorderedComponent } from './unordered/unordered.component';
import { SetdateComponent } from './setdate/setdate.component';
import { AgesComponent } from './ages/ages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { EmptyComponent } from './empty/empty.component';
import { ImageComponent } from './image/image.component';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ServiComponent } from './servi/servi.component';
import { LoginsComponent } from './logins/logins.component';
import { SignupComponent } from './signup/signup.component';
// import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    DecendComponent,
    EmployeComponent,
    StateComponent,
    SignComponent,
    LoginComponent,
    NewitemComponent,
    SortComponent,
    UnorderedComponent,
    SetdateComponent,
    AgesComponent,
    NavbarComponent,
    RegisterComponent,
    EmptyComponent,
    ImageComponent,
    HomeComponent,
   // AboutComponent,
    ContactComponent,
    ServiceComponent,
    ServiComponent,
    LoginsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
