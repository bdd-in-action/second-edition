import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SharedModule } from './shared/shared.module';
import { BookingsModule } from './bookings/bookings.module';
import { FlightsModule } from './flights/flights.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';

@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web')
    }),
    SharedModule,
    BookingsModule,
    FlightsModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
