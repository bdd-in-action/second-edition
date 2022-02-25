import { By, PageElement, PageElements } from '@serenity-js/web';

export const registrationForm = {
    emailField: () =>
        PageElement.located(By.id('email'))
            .describedAs('email field'),

    passwordField: () =>
        PageElement.located(By.id('password'))
            .describedAs('password field'),

    titleDropdown: () =>
        PageElement.located(By.id('title'))
            .describedAs('title dropdown'),

    firstNameField: () =>
        PageElement.located(By.id('firstName'))
            .describedAs('first name field'),

    lastNameField: () =>
        PageElement.located(By.id('lastName'))
            .describedAs('last name field'),

    addressField: () =>
        PageElement.located(By.id('address'))
            .describedAs('address field'),

    countryField: () =>
        PageElement.located(By.id('country'))
            .describedAs('country field'),

    seatPreferenceButtons: () =>
        PageElements.located(By.css(`[formcontrolname="seatPreference"]`))
            .describedAs(`seat preference radio buttons`),

    termsAndConditionsCheckbox: () =>
        PageElement.located(By.id('terms')),

    registerButton: () =>
        PageElement.located(By.id('register-button'))
            .describedAs('register button'),
}
