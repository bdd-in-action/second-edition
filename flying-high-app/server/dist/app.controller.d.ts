import { AuthService } from './shared/services/auth.service';
import { AuthUserDto } from './auth/auth-user.dto';
import { AppService } from './app.service';
import { UserDto } from './users/dto/user.dto';
import { UsersService } from './shared/services/users.service';
export declare class AppController {
    private authService;
    private usersService;
    private appService;
    constructor(authService: AuthService, usersService: UsersService, appService: AppService);
    login(authUser: AuthUserDto): Promise<{
        access_token: string;
        email: string;
        userId: string;
    }>;
    register(user: UserDto): {
        points: number;
        userLevel: import("./users/interface/users.interface").USER_LEVEL;
        userId: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        address: string;
        country: string;
        title: import("./users/interface/users.interface").USER_TITLE;
        newsletterSub: boolean;
        seatPreference: import("./users/interface/users.interface").SEAT_PREFERENCE;
    };
    getCountryList(search: string): Promise<any>;
}
