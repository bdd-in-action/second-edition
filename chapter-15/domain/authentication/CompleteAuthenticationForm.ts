import { Answerable, Task } from '@serenity-js/core';
import { SpecifyEmailAddress, SpecifyPassword } from './form';

export class CompleteAuthenticationForm {

    static using(email: Answerable<string>, password: Answerable<string>): Task {
        return Task.where(`#actor completes the authentication form`,
            SpecifyEmailAddress(email),
            SpecifyPassword(password),
        );
    }
}
