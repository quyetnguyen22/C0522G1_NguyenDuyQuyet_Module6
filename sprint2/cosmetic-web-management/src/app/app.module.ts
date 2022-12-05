import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LogInLogOutComponent} from "./acount/log-in-log-out/log-in-log-out.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {DetailComponent} from "./product/detail/detail.component";
import {AccordionModule} from "primeng/accordion";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {BadgeModule} from "primeng/badge";
import {CheckboxModule} from "primeng/checkbox";
import {BreadcrumbModule} from "primeng/breadcrumb";

@NgModule({
  declarations: [
    LogInLogOutComponent,
    HomePageComponent,
    DetailComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    BadgeModule,
    CheckboxModule,
    BreadcrumbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
