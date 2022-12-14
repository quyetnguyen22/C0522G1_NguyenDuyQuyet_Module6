import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PenaltiesPageComponent} from "./component/home/penalties/penalties-page.component";
import {LogInLogOutComponent} from "./component/account/log-in-log-out/log-in-log-out.component";

const routes: Routes = [
  {
  path: '',
  component: PenaltiesPageComponent,
},
{
  path: 'account',
    component: LogInLogOutComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
