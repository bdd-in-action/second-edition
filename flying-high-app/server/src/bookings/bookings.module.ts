import { HttpModule, Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    controllers: [BookingsController],
    imports: [HttpModule, SharedModule],
})
export class BookingsModule { }
