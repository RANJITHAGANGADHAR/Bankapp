import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {NgxPaginationModule} from '@angular/ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { Apicomp2Component } from './apicomp2/apicomp2.component';
import { BankComponent } from './bank/bank.component';
import { BangloreComponent } from './banglore/banglore.component';
import { SearchPipe } from './search.pipe';
import { MysoreComponent } from './mysore/mysore.component';
import { MandyaComponent } from './mandya/mandya.component';

@NgModule({
  declarations: [
    AppComponent,
   // Page1Component,
   // Page2Component,
   // TolistComponent,
    //Tolist2Component,
    //Todolist3Component,
    //Apicomp2Component,
    BankComponent,
   BangloreComponent,
   SearchPipe,
   MysoreComponent,
   MandyaComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
