import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { AuthService } from './services/auth.service';
import { BookingsService } from './services/bookings.service';
import { FlightsService } from './services/flights.service';
import { UsersService } from './services/users.service';

@Module({
    providers: [FlightsService, BookingsService, UsersService, AuthService],
    imports: [HttpModule, 
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '48h' }
        }),],
    exports: [FlightsService, BookingsService, UsersService, AuthService]
})
export class SharedModule { }
