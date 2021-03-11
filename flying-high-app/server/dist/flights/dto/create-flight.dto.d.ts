import { CityDto } from "./city.dto";
export declare class CreateFlightDto {
    departure: CityDto;
    destination: CityDto;
    departureDate: Date;
    arrivalDate: Date;
    class: 'Economy' | 'Premium Economy' | 'Business';
    email: string;
}
