import { Note, Task, TestCompromisedError } from '@serenity-js/core';
import { ExecuteScript, LastScriptExecution } from '@serenity-js/web';
import { Ensure, equals, not } from '@serenity-js/assertions';

export const RememberUserId = () =>
    Task.where(`#actor remembers their user id`,
        ExecuteScript.sync(`return JSON.parse(window.localStorage.authUser).userId`),
        Ensure.that(LastScriptExecution.result(), not(equals(undefined)))
            .otherwiseFailWith(TestCompromisedError, 'userId not found in localStorage'),
        Note.record('userId', LastScriptExecution.result()),
    )
