import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interface/users.interface';
import { AuthUserDto } from '../../auth/auth-user.dto';
import { UsersService } from './users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private authUser;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): {
        email: string;
        userId: string;
        firstName: string;
        lastName: string;
        address: string;
        country: string;
        title: import("../../users/interface/users.interface").USER_TITLE;
        newsletterSub: boolean;
        userLevel: import("../../users/interface/users.interface").USER_LEVEL;
        points: number;
        seatPreference: import("../../users/interface/users.interface").SEAT_PREFERENCE;
    };
    login(user: AuthUserDto): {
        access_token: string;
        email: string;
        userId: string;
    };
    getAuthUser(): User;
}
