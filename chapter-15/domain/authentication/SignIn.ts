import { Answerable, Task } from '@serenity-js/core';
import { CompleteAuthenticationForm } from './CompleteAuthenticationForm';
import { SubmitAuthenticationForm } from './SubmitAuthenticationForm';
import { RememberAuthenticationDetails } from './RememberAuthenticationDetails';
import { VerifySubmission } from '../ui';

export class SignIn {
    static using(username: Answerable<string>, password: Answerable<string>): Task {
        return Task.where(`#actor signs in`,
            CompleteAuthenticationForm.using(username, password),
            SubmitAuthenticationForm(),
            VerifySubmission.succeededWith('Logged in'),
            RememberAuthenticationDetails(),
        )
    }
}

