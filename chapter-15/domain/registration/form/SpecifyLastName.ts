import { Answerable, Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { Form } from '../../ui';

export const SpecifyLastName = (lastName: Answerable<string>) =>
    Task.where(`#actor specifies their last name`,
        Enter.theValue(lastName)
            .into(Form.inputFor('Last name')),
    );
