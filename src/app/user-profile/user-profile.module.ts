import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ViewCurrentBookingsComponent } from './view-current-bookings/view-current-bookings.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [ViewCurrentBookingsComponent, BookingHistoryComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule
  ]
})
export class UserProfileModule { }
