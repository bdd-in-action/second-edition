import { notes, Task, TestCompromisedError } from '@serenity-js/core';
import { ExecuteScript, LastScriptExecution } from '@serenity-js/web';
import { Ensure, equals, not } from '@serenity-js/assertions';
import { TravelerNotes } from '../../integration';

export const RememberAuthenticationDetails = () =>
    Task.where(`#actor remembers their authentication details`,

        ExecuteScript.sync(`return {
            userId: JSON.parse(window.localStorage.authUser).userId,
            jwt: window.localStorage.token,
        }`),

        Ensure.that(LastScriptExecution.result(), not(equals(undefined)))
            .otherwiseFailWith(TestCompromisedError, 'localStorage does not contain userId or the token'),

        notes<TravelerNotes>().set('authenticationDetails', LastScriptExecution.result()),
    )
