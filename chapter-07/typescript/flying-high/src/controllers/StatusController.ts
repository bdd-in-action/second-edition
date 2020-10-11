import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { FrequentFlyerMember } from '../entities';

export class StatusController {

    public index(request: Request, response: Response, next: NextFunction): void {
        getRepository(FrequentFlyerMember).find().then(result => {
            console.log(result)
            response.send('BDD In Action Chapter 7')
        }).catch(next)
    }
}
