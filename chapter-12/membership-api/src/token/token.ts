export class Token {
    created: Date = new Date();
    email: string;
    frequentFlyerNumber: number;
    spent: boolean = false;

    hash = function() {
        return require('crypto')
            .createHash('sha256')
            .update(JSON.stringify(this))
            .digest('hex');
    }

    isExpired = function() {
        return ((new Date().valueOf() - this.created.valueOf()) / (1000*60*60*24)) > 1;
    }
}
