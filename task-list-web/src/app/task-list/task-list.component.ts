import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [
    { id: 1, name: 'Task 1', description: 'Description of task 1' },
    { id: 2, name: 'Task 2', description: 'Description of task 2' },
    { id: 3, name: 'Task 3', description: 'Description of task 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editTask(task: any): void {
    // Implementar a lógica de edição da tarefa
  }

  deleteTask(id: number): void {
    // Implementar a lógica de exclusão da tarefa
  }
}
