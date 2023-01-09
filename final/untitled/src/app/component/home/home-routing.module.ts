import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PenaltiesPageComponent} from "./penalties/penalties-page.component";

const routes: Routes = [
  {
    path: 'teams',
    component: PenaltiesPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
