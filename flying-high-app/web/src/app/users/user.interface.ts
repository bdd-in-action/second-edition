import { SEAT_PREFERENCE, USER_LEVEL, USER_TITLE } from "../shared/enums/user.enum";

export interface UserDto {
    email: string;
    password: string;
    firstName:string;
    lastName: string;
    address: string;
    country: string;
    title: USER_TITLE;
    newsletterSub: boolean;
    seatPreference: SEAT_PREFERENCE;
}

export interface User {
    email: string;
    password: string;
    userId: string;
    firstName:string;
    lastName: string;
    address: string;
    country: string;
    title: USER_TITLE;
    newsletterSub: boolean;
    userLevel: USER_LEVEL;
    points: number;
    seatPreference: SEAT_PREFERENCE;
}