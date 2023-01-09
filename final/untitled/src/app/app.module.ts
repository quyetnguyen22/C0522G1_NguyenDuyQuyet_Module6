import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";
import {BadgeModule} from "primeng/badge";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./component/home/home.module";
import {AccountModule} from "./component/account/account.module";
import {ConfirmationService, MessageService} from "primeng/api";
import {ApiInterceptorService} from "./api-interceptor.service";
import {RadioButtonModule} from "primeng/radiobutton";
import {MultiSelectModule} from "primeng/multiselect";
import {ToolbarModule} from "primeng/toolbar";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {PaginatorModule} from "primeng/paginator";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StyleClassModule,
    RippleModule,
    HttpClientModule,
    HomeModule,
    RadioButtonModule,
    MultiSelectModule,
    ToolbarModule,
    ConfirmDialogModule,
    AccountModule,
    BadgeModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
