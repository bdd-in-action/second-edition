import { SEAT_PREFERENCE, USER_LEVEL, USER_TITLE } from "../interface/users.interface";
export declare class UserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    title: USER_TITLE;
    newsletterSub: boolean;
    seatPreference: SEAT_PREFERENCE;
    userLevel: USER_LEVEL;
    points: number;
}
