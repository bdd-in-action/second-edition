import { Task } from '@serenity-js/core';
import { FillOutRegistrationForm } from './FillOutRegistrationForm';
import { SubmitRegistrationForm } from './SubmitRegistrationForm';
import { LocateRegistrationForm } from './LocateRegistrationForm';

export const SignUp = () =>
    Task.where(`#actor signs up`,
        LocateRegistrationForm(),
        FillOutRegistrationForm(),
        SubmitRegistrationForm(),
    )
