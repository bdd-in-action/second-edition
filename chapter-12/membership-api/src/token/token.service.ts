import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {

    pendingTokens = new Map<number, string>();
    tokenEmails = new Map<string,string>();

    /**
     * Generate a new token for a given email and frequent flyer number
     */
    newToken(email:string, id: number) {
        const data = {email: email, id: id};

        const token = require('crypto')
            .createHash('sha256')
            .update(JSON.stringify(data))
            .digest('hex');

        this.pendingTokens.set(id, token);
        this.tokenEmails.set(email, token);

        console.log("PENDING TOKENS: " + this.pendingTokens.size)
        console.log("EMAIL TOKENS: " + this.tokenEmails.size)
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
        console.log("PENDING TOKENS: " + this.pendingTokens.size)
        console.log("EMAIL TOKENS: " + this.tokenEmails.size)
        return this.pendingTokens.get(frequentFlyerNumber)
    }
}
