import { isPresent, not } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Click, Wait } from '@serenity-js/web';

import { Form } from '../ui';

const LogoutButton = () =>
    Form.buttonCalled('Logout')

export const SignOut = () =>
    Task.where(`#actor signs out`,
        Wait.until(LogoutButton(), isPresent()),
        Click.on(LogoutButton()),
        Wait.until(LogoutButton(), not(isPresent())),
    )
