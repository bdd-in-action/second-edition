import { City } from "./city.interface";

export interface Flight {
    departure: City;
    destination: City;
    departureDate: Date;
    returnDate?: Date;
    arrivalDate?: Date;
    class: 'Economy' | 'Premium Economy' | 'Business';
    price?: number;
    email?: string;
}

export interface FlightResource {
    departureTime: Date;
    arrivalTime: Date;
    duration: string;
    departure: City;
    destination: City;
    class: 'Economy' | 'Premium Economy' | 'Business';
    price?: number;
}
