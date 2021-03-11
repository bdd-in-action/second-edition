import { Component, OnInit } from '@angular/core';
import { Flight } from '../search/flight.interface';
import { AuthService } from '../shared/services/auth.service';
import { BookingsService } from '../shared/services/bookings.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookings: Flight[] = [];

  constructor(
    private bookingService: BookingsService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const email = this.authService.getLoggedInUser().email;
    this.bookings = await this.bookingService.getUserBookings(email).toPromise();
  }

}
