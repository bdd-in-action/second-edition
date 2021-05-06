import { UsersService } from '../shared/services/users.service';
import { UserDto } from './dto/user.dto';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    getUsers(): import("./interface/users.interface").User[];
    getUserBookings(email: string): {
        totalPoints: number;
        userAccount: import("./interface/account.interface").Account[];
    };
    createUser(user: UserDto): {
        userLevel: import("./interface/users.interface").USER_LEVEL;
        points: number;
        userId: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        address: string;
        country: string;
        title: import("./interface/users.interface").USER_TITLE;
        newsletterSub: boolean;
        seatPreference: import("./interface/users.interface").SEAT_PREFERENCE;
    };
    updateUser(user: UserDto, userId: string): import("./interface/users.interface").User;
    getUserById(userId: string): import("./interface/users.interface").User;
    earnPoints(userId: string, points: number): import("./interface/users.interface").User;
    resetPoints(userId: string): import("./interface/users.interface").User;
    deleteUser(userId: string): string;
}
