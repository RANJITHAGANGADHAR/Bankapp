// import { Component, OnInit } from '@angular/core';

// //import{Http,Response,Headers} from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';

// //import { Http } from '@angular/Http';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor( Httpservice:HttpClientModule) { }
// products=[];

// ngOnInit() {
//   this.Httpservice.get('./assets/products.json').subscribe(data=>{
//     this.products.push(data);
//     //console.log(this.states[0]);
//   });

// }
// }
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
​
  constructor(private Httpservice:HttpClient) { 
​
  }
public products=[];
fetchData=function(){
  
  this.Httpservice.get('./assets/products.json').subscribe(data=>{
    this.products.push(data);
    //console.log(this.states[0]);
  });
}
  ngOnInit() {
  }
​
}