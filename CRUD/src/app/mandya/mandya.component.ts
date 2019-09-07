import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mandya',
  templateUrl: './mandya.component.html',
  styleUrls: ['./mandya.component.css']
})
export class MandyaComponent implements OnInit {
  ngOnInit() {
    
  }
  title = 'angular examples';
  email="";
   name = "";
   aa: boolean = true;
   users = [{
     sl:"1",
     bank:"corp",
      id: '223',
     name: 'dhanu',
     email: 'abc@gmail.com'
   }, {
     sl:"2",
     bank:"sbi",
     id: '2234',
     name: 'shree',
     email: 'xyz@hotmail.com'
   }, {
     sl:"3",
     bank:"sbi",
     id: '12345',
     name: 'abc',
     email: 'jsgsbh@kk.com'
   }, 
   {
     sl:"4",
     bank:"sbi",
     id: '123456',
     name: 'def',
     email: 'TEST@gmail.com'
   }]
   setIndex(ii) {
     this.aa = ii;
     console.log
   }
  }
