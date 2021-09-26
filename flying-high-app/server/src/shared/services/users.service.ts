import { BadRequestException, forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { UserDto } from '../../users/dto/user.dto';
import { Account } from '../../users/interface/account.interface';
import { User, USER_LEVEL, USER_TITLE, SEAT_PREFERENCE } from '../../users/interface/users.interface';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            userId: '8XDGVLsNUp',
            email: 'admin@flyinghigh.com',
            password: 'admin',
            firstName: 'Tracy',
            lastName: 'Traveller',
            address: '1677 S Havana St, Aurora',
            title: USER_TITLE.MS,
            newsletterSub: true,
            userLevel: USER_LEVEL.STANDARD,
            points: 0,
            country: 'United States of America (the)',
            seatPreference: SEAT_PREFERENCE.AISLE
        },
        {
            userId: '8XDGVLsNUq',
            email: 'bryony@flyinghigh.com',
            password: 'admin',
            firstName: 'Bryony',
            lastName: 'Tripper',
            address: '100 Main St, St Cloud',
            title: USER_TITLE.MS,
            newsletterSub: true,
            userLevel: USER_LEVEL.STANDARD,
            points: 0,
            country: 'United States of America (the)',
            seatPreference: SEAT_PREFERENCE.AISLE
        }
    ]

    constructor(
        @Inject(forwardRef(() => FlightsService))
        private flightService: FlightsService
    ) { }

    getUsers() {
        return this.users;
    }

    getUserById(userId: string) {
        const user = this.users.find(u => u.userId === userId);
        return user;
    }

    getUserByEmail(email: string) {
        const user = this.users.find(u => u.email === email);
        return user;
    }

    createUser(user: UserDto) {
        if (!user.email) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your email'
            )
        } else if (!user.password) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your password'
            )
        } else if (!user.firstName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your first name'
            )
        } else if (!user.lastName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your last name'
            )
        } else if (!user.address) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your address'
            )
        } else if (!user.country) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your country'
            )
        }
        const exists = this.users.findIndex(u => u.email === user.email);
        if (exists > -1) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Email exists, please try another name'
            )
        } else if (
            user.seatPreference !== SEAT_PREFERENCE.AISLE &&
            user.seatPreference !== SEAT_PREFERENCE.WINDOW
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Seat preference is the type of enum: SEAT_PREFERENCE: window OR aisle'
            )
        } else if (
            user.title !== USER_TITLE.MR && user.title !== USER_TITLE.MS && user.title !== USER_TITLE.MRS
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'User title is the type of enum: USER_TITLE: Mr, Ms OR Mrs'
            )
        }
        // create userId
        const userId = this.generateRandomString(10);

        const newUser = {
            ...user,
            userLevel: USER_LEVEL.STANDARD,
            points: 0,
            userId
        }
        if (user.userLevel) {
            newUser.userLevel = user.userLevel;
            switch(newUser.userLevel) {
                case USER_LEVEL.BRONZE: 
                    newUser.points = 1000;
                    break;
                case USER_LEVEL.SILVER: 
                    newUser.points = 2000;
                    break;
                case USER_LEVEL.GOLD: 
                    newUser.points = 5000;
                    break;
                default:
                    newUser.points = 0;
            }
        }
        if (user.points) {
            newUser.points = user.points * 1
        }
        this.users.push(newUser);
        return newUser;
    }

    deleteUser(userId: string) {
        this.users = this.users.filter(u => userId !== u.userId);
        return userId;
    }

    updateUser(userId: string, user: UserDto) {
        if (!user.email) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your email'
            )
        } else if (!user.password) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your password'
            )
        } else if (!user.firstName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your first name'
            )
        } else if (!user.lastName) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your last name'
            )
        } else if (!user.address) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your address'
            )
        } else if (!user.country) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Please enter your country'
            )
        }
        const exists = this.users
            .filter(u => u.userId !== userId)
            .findIndex(u => u.email === user.email);
        if (exists > -1) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Email exists, please try another name'
            )
        } else if (
            user.seatPreference !== SEAT_PREFERENCE.AISLE &&
            user.seatPreference !== SEAT_PREFERENCE.WINDOW
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'Seat preference is the type of enum: SEAT_PREFERENCE: window OR aisle'
            )
        } else if (
            user.title !== USER_TITLE.MR && user.title !== USER_TITLE.MS && user.title !== USER_TITLE.MRS
        ) {
            throw new BadRequestException(
                HttpStatus.BAD_REQUEST,
                'User title is the type of enum: USER_TITLE: Mr, Ms OR Mrs'
            )
        }
        const index = this.users.findIndex(u => userId === u.userId);
        const points = this.users[index].points;
        const userLevel = this.users[index].userLevel;
        this.users[index] = { ...user, points, userLevel, userId };
        return this.users[index];
    }

    getFlightsByEmail(email: string) {
        const flights = this.flightService.getFlightsByEmail(email);
        const totalPoints = flights.reduce((a, b) => a + b.points, 0);
        const userAccount: Account[] = flights.map(flight => {
            return {
                flightInfo: {
                    date: new Date(flight.departureDate),
                    departure: flight.departure.name,
                    destination: flight.destination.name,
                    point: flight.points
                }
            }
        })
        return {
            totalPoints,
            userAccount
        };
    }

    /**  
     * Reset earned points to 0 and status level to STANDARD.
     */
    resetPoints(userId: string) {
        this.getUserById(userId).userLevel = USER_LEVEL.STANDARD
        this.getUserById(userId).points = 0
    }

    /**
     * Threshold levels are:
     *  - BRONZE: 1000 points (25% bonus)
     *  - SILVER: 2000 points (50% bonus)
     *  - GOLD: 5000 points (100% bonus)
     * Only flights booked at a given status level earn the bonus points at that level.
     * @param authUser 
     * @param points 
     * @returns 
     */
    updateUserPointsAndLevel(userEmail: string, points: number): number {

        const user = this.getUserByEmail(userEmail)
        const pointsEarned = this.pointsEarned(user, points)
        this.addPointsToUser(userEmail, pointsEarned)
        return Math.round(pointsEarned);
    }

    userWithId(userId: string) {
        const currentUserIndex = this.users.findIndex(u => u.userId === userId);
        return this.users[currentUserIndex];
    }

    addPointsToUser(userEmail: string, points: number) {
        const user = this.getUserByEmail(userEmail)
        const pointsEarned = user.points + points;
        const userLevel = this.statusLevelForPoints(pointsEarned)
        user.points = pointsEarned;
        user.userLevel = userLevel;
    }

    pointsEarned(user: User, points: number) {
        if (user) {
            switch (user.userLevel) {
                case USER_LEVEL.BRONZE: {
                    return (1 + 0.25) * points;
                }
                case USER_LEVEL.SILVER: {
                    return (1 + 0.5) * points;
                }
                case USER_LEVEL.GOLD: {
                    return points * 2;
                }
                default: {
                    return points * 1;
                }
            }
        } else {
            return points * 1;
        }
    }

    statusLevelForPoints(points: number) {
        if (points >= 5000) {
            return USER_LEVEL.GOLD;
        } else if (points < 5000 && points >= 2000) {
            return USER_LEVEL.SILVER;
        } else if (points < 2000 && points >= 1000) {
            return USER_LEVEL.BRONZE;
        } else {
            return USER_LEVEL.STANDARD;
        }        
    }

    generateRandomString(length: number, charSet?: string): string {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < length; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }

}
