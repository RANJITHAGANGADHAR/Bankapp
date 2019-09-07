import { Component, OnInit } from '@angular/core';
import { employees } from 'src/datamodel/employess.model';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private Httpservice:HttpClient) { }

   ngOnInit() {
   }
}


