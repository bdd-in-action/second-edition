import { BeforeAll, Given, When, Then, TableDefinition, AfterAll } from 'cucumber';

import { CabinClass } from '../../src/domain';
import { GenericContainer } from 'testcontainers';
import { StartedTestContainer } from 'testcontainers/dist/test-container';

let db: StartedTestContainer;

BeforeAll(async () => {
    db = await new GenericContainer('postgres')
        .withEnv('POSTGRES_USER', 'postgres')
        .withEnv('POSTGRES_PASSWORD', 'postgres')
        .withEnv('POSTGRES_DB', 'postgres')
        .withExposedPorts(5432)
        .start();
});

AfterAll(async () => {
    await db.stop();
})

Given('the following flight points schedule:', function (table: TableDefinition) {

})

Given('the following flyer types multipliers:', function (table: TableDefinition) {

})

interface FrequentFlyerMember {
    name: string;
}

Given('{} is a {frequentFlyer}', function(name: string, member: FrequentFlyerMember) {

})

Given('the distance from {} to {} is {int} km', function(departure: string, destination: string, distanceInKm: number) {

})

When('he/she flies from {} to {} in {cabinClass} class', function(departure: string, destination: string, distanceInKm: CabinClass) {

})

Then('he/she should earn {int} points', function (expectedPoints: number) {

})

Given('{member} joined the Frequent Flyer programme on {ISO-date}', function(member: FrequentFlyerMember, joinDate: Date) {

})

Given(/^s?he has been a member for (\d+) years/, function (years: number) {

})

When('she views her award trips', function () {

})

Then('the available destinations should be {string-values}', function (destinations: string[]) {

})

Given('{} is a {frequentFlyer} with {int} points', function (name: string, member: FrequentFlyerMember, points: number) {

})

When('he/she completes a flight from {} to {}', function (departure: string, destination: string) {

})

Then('he/she asks for the following flight to be credited to his account:', function (table: TableDefinition) {

})

Then('only the following flights should be credited:', function (table: TableDefinition) {

})

Given('{member} has travelled on the following flight(s):', function (member: FrequentFlyerMember, table: TableDefinition) {

})

When('the flight is credited to his/her account', function () {

})

Then('she should be credited with {int} additional points', function (extraPoints: number) {

})
