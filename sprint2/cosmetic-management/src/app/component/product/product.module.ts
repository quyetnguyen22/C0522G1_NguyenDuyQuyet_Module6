import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {DetailComponent} from "./detail/detail.component";
import {CartComponent} from "./cart/cart.component";
import {WomenComponent} from "./women/women.component";
import {RatingModule} from "primeng/rating";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    DetailComponent,
    CartComponent,
    WomenComponent
  ],
  exports: [
    DetailComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        RatingModule,
        InputNumberModule,
        FormsModule,
        ToastModule
    ]
})
export class ProductModule { }
