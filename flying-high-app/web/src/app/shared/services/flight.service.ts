import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/search/flight.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url = `${environment.API_URL}/api/flights`;

  constructor(private http: HttpClient) { }

  createFlight(flight: Flight): Observable<Flight[]> {
    return this.http.post<Flight[]>(this.url, flight);
  }

}
