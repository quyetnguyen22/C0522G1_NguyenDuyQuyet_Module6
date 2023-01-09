import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenaltyRoutingModule } from './penalty-routing.module';
import { DetailComponent } from './detail/detail.component';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [
    CommonModule,
    PenaltyRoutingModule,
    RatingModule,
    InputNumberModule,
    FormsModule,
    ToastModule,
  ],
})
export class PenaltyModule {}
