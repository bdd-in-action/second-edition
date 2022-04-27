import { Ensure, equals, isPresent, startsWith } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Click, Text, Wait } from '@serenity-js/web';

import { Form, Toaster } from '../ui';

export const SubmitAuthenticationForm = () =>
    Task.where(`#actor confirms their registration was successful`,
        Click.on(Form.buttonCalled('Login')),

        // todo: extract
        Wait.until(Toaster.message(), isPresent()),
        Ensure.that(Text.of(Toaster.message()), startsWith('Logged in')),
        Ensure.that(Toaster.status(), equals('success')),
    );
