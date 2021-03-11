import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from '../shared/services/users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiBearerAuth()
@Controller('api/users')
export class UsersController {

    constructor(
        private service: UsersService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers() {
        return this.service.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('flights')
    @ApiQuery({
        name: 'email',
        description: 'get user account information (flight points, flight date, etc)'
    })
    getUserBookings(@Query('email') email: string) {
        return this.service.getFlightsByEmail(email);
    }

    @Post()
    createUser(@Body() user: UserDto) {
        return this.service.createUser(user);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBody({ type: UserDto })
    @Put()
    @ApiBearerAuth()
    updateUser(@Body() user: UserDto, @Query('userId') userId: string) {
        return this.service.updateUser(userId, user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('id')
    @ApiBearerAuth()
    getUserById(@Query('userId') userId: string) {
        return this.service.getUserById(userId);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    @ApiBody({ type: UserDto })
    @ApiBearerAuth()
    @ApiQuery({
        name: 'user id',
        description: 'delete user with user id'
    })
    deleteUser(@Query('userId') userId: string) {
        return this.service.deleteUser(userId);
    }
}
