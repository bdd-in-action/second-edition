import { Answerable, Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { Form } from '../../ui';

export const SpecifyEmailAddress = (emailAddress: Answerable<string>) =>
    Task.where(`#actor specifies their email address`,
        Enter.theValue(emailAddress)
            .into(Form.inputFor('Email')),
    );
