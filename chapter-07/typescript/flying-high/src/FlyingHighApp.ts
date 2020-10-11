import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import { Routes } from './config/routes';

export class FlyingHighApp {
    private readonly server: express.Application;
    private readonly routes: Routes = new Routes();

    constructor() {
        this.server = FlyingHighApp.createServer();
        this.routes.routes(this.server)
    }

    listen(port: number, hostname = 'localhost', callback = () => void 0): http.Server {
        return this.server.listen(port, hostname, callback)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    on(event: string, listener: (...args: any[]) => void): express.Application {
        return this.server.on(event, listener)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    once(event: string, listener: (...args: any[]) => void): express.Application {
        return this.server.once(event, listener)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    removeListener(event: string, listener: (...args: any[]) => void): express.Application {
        return this.server.removeListener(event, listener)
    }

    private static createServer(): express.Application {
        const server = express()
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));

        return server;
    }
}
