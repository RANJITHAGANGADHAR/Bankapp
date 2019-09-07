import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {
   op = ["Angular", "Node", "JavaScript", "React"];

  constructor() { }

  ngOnInit() {
  }
myfunction(){
  this.op.push("IOS", "AWS", "Java" );

  console.log(this.op);
}
}
