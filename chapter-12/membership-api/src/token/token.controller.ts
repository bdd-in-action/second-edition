import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TokenService} from "./token.service";

@Controller('api/tokens')
export class TokenController {
    constructor(private readonly tokenService: TokenService) {}

    /**
     * Find the token for a given email. Used to generate the validation email.
     */
    @Get(':email')
    findByEmail(@Param('email') email: string) {
        return this.tokenService.findByEmail(email)
    }
}
