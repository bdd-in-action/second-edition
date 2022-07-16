import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

const RegisterButton = () =>
    PageElement.located(By.id('register-button'))
        .describedAs('"Register" button')

export const SubmitRegistrationForm = () =>
    Task.where(`#actor submits their membership registration`,
        Click.on(RegisterButton()),
    )
