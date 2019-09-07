import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskService:TaskService
  ) { }

  ngOnInit() {
  }
addtask(newTitle:HTMLInputElement,newDescription:HTMLInputElement){
  console.log("added",newTitle.value,newDescription.value);
 
 this.taskService.addTask({
   title:newTitle.value,
  description:newDescription.value ,hide:true//hide concept errror
 });
 //console.log(this.taskService.getTasks());
  
 newTitle.value=" ";
 newDescription.value=" ";
 return false;
}
}
