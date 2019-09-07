import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { Http2SecureServer } from 'http2';
import{HttpClientModule}from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { StateComponent } from './state/state.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { TaskViewComponent } from './components/task-view/task-view.component';

import { TaskService } from './services/task.service';
import { RandomalphaComponent } from './randomalpha/randomalpha.component';

import { MainComponent } from './components/main/main.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PaginationComponent } from './pagination/pagination.component';
//import { HelloComponent } from './hello/hello.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    StateComponent,
    NavigationComponent,
    TaskFormComponent,
    TaskComponent,
    TaskViewComponent,
    RandomalphaComponent,

    MainComponent,

    CalculatorComponent,

    PaginationComponent,
//
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
