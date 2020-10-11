import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { PointsSchedule } from '../entities/PointsSchedule';

export class StatusController {

    public index(request: Request, response: Response, next: NextFunction): void {
        getRepository(PointsSchedule).find().then(result => {
            console.log('result', result);
            response.send('BDD In Action Chapter 7');
        }).catch(next);
    }
}
