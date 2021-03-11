import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/search/flight.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  url = `${environment.API_URL}/api/bookings`;

  constructor(private http: HttpClient) { }

  getUserBookings(email: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.url}?email=${email}`);
  }

}
