import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

const LoginButton = () =>
    PageElement.located(By.id('login-button'))
        .describedAs('"Login" button')

export const SubmitAuthenticationForm = () =>
    Task.where(`#actor submits the authentication form`,
        Click.on(LoginButton()),
    );
