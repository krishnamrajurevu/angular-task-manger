import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskService = inject(TaskService)
    taskForm = new FormGroup({
      task: new FormControl('',{
        nonNullable: true
      }),

      status: new FormControl('todo',{
        nonNullable: true
      })
    });

    onSubmit(){
      console.log(this.taskForm.getRawValue())
      const rawValues = this.taskForm.getRawValue();
      this.taskService.addTask(rawValues.task, rawValues.status);
      this.taskForm.reset();
    }
}
