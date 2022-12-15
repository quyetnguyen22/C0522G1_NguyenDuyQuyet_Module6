import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {DetailComponent} from "./detail/detail.component";
import {WomenComponent} from "./women/women.component";

const routes: Routes = [
  {
    path: 'product/cart',
    component: CartComponent
  },
  {
    path: 'product/detail/:id',
    component: DetailComponent
  },
  {
    path: 'product/women',
    component: WomenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
