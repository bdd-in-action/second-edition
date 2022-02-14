import {Status} from "./status";

export class FrequentFlyer {
    frequentFlyerNumber: number;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    password: string;
    address: string;
    country: string;
    status: Status = Status.Pending;
}
