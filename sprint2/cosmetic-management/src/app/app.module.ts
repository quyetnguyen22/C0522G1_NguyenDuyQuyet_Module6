import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from "primeng/accordion";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {BadgeModule} from "primeng/badge";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import { LogInLogOutComponent } from './acount/log-in-log-out/log-in-log-out.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DetailComponent } from './product/detail/detail.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {RatingModule} from "primeng/rating";
import { CartComponent } from './product/cart/cart.component';
import { WomenComponent } from './product/women/women.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LogInLogOutComponent,
    HomePageComponent,
    DetailComponent,
    CartComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    AppRoutingModule,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    BadgeModule,
    CheckboxModule,
    BreadcrumbModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
