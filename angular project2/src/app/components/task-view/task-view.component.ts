import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
tasks:Task[];
  constructor(public taskService:TaskService) { }

  ngOnInit() {
    this.tasks=this.taskService.getTasks();
  console.log(this.tasks)
;  }

}
