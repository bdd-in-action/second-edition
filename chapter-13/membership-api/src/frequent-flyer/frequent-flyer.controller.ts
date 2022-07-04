import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post} from '@nestjs/common';
import {FrequentFlyerService} from './frequent-flyer.service';
import {CreateFrequentFlyerDto} from './dto/create-frequent-flyer.dto';
import {ValidateEmailDto} from "./dto/validate-email.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";

@Controller('api/frequent-flyer')
export class FrequentFlyerController {
    emailValidator = require('deep-email-validator');

    constructor(private readonly frequentFlyerService: FrequentFlyerService) {
    }

    /**
     * Create a new frequent flyer account
     * The account will be pending until the member validates their email address
     */
    @Post()
    @ApiOperation({summary: 'Register a new Frequent Flyer member'})
    @ApiResponse({status: 409, description: 'Email already exists'})
    async create(@Body() createFrequentFlyerDto: CreateFrequentFlyerDto) {
        if (this.frequentFlyerService.findByEmail(createFrequentFlyerDto.email)) {
            throw new HttpException('Email already exists', HttpStatus.CONFLICT)
        }

        // Check the new member email address

        if (!createFrequentFlyerDto.email.endsWith('@example.org')) {
            const {valid, reason, validators} = await this.emailValidator.validate(createFrequentFlyerDto.email);
            if (!valid) {
                throw new HttpException('Invalid email address', HttpStatus.BAD_REQUEST);
            }
        }

        return this.frequentFlyerService.create(createFrequentFlyerDto);
    }

    @Post("/email-confirmation")
    @ApiOperation({summary: 'Confirm a new frequent flyer email address'})
    @ApiResponse({status: 400, description: 'Email could not be confirmed with this token'})
    confirmEmail(@Body() validateEmailDto: ValidateEmailDto) {
        if (!this.frequentFlyerService.confirmEmail(validateEmailDto)) {
            throw new HttpException('Could not confirm this email with this token', HttpStatus.BAD_REQUEST);
        }
    }

    @Get()
    @ApiOperation({summary: 'Find the list of all current frequent flyers'})
    findAll() {
        return this.frequentFlyerService.findAll();
    }

    //
    // @Get(":id/history")
    // history(@Param('id') id: number) {
    //     return {
    //         "frequentFlyerNumber": id,
    //         "firstName": "Tracy",
    //         "lastName": "Traveler",
    //         "email": "tracy@example.org",
    //         "flightHistory": [
    //             {
    //                 "from": "London",
    //                 "to": "Paris",
    //                 "date": "2021-12-15"
    //             },
    //             {
    //                 "from": "Paris",
    //                 "to": "London",
    //                 "date": "2021-12-21"
    //             }
    //         ],
    //         "passport": {
    //             "number": "12345678",
    //             "country": "United Kingdom"
    //         }
    //     }
    // }

    @Get(':id')
    @ApiOperation({summary: 'Find a frequent flyer by frequent flyer number'})
    @ApiResponse({status: 400, description: 'Missing mandatory fields'})
    findByFrequentFlyerNumber(@Param('id') id: number) {
        const frequentFlyer = this.frequentFlyerService.findByFrequentFlyerNumber(+id);
        if (!frequentFlyer) {
            throw new HttpException('No matching Frequent Flyer found with this number', HttpStatus.NOT_FOUND)
        } else {
            return frequentFlyer;
        }


    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete a frequent flyer with a given frequent flyer number'})
    remove(@Param('id') id: number) {
        return this.frequentFlyerService.remove(+id);
    }
}
