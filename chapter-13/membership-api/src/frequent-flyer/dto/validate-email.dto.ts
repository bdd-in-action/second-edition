import {ApiProperty} from "@nestjs/swagger";

export class ValidateEmailDto {
    @ApiProperty()
    frequentFlyerNumber: number;
    @ApiProperty()
    email: string;
    @ApiProperty()
    token: string;
}
