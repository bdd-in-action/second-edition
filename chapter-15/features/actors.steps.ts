import { defineParameterType, setDefaultTimeout } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight, Duration } from '@serenity-js/core';

setDefaultTimeout(Duration.ofSeconds(30).inMilliseconds());

defineParameterType({
    name:   'actor',
    regexp: /[A-Z][a-z]+/,
    transformer: (name: string) =>
        actorCalled(name),
});

defineParameterType({
    name: 'pronoun',
    regexp: /he|she|they|his|her|their/,
    transformer() {
        return actorInTheSpotlight();
    },
});
