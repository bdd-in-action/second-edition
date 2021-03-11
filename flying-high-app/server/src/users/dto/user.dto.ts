import { ApiProperty } from "@nestjs/swagger";
import { SEAT_PREFERENCE, USER_TITLE } from "../interface/users.interface";

export class UserDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    country: string;
    @ApiProperty(
        {
            enum: ['Mr', 'Mrs'],
            description: 'Only Mr and Mrs are allowed when creating user'
        }
    )
    title: USER_TITLE;
    @ApiProperty()
    newsletterSub: boolean;
    @ApiProperty(
        {
            enum: ['aisle', 'window'],
            description: 'Only asisle and window are allowed when creating user'
        }
    )
    seatPreference: SEAT_PREFERENCE;
}