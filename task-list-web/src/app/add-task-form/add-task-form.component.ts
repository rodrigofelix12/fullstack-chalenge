import { Component, OnInit } from '@angular/core';
import { Task, TaskRequest, TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [AddTaskFormComponent, FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  public tasks: Task[] = [];
  title: string = '';
  status: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(title: string, status:string): void {
    const taskRequest = { title: title, status: status } as TaskRequest;
    this.taskService.addTask(taskRequest)
    .subscribe({
      next: () => {
        this.loadTasks();
        this.title = '';
        this.status = 'Pending';
      },
      error: (err) => {
          console.log("Error retrieving request")
      },
    });
  }

  loadTasks(): void {
    this.taskService.getAllTasks()
    .subscribe({
      next: (value) => {
          this.tasks = value;
      },
      error: (err) => {
          console.log("Error retrieving request")
      },
    });
  }
  
}
