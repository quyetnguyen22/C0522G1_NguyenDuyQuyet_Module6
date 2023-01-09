import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LogInLogOutComponent } from './log-in-log-out/log-in-log-out.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogInLogOutComponent],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
})
export class AccountModule {}
