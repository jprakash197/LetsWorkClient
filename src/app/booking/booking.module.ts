import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';


import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { BookNowComponent } from './book-now/book-now.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { NgbModule, NgbActiveModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { SavedcardComponent } from './savedcard/savedcard.component';


@NgModule({
  declarations: [ConfirmationEmailComponent, ConfirmationPopupComponent, BookNowComponent, CardComponent, SavedcardComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [SavedcardComponent, CardComponent, NgbActiveModal]

})
export class BookingModule { }
