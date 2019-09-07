import { Injectable } from '@angular/core';


import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:Task[];
  constructor() {
    this.tasks=[
     // { title:"write",description:"I have write",hide:true}
    ];
   }

   getTasks(){
     if(localStorage.getItem('tasks')==null)
   {
    return this.tasks;
   }
  else
{
  this.tasks=JSON.parse(localStorage.getItem('tasks'));
  return this.tasks;
} 
}

  //  addTask(task:Task){
  //    this.tasks.push(task);
  //  }

  addTask(task:Task){
    let tasks=[];
    this.tasks.push();
  
    if(localStorage.getItem('tasks')===null){
       tasks.push(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
    
    }
    else{
      tasks=JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    }
 }

   delete(task:Task){
     for(let i=0;i<this.tasks.length;i++)
     {
       if(task==this.tasks[i]){
         this.tasks.splice(i,1);
         localStorage.setItem('tasks',JSON.stringify(this.tasks));
       }
     }
   }
}
