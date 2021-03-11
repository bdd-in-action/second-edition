import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingsRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule
  ]
})
export class BookingModule { }
