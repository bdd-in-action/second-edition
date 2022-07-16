import { Answerable, Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { Form } from '../../ui';

export const SpecifyPassword = (password: Answerable<string>) =>
    Task.where(`#actor specifies their password`,
        Enter.theValue(password)
            .into(Form.inputFor('Password')),
    );
