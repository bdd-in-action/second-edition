import { Ensure, equals, isPresent } from '@serenity-js/assertions';
import { After, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Check, Note, q } from '@serenity-js/core';
import { ChangeApiConfig, DeleteRequest, LastResponse, Send } from '@serenity-js/rest';
import { AuthenticationDetails, RemoveTestAccount, SignIn, SignUp } from '../../src';

When('{actor} signs up using valid traveller details', (actor: Actor) =>
    actor.attemptsTo(
        SignUp(),
    ));

Then('{pronoun} should be able to sign in', (actor: Actor) =>
    actor.attemptsTo(
        SignIn(),
    ));

After(() =>
    actorInTheSpotlight().attemptsTo(
        Check.whether(Note.of<AuthenticationDetails>('userId'), isPresent())
            .andIfSo(RemoveTestAccount())
));
