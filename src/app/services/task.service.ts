import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    // return of(TASKS);
    return this.http.get<Task[]>(this.apiUrl+'/tasks')
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(this.apiUrl+'/tasks/'+task.id)
  }

  updateTaskReminder(task: Task): Observable<Task>{
    return this.http.put<Task>(this.apiUrl+'/tasks/'+task.id, task, httpOptions)
  }

  createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl+'/tasks', task, httpOptions)
  }
}
