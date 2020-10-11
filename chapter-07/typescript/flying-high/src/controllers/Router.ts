import * as express from 'express'
import { StatusController } from './StatusController'

export class Router {
    public nodesController = new StatusController()

    public routes(server: express.Application): void {
        server.route('/').get(this.nodesController.index)
        server.route('/nodes').get(this.nodesController.index)
    }
}
