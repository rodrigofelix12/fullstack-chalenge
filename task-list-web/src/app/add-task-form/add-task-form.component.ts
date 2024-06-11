import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [AddTaskFormComponent],
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  taskName: string = '';
  taskDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    // Implementar a lógica de adição da tarefa
    console.log('Tarefa adicionada:', this.taskName, this.taskDescription);
    this.taskName = '';
    this.taskDescription = '';
  }
}
