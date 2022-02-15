import {Body, Controller, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
import {TokenService} from "./token.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('api/tokens')
export class TokenController {
    constructor(private readonly tokenService: TokenService) {}

    @Get(':email')
    @ApiOperation({summary:'Single-use tokens',
                           description:'Find the current token for a given email. Used to generate the validation email.'})
    @ApiResponse({status: 404, description:'Unknown email'})
    findByEmail(@Param('email') email: string) {
        const token = this.tokenService.findByEmail(email)
        if (!token) {
            throw new HttpException('Unknown email', HttpStatus.NOT_FOUND)
        }
        return token;
    }
}
