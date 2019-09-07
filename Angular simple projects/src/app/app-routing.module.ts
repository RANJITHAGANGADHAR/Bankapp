import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state/state.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { EmployeComponent } from './employe/employe.component';
import { SetdateComponent } from './setdate/setdate.component';
import { DecendComponent } from './decend/decend.component';
import { NewitemComponent } from './newitem/newitem.component';
import { UnorderedComponent } from './unordered/unordered.component';
import { SortComponent } from './sort/sort.component';
import { AgesComponent } from './ages/ages.component';
import { EmptyComponent } from './empty/empty.component';
import { ImageComponent } from './image/image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: SignComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'state', component: StateComponent },
  {path:'employe',component:EmployeComponent},
  {path:'setdate',component:SetdateComponent},
  {path:'decend',component:DecendComponent},
  {path:'newitem',component:NewitemComponent},
  {path:'unordered',component:UnorderedComponent},
  {path:'sort',component:SortComponent},
  {path:'age',component:AgesComponent},
  {path:'empty',component:EmptyComponent},
  {path:'image',component:ImageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
