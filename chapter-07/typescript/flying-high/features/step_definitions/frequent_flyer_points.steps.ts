import { Given, When, Then } from 'cucumber'

import { FlightDatabase } from '../../src';

const flightDatabase = new FlightDatabase()

Given('the distance from {} to {} is {int} km', function (departure: string, destination: string, distanceInKm: number) {
    flightDatabase.recordTripDistance()
        .from(departure)
        .to(destination)
        .as(distanceInKm)
        .kilometers();
})

Given('{word} is a Frequent Flyer traveller', function (frequentFlyer: string) {
    // TODO: Setup a frequent flyer traveller account
})

When('he/she completes a flight between {} and {}', function (departure: string, destination: string) {
    // TODO: Record the flight details
})

Then('he/she should earn {int} points', function (expectedPoints: number) {
    // TODO: Check that the traveller has earned this many points
})

//
//
//
//    Given('the flying distance between Sydney and Melbourne is {int} km', function (distanceInKm: number) {
//    })
//
//    Given(/(?:.*) is a standard Frequent Flyer member/, function() {
//    })
//
//    When(/(?:.*) flies from Sydney to Melbourne/, function () {
//    })
//
//    When(/(?:.*) flies from Sydney to Melbourne in Business class/, function () {
//    })
//
//    When(/(?:.*) flies from Sydney to Melbourne on a Partner Airlines flight/, function () {
//    })
//
//    Given(/Fred is a (.*) Frequent Flyer member/, function (status: string) {
//    })
//
//    When(/Fred flies on a flight that is worth (.*) base points/, function (points: number) {
//    })
//
//    Then(/^s?he should earn a status bonus of (.*)/, function (bonus: number) {
//    })
//
//    Then(/^s?he should have guaranteed minimum earned points per trip of (.*)/, function (minimum: number) {
//    })
//
//    Given(/^(.*) and (.*) are family members/, function (giver: string, receiver: string) {
//    })
//
//    Given('they have the following accounts:', function (accountDetails: TableDefinition) {
//    })
//
//    When('{word} transfers {int} points to {word}', function (giver: string, amount: number, receiver: string) {
//    })
//
//    Then('the accounts should be as follows:', function (accountDetails: TableDefinition) {
//    })
//
//    Given('Todd has just joined the Frequent Flyer programme', function () {
//    })
//
//    Given('Todd asks for the following flight to be credited to his account:', function(flights: TableDefinition) {
//    })
//
//    Then(/the flight should be considered (.*)/, function (eligibility: string) {
//    })
