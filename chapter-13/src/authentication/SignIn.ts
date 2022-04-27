import { Task } from '@serenity-js/core';
import { CompleteAuthenticationForm } from './CompleteAuthenticationForm';
import { SubmitAuthenticationForm } from './SubmitAuthenticationForm';
import { RememberUserId } from './RememberUserId';
import { RememberJWT } from './RememberJWT';

export const SignIn = () =>
    Task.where(`#actor signs in`,
        CompleteAuthenticationForm(),
        SubmitAuthenticationForm(),
        RememberJWT(),
        RememberUserId()
    )
