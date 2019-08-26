import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';


@NgModule({
  declarations: [ConfirmationEmailComponent, ConfirmationPopupComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
