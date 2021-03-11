import { Controller, Post, UseGuards, Body, Get, Query } from '@nestjs/common';
import { AuthService } from './shared/services/auth.service';
import { AuthUserDto } from './auth/auth-user.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { UserDto } from './users/dto/user.dto';
import { UsersService } from './shared/services/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private appService: AppService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  async login(@Body() authUser: AuthUserDto) {
    return this.authService.login(authUser);
  }

  @Post('api/auth/register')
  register(@Body() user: UserDto) {
    return this.usersService.createUser(user);
  }

  @Get('api/getCountryList')
  getCountryList(@Query('search') search: string) {
    return this.appService.getCountryList(search);
  }
}
