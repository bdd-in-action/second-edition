import { Note, q, Task } from '@serenity-js/core';
import { Fill } from '../forms';
import { loginForm } from './ui/loginForm';
import { Ensure, includes, isPresent } from '@serenity-js/assertions';
import { Click, Text, Wait } from '@serenity-js/web';
import { AlertDialog } from '../ui';

const ConfirmLoginSuccessful = () =>
    Task.where(`#actor confirms their registration was successful`,
        Wait.until(AlertDialog(), isPresent()),
        Ensure.that(Text.of(AlertDialog()), includes(q`Logged in as ${ Note.of('email') }`)),
    );

export const LogIn = () =>
    Task.where(`#actor registers their Frequent Flyer membership`,
        Fill.emailAddress(loginForm.emailField()),
        Fill.password(loginForm.passwordField()),
        Click.on(loginForm.loginButton()),

        ConfirmLoginSuccessful(),
    )
