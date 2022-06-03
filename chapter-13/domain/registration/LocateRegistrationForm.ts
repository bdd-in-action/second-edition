import { Task } from '@serenity-js/core';
import { By, Click, Navigate, PageElement } from '@serenity-js/web';
import { Form } from '../ui';

export class LocateRegistrationForm {
    private static mainMenu = () =>
        PageElement.located(By.css('.operation-section'))
            .describedAs('main menu');

    static viaMainMenu = () =>
        Task.where(`#actor locates Frequent Flyer registration form`,
            Navigate.to('/'),
            Click.on(
                Form.buttonCalled('Register')
                    .of(LocateRegistrationForm.mainMenu())
            )
        )
}
