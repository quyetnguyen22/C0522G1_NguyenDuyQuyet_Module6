import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './candidate/list/list.component';
import {AddComponent} from './interviewInfo/add/add.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'create', component: AddComponent},
  // {path: 'edit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
