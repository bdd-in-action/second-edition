export class Token {
    created: Date = new Date();
    email: string;
    frequentFlyerNumber: number;
    hash: string;
    spent: boolean = false;

    constructor() {
        this.hash = require('crypto')
            .createHash('sha256')
            .update(`{"email": "$email", "frequentFlyerNumber":"$frequentFlyerNumber", "created":"$created"`)
            .digest('hex');
    }

    isExpired = function() {
        return ((new Date().valueOf() - this.created.valueOf()) / (1000*60*60*24)) > 1;
    }
}
