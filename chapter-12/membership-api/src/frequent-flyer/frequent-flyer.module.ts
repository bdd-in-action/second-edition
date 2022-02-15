import { Module } from '@nestjs/common';
import { FrequentFlyerService } from './frequent-flyer.service';
import { FrequentFlyerController } from './frequent-flyer.controller';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {TokenService} from "../token/token.service";
import {TokenController} from "../token/token.controller";

@Module({
  controllers: [FrequentFlyerController, TokenController],
  providers: [FrequentFlyerService, FrequentFlyerRepository, TokenService]
})
export class FrequentFlyerModule {}
