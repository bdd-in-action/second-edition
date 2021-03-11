import { FlightsService } from '../shared/services/flights.service';
export declare class BookingsController {
    private flightService;
    constructor(flightService: FlightsService);
    getUserBookings(email: string): import("../flights/interface/flight.interface").Flight[];
}
