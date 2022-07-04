import { Module } from '@nestjs/common';
import { FrequentFlyerService } from './frequent-flyer.service';
import { FrequentFlyerController } from './frequent-flyer.controller';
import {FrequentFlyerRepository} from "./frequent-flyer.repository";
import {TokenService} from "../token/token.service";
import {TokenController} from "../token/token.controller";
import {EventBusController} from "../events/eventbus.controller";
import {EventBusService} from "../events/eventbus.service";
import {AuthenticationController} from "../authentication/authentication.controller";
import {AuthenticationService} from "../authentication/authentication.service";

@Module({
  controllers: [FrequentFlyerController, TokenController, EventBusController, AuthenticationController],
  providers: [FrequentFlyerService, FrequentFlyerRepository, TokenService, EventBusService, AuthenticationService]
})
export class FrequentFlyerModule {}
