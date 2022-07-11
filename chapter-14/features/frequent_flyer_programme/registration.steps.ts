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
    TravellerDetails,
    TravellerNotes,
} from '../../domain';
import { ConfirmSubmission, Form } from '../../domain/ui';

Given('{actor} has signed up', (actor: Actor) =>
    actor.attemptsTo(
        SignUp.viaApiUsing(
            notes<TravellerNotes>().get('travellerDetails')
        ),
    ));

Given('{actor} has signed up using the following details:', (actor: Actor, data: DataTable) =>
    actor.attemptsTo(
        SignUp.viaApiUsing(
            Question.fromObject<TravellerDetails>(
                notes<TravellerNotes>().get('travellerDetails'),
                data.rowsHash() as Partial<TravellerDetails>,
            )
        ),
    ));

When('{actor} signs up using valid traveller details', (actor: Actor) =>
    actor.attemptsTo(
        SignUp.using(
            notes<TravellerNotes>().get('travellerDetails')
        ),
        ConfirmSubmission.succeededWith('registered successfully'),
    ));

When('{actor} tries to sign up using:', (actor: Actor, data: DataTable) =>
    actor.attemptsTo(
        LocateRegistrationForm.viaMainMenu(),
        FillOutRegistrationForm.using(
            Question.fromObject<TravellerDetails>(
                notes<TravellerNotes>().get('travellerDetails'),
                data.rowsHash() as Partial<TravellerDetails>,
            )
        ),
        SubmitRegistrationForm(),
    ));

Then('{pronoun} should be able to sign in', async (actor: Actor) => {
    const details = notes<TravellerNotes>().get('travellerDetails');

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
        Check.whether(notes<TravellerNotes>().get('authenticationDetails'), isPresent())
            .andIfSo(
                SignOut(),
                RemoveTestAccount(),
            ),
    ));
