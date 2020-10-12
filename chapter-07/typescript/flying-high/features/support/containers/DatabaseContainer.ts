import { GenericContainer } from 'testcontainers';

export class DatabaseContainer extends GenericContainer {
    constructor(config: { username: string, password: string, database: string }) {
        super('postgres');

        this.withEnv('POSTGRES_USER', config.username)
            .withEnv('POSTGRES_PASSWORD', config.password)
            .withEnv('POSTGRES_DB', config.database)
            .withExposedPorts(5432);
    }
}
