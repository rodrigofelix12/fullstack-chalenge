import { Component, OnInit } from '@angular/core';
import { Task, TaskRequest, TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskListComponent, CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[] = [];
  selectedTask: any = null;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
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

  editTask(task: any): void {
    this.selectedTask = { ...task };
  }

  saveTask(title: string, status: string, id: number) {
    const taskRequest = { title: title, status: status } as TaskRequest;
    this.taskService.updateTask(taskRequest, id)
    .subscribe({
      next: () => {
        this.loadTasks();
        this.selectedTask = '';
      },
      error: (err) => {
          console.log("Error retrieving request")
      },
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id)
    .subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (err) => {
          console.log("Error retrieving request")
      },
    });
  }

  cancelEdit(): void {
    this.selectedTask = null;
  }
}
