import { Component, OnInit ,Input} from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@Input() task:Task;
  constructor(public taskService:TaskService) { }

  ngOnInit() {
  }
delete(task:Task){
if(confirm("are sure want to delete")){
this.taskService.delete(task);
}
}
}
