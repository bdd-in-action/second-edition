import { Answerable, Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { Form } from '../../ui';

export const SpecifyCountryOfResidence = (country: Answerable<string>) =>
    Task.where(`#actor specifies their country of residence`,
        Enter.theValue(country)
            .into(Form.inputFor('Country')),
    );
