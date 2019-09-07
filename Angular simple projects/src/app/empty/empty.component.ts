import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
empty(){
  var array=[];
  array.length=0;
  console.log(array);
  alert(array.length);
}
empty11(){
  console.log(length);
  alert(length);
}
}
