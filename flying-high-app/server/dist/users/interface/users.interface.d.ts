export interface User {
    email: string;
    password: string;
    userId: string;
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    title: USER_TITLE;
    newsletterSub: boolean;
    userLevel: USER_LEVEL;
    points: number;
    seatPreference: SEAT_PREFERENCE;
}
export declare enum USER_TITLE {
    MR = "Mr",
    MS = "Ms",
    MRS = "Mrs"
}
export declare enum SEAT_PREFERENCE {
    AISLE = "aisle",
    WINDOW = "window"
}
export declare enum USER_LEVEL {
    STANDARD = "STANDARD",
    BRONZE = "BRONZE",
    SILVER = "SILVER",
    GOLD = "GOLD"
}
