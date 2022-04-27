import { Note, Task } from '@serenity-js/core';
import { ChangeApiConfig, DeleteRequest, LastResponse, Send } from '@serenity-js/rest';
import { Ensure, equals } from '@serenity-js/assertions';
import { AuthenticationDetails } from '../actors';

export const RemoveTestAccount = () =>
    Task.where(`#actor removes their test account`,
        ChangeApiConfig.setHeader(
            'Authorization',
            Note.of<AuthenticationDetails>('jwt')
                .as(jwt => `Bearer ${ jwt }`)
        ),
        Send.a(
            DeleteRequest.to(
                Note.of<AuthenticationDetails>('userId')
                    .as(userId => `users?userId=${ userId }`)
            )
        ),
        Ensure.that(LastResponse.status(), equals(200)),
    )
