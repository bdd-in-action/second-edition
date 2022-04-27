import { Note, Task, TestCompromisedError } from '@serenity-js/core';
import { ExecuteScript, LastScriptExecution } from '@serenity-js/web';
import { Ensure, equals, not } from '@serenity-js/assertions';
import { AuthenticationDetails } from '../actors';

export const RememberJWT = () =>
    Task.where(`#actor remembers their JSON Web Token`,
        ExecuteScript.sync(`return window.localStorage.token`),
        Ensure.that(LastScriptExecution.result(), not(equals(undefined)))
            .otherwiseFailWith(TestCompromisedError, 'JWT not found in localStorage'),
        Note.record<AuthenticationDetails>('jwt', LastScriptExecution.result()),
    )
