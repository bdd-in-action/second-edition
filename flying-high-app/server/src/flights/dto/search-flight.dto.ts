import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class SearchFlightDto {
    @ApiProperty({ description: 'get departure city string from cities search endpoint' })
    departure: string;
    @ApiProperty({ description: 'get destination city string from cities search endpoint' })
    destination: string;
    @ApiProperty({ description: 'pass a Date object of departure' })
    departureDate: Date;
    @ApiPropertyOptional({ description: '[NOT REQUIRED]pass a Date object of return, which is LATER than the departure date' })
    returnDate: Date;
    @ApiProperty({ enum: ['Economy', 'Premium Economy', 'Business'], description: 'only Economy, Premium Economy, Business are allowed' })
    class: 'Economy' | 'Premium Economy' | 'Business';
}