import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './componets/tasks/tasks.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component:TasksComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
