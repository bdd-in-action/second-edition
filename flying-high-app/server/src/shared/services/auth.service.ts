import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interface/users.interface';
import { AuthUserDto } from '../../auth/auth-user.dto';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {

    private authUser: User;

    constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    validateUser(email: string, pass: string) {
        const user = this.usersService.getUserByEmail(email);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }


    login(user: AuthUserDto) {
        const payload = { email: user.email };
        const access_token = this.jwtService.sign(payload);
        const currentUser = this.usersService.getUserByEmail(user.email);
        this.authUser = currentUser;
        return { access_token, email: currentUser.email, userId: currentUser.userId };
    }

    getAuthUser() {
        return this.authUser;
    }
}
