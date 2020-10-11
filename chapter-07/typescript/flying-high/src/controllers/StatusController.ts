import { Request, Response } from 'express';

export class StatusController {
    public index(request: Request, response: Response): void {
        response.send('BDD In Action Chapter 7')
    }
}
