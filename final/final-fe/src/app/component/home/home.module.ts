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
import {PaginatorModule} from "primeng/paginator";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {RadioButtonModule} from "primeng/radiobutton";
import {ConfirmDialogModule} from "primeng/confirmdialog";

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
    PaginatorModule,
    DialogModule,
    TableModule,
    RatingModule,
    FileUploadModule,
    RippleModule,
    ToolbarModule,
    InputTextModule,
    RadioButtonModule,
    ConfirmDialogModule,
  ],
})
export class HomeModule {}
