import { FlyingHighApp } from './FlyingHighApp'
import dbConfig = require('../config/db.config.json')
import { ensure, isNumber, isString, isOneOf } from 'tiny-types';

export = function (port: number, host: string, mode: string): void {
    ensure('port', port, isNumber())
    ensure('host', host, isString())
    ensure('mode', mode, isOneOf('development', 'test', 'production'))

    const app = new FlyingHighApp(dbConfig[mode]);

    app.listen(port, host, () => {
        console.log(`Flying High listening on ${ host } port ${ port }`)
    })
}
