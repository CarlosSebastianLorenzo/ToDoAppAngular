import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { AddTaskButtonComponent } from './componets/add-task-button/add-task-button.component';
import { TasksComponent } from './componets/tasks/tasks.component';
import { TaskItemComponent } from './componets/task-item/task-item.component';
import { AddTaskComponent } from './componets/add-task/add-task.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
