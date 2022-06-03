import { notes, QuestionAdapter, Task } from '@serenity-js/core';
import { ChangeApiConfig, DeleteRequest, LastResponse, Send } from '@serenity-js/rest';
import { Ensure, equals, or } from '@serenity-js/assertions';
import { AuthenticationDetails, TravellerNotes } from '../actors';

export const RemoveTestAccount = () => {
    const authenticationDetails = notes<TravellerNotes>().get('authenticationDetails') as QuestionAdapter<AuthenticationDetails>;

    return Task.where(`#actor removes their test account`,
        ChangeApiConfig.setHeader(
            'Authorization',
            authenticationDetails
                .jwt
                .as(jwt => `Bearer ${ jwt }`)
                .describedAs('remembered JWT')
        ),
        Send.a(
            DeleteRequest.to(
                authenticationDetails
                    .userId
                    .as(userId => `users?userId=${ userId }`)
                    .describedAs('users API')
            )
        ),
        Ensure.that(LastResponse.status(), or(
            equals(200),    // removed the account
            equals(404),    // the account has already been deleted
        )),
    )
}
