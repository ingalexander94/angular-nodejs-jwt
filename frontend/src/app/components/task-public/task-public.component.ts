import { Component, OnInit } from '@angular/core';
import { Task } from '../../User.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-public',
  templateUrl: './task-public.component.html',
  styleUrls: ['./task-public.component.css']
})
export class TaskPublicComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasksPublic().subscribe(
      (res: Task[]) => {
        this.tasks = res;
      },
      error => console.error
    )
  }

}
