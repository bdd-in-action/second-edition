import { Body, Controller, Get, Post, Query, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateFlightDto } from './dto/create-flight.dto';
import { SearchFlightDto } from './dto/search-flight.dto';
import { FlightsService } from '../shared/services/flights.service';
import { Flight } from './interface/flight.interface';

@ApiBearerAuth()
@Controller('api/flights')
export class FlightsController {
    constructor(
        private service: FlightsService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getFlights() {
        return this.service.getFlights();
    }

    @Get('cities')
    @ApiQuery({
        name: 'cityname',
            description: 'get a list of cities with a specified name'
    })
    getCities(@Query('cityname') cityname: string) {
        let matchingCities = this.service.getCities(cityname)
        if (matchingCities.length == 0) {
            throw new HttpException('No such city found', HttpStatus.NOT_FOUND);
        }
        return matchingCities;
    }

    @UseGuards(JwtAuthGuard)
    @ApiBody({ type: CreateFlightDto })
    @Post()
    @ApiBearerAuth()
    createFlight(@Body() createFlightDto: CreateFlightDto) {
        const flight: Flight = {
            ...createFlightDto,
            points: createFlightDto.departure.point + createFlightDto.destination.point,
            orderNumber: this.service.generateRandomString(8),
            price: 0,
            returnTime: new Date(),
            departureTime: new Date(),
            returnDate: new Date()
        }
        return this.service.createFlight(flight);
    }

    @Post('search')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiBody({ type: SearchFlightDto })
    getResourceFlights(@Body() searchFlightDto: SearchFlightDto) {
        const flight: Flight = {
            ...searchFlightDto,
            points: 0,
            orderNumber: this.service.generateRandomString(8),
            price: 0,
            returnTime: new Date(),
            departureTime: new Date(),
            departure: this.service.getCity(searchFlightDto.departure),
            destination: this.service.getCity(searchFlightDto.destination),
            email: ''
        }
        return this.service.searchFlight(flight);
    }
}
