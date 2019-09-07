import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
​
  constructor(private Httpservice:HttpClient) { 
​
  }
public states=[];
  ngOnInit() {
    this.Httpservice.get('./assets/products.json').subscribe(data=>{
      this.states.push(data);
      //console.log(this.states[0]);
    });
  }
​
}