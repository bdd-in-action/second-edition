import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { Actor, Log } from '@serenity-js/core';

Given('{actor} does not have a Frequent Flyer account', (actor: Actor) =>
    actor.attemptsTo(
        Log.the('TODO: load details, make actor remember them')
    ));

When('{pronoun} registers as a Frequent Flyer member', (actor: Actor) =>
    actor.attemptsTo(
        Log.the('TODO: enter the details into the form')
    ));

Given('{pronoun} has searched for one-way flights from London to New York in Economy', function (actor: Actor) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{pronoun} books the first available flight', function (actor: Actor) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{pronoun} should be informed that his/her/their booking was successful', function (actor: Actor) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the booking should appear in {pronoun} My Booking section', function (actor: Actor) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{actor} should be able to log on to the Frequent Flyer application', (actor: Actor) =>
    actor.attemptsTo(
        Log.the('TODO: enter username & password')
    ));

When('{pronoun} wants to register a new Frequent Flyer account', (actor: Actor) =>
    actor.attemptsTo(
        Log.the('hello 3')
    ));

Then('{pronoun} should have a Frequent Flyer account with:', (actor: Actor, dataTable: DataTable) =>
    actor.attemptsTo(
        Log.the('TODO: check account details', dataTable.rowsHash())
    ));

Then('the following emails should not be considered valid:', function (dataTable: DataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{pronoun} tries to register with an email of {string}', function (actor: Actor, emailAddress: string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{pronoun} should be told {string}', function (errorMessage: string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('Mike Smith is a Frequent Flyer member with the following details:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{actor} tries to register with a username of {string}', function (actor: Actor, username: string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{pronoun} should be presented with an error message containing {string}', function (actor: Actor, errorMessage: string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{pronoun} should also be presented with a {string} link', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{actor} wants to register for a Frequent Flyer account', function (actor: Actor) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the following information should be mandatory to register:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{pronoun} tries to register without approving the terms and conditions', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
