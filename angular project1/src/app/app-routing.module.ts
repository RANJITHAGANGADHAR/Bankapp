
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { IdcardComponent } from './idcard/idcard.component';
import { MainComponent } from './main/main.component';
import { FacbookComponent } from './facbook/facbook.component';
import { SlideComponent } from './slide/slide.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TempletComponent } from './templet/templet.component';

import { TableResponsiveComponent } from './table-responsive/table-responsive.component';
import { CrudComponent } from './crud/crud.component';
import { WebsiteComponent } from './website/website.component';



const routes: Routes = [
  {
 
   path: '', component: MainComponent },
   
  { path: 'table', component: TableResponsiveComponent },
  { path: 'login', component: LoginComponent },
 
{ path: 'sign', component: SignComponent },
{ path: 'idcard', component: IdcardComponent },
{ path: 'facebook', component: FacbookComponent },
{ path: 'slide', component: SlideComponent },
{path :'templet',component:TempletComponent},
{path :'website',component:WebsiteComponent},
//{path :'filter',component:TablefilterComponent},
{ path: 'courosel', component: CarouselComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
