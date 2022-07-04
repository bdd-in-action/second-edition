import { Injectable } from '@nestjs/common';
import {Token} from "./token";

@Injectable()
export class TokenService {

    tokens = new Map<number, Token>();

    /**
     * Generate a new token for a given email and frequent flyer number
     */
    newToken(email:string, frequentFlyerNumber: number) {
        const token = new Token()
        token.email = email;
        token.frequentFlyerNumber = frequentFlyerNumber;
        this.tokens[Number(frequentFlyerNumber)] = token;
        return token.hash;
    }

    /**
     * Validate a given frequent flyer with a given email and token
     */
    validate(email: string, frequentFlyerNumber: number, token: string) {
        const matchingToken = this.tokens[frequentFlyerNumber];
        if (matchingToken && matchingToken.email == email
            && matchingToken.hash == token
            && !matchingToken.spent && !matchingToken.isExpired()) {
            matchingToken.spent = true
            return true;
        } else {
            return false;
        }
    }

    findByFrequentFlyerNumber(frequentFlyerNumber: number) {
        return this.tokens[frequentFlyerNumber]?.hash;
    }

    findAll() {
        return this.tokens;
    }
}
