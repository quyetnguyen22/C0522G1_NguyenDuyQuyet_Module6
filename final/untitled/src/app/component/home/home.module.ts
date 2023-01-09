import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {StyleClassModule} from 'primeng/styleclass';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ScrollPanelModule} from 'primeng/scrollpanel';
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
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {PlayerComponent} from './player/player.component';
import {PenaltiesPageComponent} from "./penalties/penalties-page.component";

@NgModule({
  declarations: [PenaltiesPageComponent, PlayerComponent],
  exports: [PenaltiesPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StyleClassModule,
    MessageModule,
    BrowserAnimationsModule,
    ToastModule,
    ScrollTopModule,
    ScrollPanelModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    RatingModule,
    FileUploadModule,
    RippleModule,
    ToolbarModule,
    RadioButtonModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    PaginatorModule,
  ],
})
export class HomeModule {
}
