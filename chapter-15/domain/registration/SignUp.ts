import { Answerable, d, QuestionAdapter, Task } from '@serenity-js/core';
import { FillOutRegistrationForm } from './FillOutRegistrationForm';
import { LocateRegistrationForm } from './LocateRegistrationForm';
import { SubmitRegistrationForm } from './SubmitRegistrationForm';
import { LastResponse, PostRequest, Send } from '@serenity-js/rest';
import { Ensure, equals } from '@serenity-js/assertions';
import { TravelerDetails } from '../../integration';

export class SignUp {

    static using(details: QuestionAdapter<TravelerDetails>) {
        return Task.where(`#actor signs up using valid details`,
            LocateRegistrationForm.viaHomePage(),
            FillOutRegistrationForm(details),
            SubmitRegistrationForm(),
        );
    }

    static viaApiUsing(travelerDetails: Answerable<TravelerDetails>) {
        return Task.where(`#actor signs up (via API)`,
            Send.a(PostRequest.to('/api/auth/register').with(travelerDetails)),
            Ensure.that(LastResponse.status(), equals(201)),
        );
    }
}
