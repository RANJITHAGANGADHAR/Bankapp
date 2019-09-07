import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomalpha',
  templateUrl: './randomalpha.component.html',
  styleUrls: ['./randomalpha.component.css']
})
export class RandomalphaComponent implements OnInit {
  number1 = Math.random().toString(35).substring(3);
  constructor() { }

  ngOnInit() {
  }

}
