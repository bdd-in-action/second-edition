import {Controller, Get, HttpException, HttpStatus, Param, Query} from '@nestjs/common';
import {ApiOperation} from "@nestjs/swagger";
import {EventBusService} from "./eventbus.service";

@Controller('api/events')
export class EventBusController {
    constructor(private readonly eventBusService: EventBusService) {
    }

    @Get('/')
    @ApiOperation({summary: 'View the event log'})
    findAll() {
        return this.eventBusService.findAll();
    }

    @Get('/:eventtype')
    @ApiOperation({summary: 'View the event log'})
    findEvent(@Param('eventtype') eventtype: string,
              @Query('field') fieldName: string,
              @Query('value') fieldValue: any) {
        const event = this. eventBusService.findEventMatching(eventtype, fieldName, fieldValue);
        if (event) {
            return event;
        }
        throw new HttpException('No matching event found', HttpStatus.NOT_FOUND)
    }
}
