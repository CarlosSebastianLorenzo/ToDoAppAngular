import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  @Output() addNewTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean = true;
  subcription?: Subscription

  constructor(
    private uiService: UiService
  ) { 
    this.subcription = this.uiService.onToggle().subscribe(
      data => this.showAddTask = data);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.text.length === 0){
      alert("Please add a task");
      return
    }

    // const newTask = {
    //   text: this.text,
    //   day: this.day,
    //   reminder: this.reminder
    // }
    const {text, day, reminder} = this
    const newTask:Task = { text, day, reminder}

    this.addNewTask.emit(newTask)
    
    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
