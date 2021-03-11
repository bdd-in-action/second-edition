import { City } from "./city.interface";
export interface Flight {
    departure: City;
    destination: City;
    departureDate: Date;
    returnDate: Date;
    departureTime: Date;
    returnTime: Date;
    class: 'Economy' | 'Premium Economy' | 'Business';
    email: string;
    points: number;
    price: number;
    orderNumber: string;
}
export interface FlightResource {
    departureTime: Date;
    arrivalTime: Date;
    duration: string;
    departure: City;
    destination: City;
    price: number;
    class: 'Economy' | 'Premium Economy' | 'Business';
}
