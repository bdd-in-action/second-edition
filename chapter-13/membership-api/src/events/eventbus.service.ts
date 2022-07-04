import { Injectable } from '@nestjs/common';
import {EventMessage} from "./event-message";

@Injectable()
export class EventBusService {
    eventLog: EventMessage[] = [];

    publish(event) {
        this.eventLog.push(event)
    }

    findEventMatching(eventType: string, fieldname: string, value: string) {
        return this.eventLog.find(event => event.type == eventType && event.data[fieldname] == value);
    }

    findAll() {
        return this.eventLog;
    }
}
