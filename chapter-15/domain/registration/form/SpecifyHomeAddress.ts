import { Answerable, Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { Form } from '../../ui';

export const SpecifyHomeAddress = (address: Answerable<string>) =>
    Task.where(`#actor specifies their address`,
        Enter.theValue(address)
            .into(Form.inputFor('Address')),
    );
