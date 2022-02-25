import {Injectable} from '@nestjs/common';
import {FrequentFlyerService} from "../frequent-flyer/frequent-flyer.service";

@Injectable()
export class AuthenticationService {

    constructor(
        private readonly frequentFlyerService: FrequentFlyerService
    ) {
    }

    /**
     * Validate a given frequent flyer with a given email and token
     */
    authenticate(email: string, password: string) {
        const matchingUser = this.frequentFlyerService.findByEmail(email);
        if ((matchingUser) && (matchingUser.password == password)) {

            const jwt = require('jsonwebtoken');
            const token = jwt.sign({  id: matchingUser.frequentFlyerNumber, username: matchingUser.email }, 'TOP-SECRET-PRIVATE-KEY');

            return {
                email: matchingUser.email,
                frequentFlyerNumber: matchingUser.frequentFlyerNumber,
                firstName: matchingUser.firstName,
                lastName: matchingUser.lastName,
                isActivated: matchingUser.isActivated,
                jwtToken: token
            }
        } else {
            return undefined;
        }
    }
}
