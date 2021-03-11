import { HttpService } from '@nestjs/common';
import { City } from '../../flights/interface/city.interface';
import { Flight, FlightResource } from '../../flights/interface/flight.interface';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
export declare class FlightsService {
    private readonly http;
    private authService;
    private usersService;
    private readonly flightSpeed;
    private readonly flights;
    cityList: {
        name: string;
        point: number;
        short: string;
    }[];
    constructor(http: HttpService, authService: AuthService, usersService: UsersService);
    getCities(filter: string): City[];
    getCity(cityName: any): {
        name: string;
        point: number;
        short: string;
    };
    createFlight(flight: Flight): Flight[];
    getFlights(): Flight[];
    getFlightsByEmail(email: string): Flight[];
    searchFlight(flight: Flight): Promise<FlightResource[] | FlightResource[][]>;
    private generateRandomTime;
    private getTravelDuration;
    generateRandomString(length: number, charSet?: string): string;
}
