import { ApiProperty } from "@nestjs/swagger";

export class CityDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    point: number;
    @ApiProperty()
    short: string;
}