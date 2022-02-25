import { By, PageElement, PageElements } from '@serenity-js/web';

export const loginForm = {
    emailField: () =>
        PageElement.located(By.id('email'))
            .describedAs('email field'),

    passwordField: () =>
        PageElement.located(By.id('password'))
            .describedAs('password field'),

    loginButton: () =>
        PageElement.located(By.id('login-button'))
            .describedAs('login button'),
}
