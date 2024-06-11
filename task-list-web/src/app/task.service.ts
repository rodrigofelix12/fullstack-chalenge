import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskRequest {
  title: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) { }

  addTask(taskRequest: TaskRequest) {
    return this.http.post(this.apiUrl, taskRequest);
  }

  getAllTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
  }

  updateTask(taskRequest: TaskRequest, id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, taskRequest);
  }
}
