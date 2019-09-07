import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decend',
  templateUrl: './decend.component.html',
  styleUrls: ['./decend.component.css']
})
export class DecendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
rev(){
//  var arr=[0,1,2,3,4,5,6,7,8,9];
  for (var i = 9; i >= 0; i--) {  
    alert("decending=" +i);  
}
}
}