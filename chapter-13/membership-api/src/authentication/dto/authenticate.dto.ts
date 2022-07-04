import {ApiProperty} from "@nestjs/swagger";

export class AuthenticateDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}
