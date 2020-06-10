import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../User.interface';

@Component({
  selector: 'app-task-private',
  templateUrl: './task-private.component.html',
  styleUrls: ['./task-private.component.css']
})
export class TaskPrivateComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasksPrivate().subscribe( 
      (res: Task[]) => {
        this.tasks = res;
      },
      error => console.error(error)
    );
  }

}
 