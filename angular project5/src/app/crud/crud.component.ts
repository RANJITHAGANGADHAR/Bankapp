import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  employee: any[];

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/employee").subscribe((res : any[])=>{
      console.log(res);
        this.employee = res;
  });
  }

}
