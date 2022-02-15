import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrequentFlyerModule } from './frequent-flyer/frequent-flyer.module';

@Module({
  imports: [FrequentFlyerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
