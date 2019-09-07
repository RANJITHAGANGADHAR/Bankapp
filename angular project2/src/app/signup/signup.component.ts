import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
 // public http:HttpClient
  employee: any[];
  empobj: {};
  constructor(public http:HttpClient) { 
    
  }
add(){
  this.http.put("http://localhost:3000/employee",this.newdata).subscribe((res : any[])=>{
      console.log(res);
        this.employee = res;
  });
}
  newdata(arg0: string, newdata: any) {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    this.http.get("http://localhost:3000/employee").subscribe((res : any[])=>{
      console.log(res);
        this.employee = res;
  });
  }


  
}