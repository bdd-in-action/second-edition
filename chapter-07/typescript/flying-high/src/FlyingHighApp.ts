import 'reflect-metadata';
import * as express from 'express'
import * as http from 'http'
import * as bodyParser from 'body-parser'
import { Router } from './controllers/Router'
import { createConnection } from 'typeorm';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import * as path from 'path';

export class FlyingHighApp {
    private readonly server: express.Application;
    private readonly router: Router = new Router();

    constructor(private readonly dbConfig: ConnectionOptions) {
        this.server = FlyingHighApp.createServer();
        this.router.routes(this.server)
    }

    listen(port: number, hostname = 'localhost', callback = () => void 0): http.Server {
        return this.server.listen(port, hostname, () => {
            createConnection({
                ... {
                    entities:   [ path.join(__dirname, './entities/*.ts') ],
                    migrations: [ path.join(__dirname, './migration/*.ts') ],
                    synchronize: true,
                },
                ...this.dbConfig
            }).then(() => {
                callback();
            })
        })
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
