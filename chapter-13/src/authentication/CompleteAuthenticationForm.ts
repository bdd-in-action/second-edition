import { Note, Task } from '@serenity-js/core';
import { SpecifyEmailAddress, SpecifyPassword } from './form';

export const CompleteAuthenticationForm = () =>
    Task.where(`#actor completes the authentication form`,
        SpecifyEmailAddress(Note.of('email')),
        SpecifyPassword(Note.of('password')),
    );
