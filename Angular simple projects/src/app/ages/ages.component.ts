import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ages',
  templateUrl: './ages.component.html',
  styleUrls: ['./ages.component.css']
})
export class AgesComponent implements OnInit {
value:any=[];
  age: number;
  constructor() { }

  ngOnInit() {
  }
  validate(name){
    
var name;
  // var age1=(age1.value>=18)?alert("old enough to Vote"):alert("too Young to Vote");
  // return age1;
    
if(name.value<18)
{
alert("old enough to Vote");
    
}
else{
alert("too Young to Vote")
}
 }
}

