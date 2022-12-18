import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RatingModule } from 'primeng/rating';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './component/home/home.module';
import { ProductModule } from './component/product/product.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MessageService } from 'primeng/api';
import { AccountModule } from './component/account/account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    RatingModule,
    AccountModule,
    ProductModule,
  ],
  providers: [MessageService],
  exports: [HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
