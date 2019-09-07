import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  employee;
  employeeList=[];
  index=0
  constructor() { }
  ngOnInit() {
    this.employeeInit()
  }
  employeeInit(){
    this.employee = {
      fname1: '',
      lname: '',
      mobile: '',
      email: ''
    }
  }
  saveData(){
    console.log("adding")
    return false;
  }
  // saveData() {
  //   if(this.index ==0){
  //   this.employeeList.push(this.employee)
  //   }else{
  //     this.index=0
  //   }
  //   this.employeeInit()
  // // }
  // edit(i){
  //   this.index=1
  //   this.employee=this.employeeList[i]
  // }
  // delete(i){
  //   this.employeeList.splice(i,1)
  // }

}
