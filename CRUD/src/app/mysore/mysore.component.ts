import { Component, OnInit } from '@angular/core';
// {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-mysore',
  templateUrl: './mysore.component.html',
  styleUrls: ['./mysore.component.css']
})
export class MysoreComponent implements OnInit {

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
   },
   {
    sl:"5",
    bank:"sbi",
    id: '123456',
    name: 'def',
    email: 'TEST@gmail.com'
  }
,
{
  sl:"6",
  bank:"sbi",
  id: '123456',
  name: 'def',
  email: 'TEST@gmail.com'
},
{
  sl:"7",
  bank:"kaveri",
  id: '1237',
  name: 'appu',
  email: 'TEST7@gmail.com'
},
{
  sl:"8",
  bank:"sbi",
  id: '1237',
  name: 'ranju',
  email: 'TEST8@gmail.com'
},
{
  sl:"9",
  bank:"hdfc",
  id: '1236',
  name: 'ashish',
  email: 'TEST9@gmail.com'
},
{
  sl:"10",
  bank:"hdfc",
  id: '1235',
  name: 'dhanu',
  email: 'TEST2@gmail.com'
},
{
  sl:"11",
  bank:"sbi",
  id: '1234',
  name: 'ramu',
  email: 'TEST11@gmail.com'
},
{
  sl:"12",
  bank:"sbi",
  id: '123456',
  name: 'def',
  email: 'TEST@gmail.com'
},
{
  sl:"13",
  bank:"sbi",
  id: '123456',
  name: 'def',
  email: 'TEST@gmail.com'
}
]
   setIndex(ii) {
     this.aa = ii;
     console.log
   }
}
