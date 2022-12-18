import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AppModule } from '../../app.module';

@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StyleClassModule,
    MessageModule,
    BrowserAnimationsModule,
    ToastModule,
    ScrollTopModule,
    ScrollPanelModule,
    AppModule,
  ],
})
export class HomeModule {}
