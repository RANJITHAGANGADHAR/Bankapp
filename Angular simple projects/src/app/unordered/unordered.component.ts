import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unordered',
  templateUrl: './unordered.component.html',
  styleUrls: ['./unordered.component.css']
})
export class UnorderedComponent implements OnInit {

 public array= ["Angular", "Node", "JavaScript", "React"];
  constructor() { }

  ngOnInit() {
  }

  

}
