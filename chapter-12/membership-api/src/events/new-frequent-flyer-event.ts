import {EventMessage} from "./event-message";

export class NewFrequentFlyerEvent implements EventMessage {
    data: any;
    type = 'NewFrequentFlyerEvent';
    id = Date.now();
    timestamp = new Date();

    constructor(data: any) {
        this.data = data;
    }
}