import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { RandomalphaComponent } from './randomalpha/randomalpha.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'calc',component:CalculatorComponent},
  {path:'taskform',component:TaskFormComponent},
  {path:'taskview',component:TaskViewComponent},
  { path: 'randomalpha', component: RandomalphaComponent },
  {path:'navigation',component:NavigationComponent},
  {path:'product',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }