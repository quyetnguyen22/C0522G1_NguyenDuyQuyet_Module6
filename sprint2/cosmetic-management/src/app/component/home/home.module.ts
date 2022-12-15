import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from "./home-page/home-page.component";
import {StyleClassModule} from "primeng/styleclass";
import {ToastModule} from "primeng/toast";
import {MessageModule} from "primeng/message";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StyleClassModule,
    MessageModule,
    BrowserAnimationsModule,
    ToastModule
  ]
})
export class HomeModule {
}
