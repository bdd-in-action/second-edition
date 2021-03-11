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

export enum USER_TITLE {
    MR = 'Mr',
    MRS = 'Mrs'
}

export enum SEAT_PREFERENCE {
    AISLE = 'aisle',
    WINDOW = 'window'
}

export enum USER_LEVEL {
    STANDARD = 'standard',
    BRONZE = 'bronze',
    SILVER = 'silver',
    GOLD = 'gold'
}