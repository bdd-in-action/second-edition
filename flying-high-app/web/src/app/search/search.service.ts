import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City, Country } from './city.interface';
import { Flight, FlightResource } from './flight.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = `${environment.API_URL}/api/flights`;

  constructor(
    private http: HttpClient
  ) { }

  getCities(filter: string): Observable<City[]> {
    return this.http.get<City[]>(`${this.url}/cities?cityname=${filter}`);
  }

  getResourceFlight(flight: Flight): Observable<FlightResource[]> {
    return this.http.post<FlightResource[]>(`${this.url}/search`, flight)
  }

  getCountryList(search: string): Observable<Country[]> {
    return this.http.get<Country[]>(`/api/getCountryList?search=${search}`);
  }

}
