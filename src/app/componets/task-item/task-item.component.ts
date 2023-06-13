import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }
}