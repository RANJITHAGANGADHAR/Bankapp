import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BankComponent } from './bank/bank.component';
import { BangloreComponent } from './banglore/banglore.component';
import { MysoreComponent } from './mysore/mysore.component';
import { MandyaComponent } from './mandya/mandya.component';


const routes: Routes = [{
 
path:'',component:BankComponent},
{path:'Banglore',component:BangloreComponent},
 
{path:'mysore',component:MysoreComponent},
 
{path:'mandya',component:MandyaComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
