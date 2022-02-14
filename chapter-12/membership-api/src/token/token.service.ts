import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {

    pendingTokens = new Map<string, string>();

    /**
     * Generate a new token for a given email and frequent flyer number
     */
    newToken(email:string, id: number) {
        const data = {email: email, id: id};

        const token = require('crypto')
            .createHash('sha256')
            .update(JSON.stringify(data))
            .digest('hex');

        this.pendingTokens.set(email, token);

        return token;
    }

    /**
     *
     * @param email
     * @param token
     */
    validate(email: string, token: string) {
        if (this.pendingTokens.get(email) == token) {
            this.pendingTokens.delete(email);
            return true;
        } else {
            return false;
        }
    }

    findByEmail(email: string) {
        return this.pendingTokens.get(email)
    }
}
