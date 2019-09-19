import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewCurrentBookingsComponent } from './view-current-bookings/view-current-bookings.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';


@NgModule({
  declarations: [UpdateProfileComponent, ViewCurrentBookingsComponent, BookingHistoryComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule
  ]
})
export class UserProfileModule { }
