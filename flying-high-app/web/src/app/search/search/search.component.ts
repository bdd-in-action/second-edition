import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, debounceTime, switchMap, mergeMap } from 'rxjs/operators';
import { City } from '../city.interface';
import { SearchService } from '../search.service';
import { ToastrService } from 'ngx-toastr';
import { Flight, FlightResource } from '../flight.interface';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FlightService } from 'src/app/shared/services/flight.service';
import { UsersAccountService } from 'src/app/shared/services/users-account.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @BlockUI() blockUI: NgBlockUI;
  blockUITimeout = 300000;
  timeout: any;

  form: FormGroup;
  cities: City[];
  minDepartureDate = new Date();
  maxDepartureDate: Date;
  minReturnDate: Date;
  classes = ['Economy', 'Premium Economy', 'Business'];
  resourceFlights: FlightResource[] = [];
  resourceFlightsReturn = [];

  // after successful creation of flights
  successfulBook = null;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private toastr: ToastrService,
    private authService: AuthService,
    private flightService: FlightService,
    private userService: UsersAccountService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: [new Date(), Validators.required],
      returnDate: [''],
      class: ['', Validators.required]
    })
    this.form.get('departure').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap((value) => {
        return value ? this.searchService.getCities(value) : [];
      })
    ).subscribe(cities => {
      this.cities = cities;
    });
    this.form.get('destination').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap((value) => {
        return value ? this.searchService.getCities(value) : [];
      })
    ).subscribe(cities => {
      this.cities = cities;
    });
    this.form.get('departureDate').valueChanges.subscribe(date => {
      this.minReturnDate = date;
    });
    this.form.get('returnDate').valueChanges.subscribe(date => {
      this.maxDepartureDate = date;
    });
  }

  ngOnDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  async submit(form: FormGroup) {
    this.resourceFlightsReturn = [];
    this.resourceFlights = [];
    this.successfulBook = null;
    const { value, valid } = form;
    if (valid) {
      if (value.departure === value.destination) {
        this.toastr.error('Departure city is the same as the destination city');
      } else {
        const flight: Flight = {
          departure: value.departure,
          destination: value.destination,
          departureDate: value.departureDate,
          returnDate: value.returnDate ? value.returnDate : null,
          class: value.class
        }
        try {
          this.blockUI.start('Seaching...');
          this.timeout = setTimeout(() => {
            this.blockUI.reset();
          }, this.blockUITimeout);
          if (value.returnDate) {
            this.resourceFlights = [];
            this.resourceFlightsReturn = await this.searchService.getResourceFlight(flight).toPromise();
          } else {
            this.resourceFlightsReturn = [];
            this.resourceFlights = await this.searchService.getResourceFlight(flight).toPromise();
          }
          this.blockUI.stop();
        } catch {
          this.toastr.error('server error, please try again');
          this.blockUI.stop();
        }
      }
    }
  }

  getReturnFlightPrice(resourceFlightReturn: [FlightResource, FlightResource]) {
    return Math.floor((resourceFlightReturn[0].price + resourceFlightReturn[1].price) * 0.75);
  }

  bookFlight(flightResouce: FlightResource | [FlightResource, FlightResource]) {
    if (this.authService.isLogin()) {
      const email = this.authService.getLoggedInUser().email;
      if (flightResouce instanceof Array) {
        const comeFlight = {
          departure: flightResouce[0].departure,
          destination: flightResouce[0].destination,
          departureDate: flightResouce[0].departureTime,
          arrivalDate: flightResouce[0].arrivalTime,
          class: flightResouce[0].class,
          email: email
        };
        const returnFlight = {
          departure: flightResouce[1].departure,
          destination: flightResouce[1].destination,
          departureDate: flightResouce[1].departureTime,
          arrivalDate: flightResouce[1].arrivalTime,
          class: flightResouce[1].class,
          email: email
        };
        Promise.all([
          this.flightService.createFlight(comeFlight).toPromise(),
          this.flightService.createFlight(returnFlight).toPromise()
        ]).then(() => {
          this.successfulBook = flightResouce;
          this.resourceFlights = [];
          this.resourceFlightsReturn = []
          this.toastr.success('flights booked');
        }, () => {
          this.successfulBook = null;
          this.toastr.error('server error');
        });
      } else {
        this.flightService.createFlight({
          departure: flightResouce.departure,
          destination: flightResouce.destination,
          departureDate: flightResouce.departureTime,
          arrivalDate: flightResouce.arrivalTime,
          class: flightResouce.class,
          email: email
        }).toPromise().then(async () => {
          this.successfulBook = flightResouce;
          this.resourceFlights = [];
          this.resourceFlightsReturn = [];
          this.toastr.success('flights booked');
        }, () => {
          this.successfulBook = null;
          this.toastr.error('server error');
        });
      }
    } else {
      this.toastr.error('Please login to continue');
    }
  }

  isSuccessBookArray() {
    if (this.successfulBook) {
      return this.successfulBook instanceof Array;
    }
    return false;
  }
}