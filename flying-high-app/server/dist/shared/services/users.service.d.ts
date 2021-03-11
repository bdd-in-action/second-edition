import { FlightsService } from './flights.service';
import { UserDto } from '../../users/dto/user.dto';
import { Account } from '../../users/interface/account.interface';
import { User, USER_LEVEL, USER_TITLE, SEAT_PREFERENCE } from '../../users/interface/users.interface';
export declare class UsersService {
    private flightService;
    private users;
    constructor(flightService: FlightsService);
    getUsers(): User[];
    getUserById(userId: string): User;
    getUserByEmail(email: string): User;
    createUser(user: UserDto): {
        points: number;
        userLevel: USER_LEVEL;
        userId: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        address: string;
        country: string;
        title: USER_TITLE;
        newsletterSub: boolean;
        seatPreference: SEAT_PREFERENCE;
    };
    deleteUser(userId: string): string;
    updateUser(userId: string, user: UserDto): User;
    getFlightsByEmail(email: string): {
        totalPoints: number;
        userAccount: Account[];
    };
    updateUserPointsAndLevel(authUser: User, points: number): number;
    generateRandomString(length: number, charSet?: string): string;
}
