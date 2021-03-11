import { HttpModule, Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [FlightsController],
  imports: [HttpModule, SharedModule],
})
export class FlightsModule {}
