import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home/home-page/home-page.component';
import { LogInLogOutComponent } from './component/account/log-in-log-out/log-in-log-out.component';
import {AuthGuard} from "./component/account/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'account',
    component: LogInLogOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
