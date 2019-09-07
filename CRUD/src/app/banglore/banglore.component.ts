import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-banglore',
  templateUrl: './banglore.component.html',
  styleUrls: ['./banglore.component.css']
})
export class BangloreComponent implements OnInit {
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
