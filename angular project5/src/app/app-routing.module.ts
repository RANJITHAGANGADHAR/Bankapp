import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { Page1Component } from './page1/page1.component';

import { Page2Component } from './page2/page2.component';
const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'crud',component:CrudComponent},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }