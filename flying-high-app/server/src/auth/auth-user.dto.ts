import { ApiProperty } from "@nestjs/swagger";

export class AuthUserDto {
    @ApiProperty({ description: 'Generate the token and apply it by clicking the lock icon above to get AUTH access. default email admin@flyinghigh.com' })
    email: string;
    @ApiProperty({ description: 'default password admin' })
    password: string;
}