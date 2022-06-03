import { Answerable, Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { Form } from '../../ui';

export const SpecifyFirstName = (firstName: Answerable<string>) =>
    Task.where(`#actor specifies their first name`,
        Enter.theValue(firstName)
            .into(Form.inputFor('First name')),
    );
