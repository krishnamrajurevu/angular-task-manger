import { Injectable, signal } from '@angular/core';
import { TaskItems } from '../models/task-items.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<TaskItems[]>([]);

  addTask(task: string, status: string){
    this.tasks.update((previousState) => {
      return [...previousState, {task, status}]
    })
  }
}
