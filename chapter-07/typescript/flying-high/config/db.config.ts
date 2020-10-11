import * as path from 'path';
import { ensure, isNotBlank } from 'tiny-types';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const all = {
    entities: [ path.join(__dirname, '../src/entities/*.ts') ],
    migrations: [ path.join(__dirname, '../src/migration/*.ts') ],
    synchronize: true,
};

export = {
    development: (): SqliteConnectionOptions => ({
        ... all,
        type: 'sqlite',
        database: 'target/dev.db',
        logging: true,
        synchronize: true,
    }),
    test: (): PostgresConnectionOptions => ({
        ... all,
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'flying_high',
        synchronize: true,
        logging: false,
    }),
    production: (): PostgresConnectionOptions => ({
        ... all,
        type: 'postgres',
        host: ensure('env.DB_HOST', process.env.DB_USERNAME, isNotBlank()),
        port: parseInt(ensure('env.DB_PORT', process.env.DB_USERNAME, isNotBlank()), 10),
        username: ensure('env.DB_USERNAME', process.env.DB_USERNAME, isNotBlank()),
        password: ensure('env.DB_PASSWORD', process.env.DB_PASSWORD, isNotBlank()),
        database: 'flying_high',
        synchronize: false,
        logging: false,
    }),
}
