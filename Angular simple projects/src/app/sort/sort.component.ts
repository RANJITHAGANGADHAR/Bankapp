import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  public display : any = [];
  points = [40, 100, 1, -5, -25, 10, 25, 5];
  constructor() { }

  ngOnInit() {
  }
sort(){
  alert(this.display=this.points.sort((a,b) => b- a));
  // for (var i = 0; this.points[i] >= 7; i--) {  
  //   alert("decending=" +this.points[i]);  (a,b) => b - a)
}
}

