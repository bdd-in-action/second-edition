import { CreateFlightDto } from './dto/create-flight.dto';
import { SearchFlightDto } from './dto/search-flight.dto';
import { FlightsService } from '../shared/services/flights.service';
import { Flight } from './interface/flight.interface';
export declare class FlightsController {
    private service;
    constructor(service: FlightsService);
    getFlights(): Flight[];
    getCities(cityname: string): import("./interface/city.interface").City[];
    createFlight(createFlightDto: CreateFlightDto): Flight[];
    getResourceFlights(searchFlightDto: SearchFlightDto): Promise<import("./interface/flight.interface").FlightResource[] | import("./interface/flight.interface").FlightResource[][]>;
}
