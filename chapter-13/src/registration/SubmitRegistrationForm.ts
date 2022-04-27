import { Task } from '@serenity-js/core';
import { Click, Text, Wait } from '@serenity-js/web';
import { Ensure, equals, includes, isPresent } from '@serenity-js/assertions';
import { Form, Toaster } from '../ui';

export const SubmitRegistrationForm = () =>
    Task.where(`#actor submits their membership registration`,
        Click.on(Form.buttonCalled('Register')),

        // todo: extract
        Wait.until(Toaster.message(), isPresent()),
        Ensure.that(Text.of(Toaster.message()), includes('registered successfully')),
        Ensure.that(Toaster.status(), equals('success')),
    )
