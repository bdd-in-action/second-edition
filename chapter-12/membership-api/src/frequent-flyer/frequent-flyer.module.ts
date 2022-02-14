import { Module } from '@nestjs/common';
import { FrequentFlyerService } from './frequent-flyer.service';
import { FrequentFlyerController } from './frequent-flyer.controller';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {TokenService} from "../token/token.service";

@Module({
  controllers: [FrequentFlyerController],
  providers: [FrequentFlyerService, FrequentFlyerRepository, TokenService]
})
export class FrequentFlyerModule {}
