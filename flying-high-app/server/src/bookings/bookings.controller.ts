import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FlightsService } from '../shared/services/flights.service';

@ApiBearerAuth()
@Controller('api/bookings')
export class BookingsController {

    constructor(private flightService: FlightsService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiQuery({
        name: 'email',
        description: 'get user bookings by email'
    })
    getUserBookings(@Query('email') email: string) {
        return this.flightService.getFlightsByEmail(email);
    }
}
