import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {

    pendingTokens = new Map<number, string>();
    tokenEmails = new Map<string,string>();

    /**
     * Generate a new token for a given email and frequent flyer number
     */
    newToken(email:string, frequentFlyerNumber: number) {
        const data = {email: email, id: frequentFlyerNumber, nonce: this.tokenEmails.size};

        const token = require('crypto')
            .createHash('sha256')
            .update(JSON.stringify(data))
            .digest('hex');

        this.pendingTokens.set(frequentFlyerNumber, token);
        this.tokenEmails.set(email, token);
        return token;
    }

    /**
     * Validate a given frequent flyer with a given email and token
     */
    validate(email: string, frequentFlyerNumber: number, token: string) {
        const matchingToken = this.pendingTokens.get(frequentFlyerNumber);
        if (token == matchingToken && this.tokenEmails.get(email) == token) {
            this.pendingTokens.delete(frequentFlyerNumber);
            return true;
        } else {
            return false;
        }
    }

    findByFrequentFlyerNumber(frequentFlyerNumber: number) {
        return this.pendingTokens.get(frequentFlyerNumber)
    }
}
