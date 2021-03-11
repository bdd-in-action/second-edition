import { ApiProperty } from "@nestjs/swagger";
import { CityDto } from "./city.dto";

export class CreateFlightDto {
    @ApiProperty({ type: CityDto, description: 'create your city object following City Schema' })
    departure: CityDto;
    @ApiProperty({ type: CityDto, description: 'create your city object following City Schema' })
    destination: CityDto;
    @ApiProperty({ description: 'get the departure date from the flight search api' })
    departureDate: Date;
    @ApiProperty({ description: 'get the departure date from the flight search api' })
    arrivalDate: Date;
    @ApiProperty({ enum: ['Economy', 'Premium Economy', 'Business'], description: 'only Economy, Premium Economy, Business are allowed' })
    class: 'Economy' | 'Premium Economy' | 'Business';
    @ApiProperty({ description: 'email is needed to create a flight record' })
    email: string;
}