import {Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query} from '@nestjs/common';
import {TokenService} from "./token.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import * as Path from "path";

@Controller('api/tokens')
export class TokenController {
    constructor(private readonly tokenService: TokenService) {}

    @Get('/frequent-flyer/:id')
    @ApiOperation({summary:'Single-use tokens',
                           description:'Find the current token for a given frequent flyer. Used to generate the validation email.'})
    @ApiResponse({status: 404, description:'Unknown frequent flyer'})
    findByID(@Param('id') frequentFlyerNumber: string) {
        const token = this.tokenService.findByFrequentFlyerNumber(Number(frequentFlyerNumber))
        if (!token) {
            throw new HttpException('Unknown frequent flyer', HttpStatus.NOT_FOUND)
        }
        return token;
    }

    @Get('/')
    findAll() {
        return this.tokenService.findAll();
    }
}
