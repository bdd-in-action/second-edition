import { BeforeAll, Given, When, Then, TableDefinition, AfterAll } from 'cucumber';
import { createConnection, getRepository } from 'typeorm';

import dbConfig = require('../../config/db.config');
import { CabinClass } from '../../src/entities';
import { GenericContainer } from 'testcontainers';
import { StartedTestContainer } from 'testcontainers/dist/test-container';
import { PointsSchedule } from '../../src/entities/PointsSchedule';
import { asPointSchedules, PointsScheduleRow } from '../support/tables';

let dbContainer: StartedTestContainer;

BeforeAll({ timeout: 30 * 1000 }, async () => {
    const config = dbConfig.test();

    dbContainer = await new GenericContainer('postgres')
        .withEnv('POSTGRES_USER', config.username)
        .withEnv('POSTGRES_PASSWORD', config.username)
        .withEnv('POSTGRES_DB', config.database)
        .withExposedPorts(5432)
        .start();

    await createConnection({
        ...config,
        host: dbContainer.getContainerIpAddress(),
        port: dbContainer.getMappedPort(5432),
    });
});

AfterAll(async () => {
    await dbContainer.stop();
});

Given('the following flight points schedule:', async function (table: TableDefinition<PointsScheduleRow>) {
    await getRepository(PointsSchedule).clear();
    await getRepository(PointsSchedule).save(asPointSchedules(table));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Given('the following flyer types multipliers:', function (table: TableDefinition) {

});

interface FrequentFlyerMember {
    name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Given('{} is a {frequentFlyer}', function (name: string, member: FrequentFlyerMember) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Given('the distance from {} to {} is {int} km', function (departure: string, destination: string, distanceInKm: number) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
When('he/she flies from {} to {} in {cabinClass} class', function (departure: string, destination: string, distanceInKm: CabinClass) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Then('he/she should earn {int} points', function (expectedPoints: number) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Given('{member} joined the Frequent Flyer programme on {ISO-date}', function (member: FrequentFlyerMember, joinDate: Date) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Given(/^s?he has been a member for (\d+) years/, function (years: number) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
When('she views her award trips', function () {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Then('the available destinations should be {string-values}', function (destinations: string[]) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Given('{} is a {frequentFlyer} with {int} points', function (name: string, member: FrequentFlyerMember, points: number) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
When('he/she completes a flight from {} to {}', function (departure: string, destination: string) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Then('he/she asks for the following flight to be credited to his account:', function (table: TableDefinition) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Then('only the following flights should be credited:', function (table: TableDefinition) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Given('{member} has travelled on the following flight(s):', function (member: FrequentFlyerMember, table: TableDefinition) {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
When('the flight is credited to his/her account', function () {

});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
Then('she should be credited with {int} additional points', function (extraPoints: number) {

});
