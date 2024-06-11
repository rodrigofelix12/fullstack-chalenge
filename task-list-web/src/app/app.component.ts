import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, AddTaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-list-web';
}
