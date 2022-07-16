import { Ensure, includes, isPresent } from '@serenity-js/assertions';
import { After, DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Check, notes, Question } from '@serenity-js/core';
import {
    FillOutRegistrationForm,
    LocateRegistrationForm,
    RemoveTestAccount,
    SignIn,
    SignOut,
    SignUp,
    SubmitRegistrationForm,
} from '../../domain';
import { ConfirmSubmission, Form } from '../../domain/ui';
import { TravelerNotes } from '../../integration/TravelerNotes';
import { TravelerDetails } from '../../integration';

Given('{actor} has signed up', (actor: Actor) =>
    actor.attemptsTo(
        SignUp.viaApiUsing(
            notes<TravelerNotes>().get('travelerDetails')
        ),
    ));

Given('{actor} has signed up using the following details:', (actor: Actor, data: DataTable) =>
    actor.attemptsTo(
        SignUp.viaApiUsing(
            Question.fromObject<TravelerDetails>(
                notes<TravelerNotes>().get('travelerDetails'),
                data.rowsHash() as Partial<TravelerDetails>,
            )
        ),
    ));

When('{actor} signs up using valid traveller details', (actor: Actor) =>
    actor.attemptsTo(
        SignUp.using(
            notes<TravelerNotes>().get('travelerDetails')
        ),
        ConfirmSubmission.succeededWith('registered successfully'),
    ));

When('{actor} tries to sign up using:', (actor: Actor, data: DataTable) =>
    actor.attemptsTo(
        LocateRegistrationForm.viaMainMenu(),
        FillOutRegistrationForm.using(
            Question.fromObject<TravelerDetails>(
                notes<TravelerNotes>().get('travelerDetails'),
                data.rowsHash() as Partial<TravelerDetails>,
            )
        ),
        SubmitRegistrationForm(),
    ));

Then('{pronoun} should be able to sign in', async (actor: Actor) => {
    const details = notes<TravelerNotes>().get('travelerDetails');

    await actor.attemptsTo(
        SignIn.using(details.email, details.password),
    )
});

Then('{pronoun} should be advised of an {word} input error: {string}', (actor: Actor, field: string, expectedAdvice: string) =>
    actor.attemptsTo(
        Ensure.that(Form.errorMessageFor(field), includes(expectedAdvice)),
    ));

Then('{pronoun} should be advised of an error: {string}', (actor: Actor, expectedMessage: string) =>
    actor.attemptsTo(
        ConfirmSubmission.failedWith(expectedMessage),
    ));

Then('{pronoun} should be presented with an option to reset password', (actor: Actor) => {
    // the system doesn't support this yet
});

After(() =>
    actorInTheSpotlight().attemptsTo(
        Check.whether(notes<TravelerNotes>().get('authenticationDetails'), isPresent())
            .andIfSo(
                SignOut(),
                RemoveTestAccount(notes<TravelerNotes>().get('authenticationDetails')),
            ),
    ));
