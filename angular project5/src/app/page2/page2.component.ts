import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
​
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
page2: FormGroup
  constructor() { 
    this.page2 = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
   }
​
  ngOnInit() {
  }
open(data){
  let data1=JSON.parse(localStorage.getItem("details"));
  let user = data1.username;
  let pass = data1.password;
  if(user==data.value.username && pass==data.value.password){
    alert("Login Successful");
  }
  else{
    alert("Check username and Password");
  }
}
}