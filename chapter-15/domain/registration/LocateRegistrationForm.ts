import { Task } from '@serenity-js/core';
import { Click, Navigate } from '@serenity-js/web';
import { Form } from '../ui';

export class LocateRegistrationForm {
    static viaHomePage = () =>
        Task.where(`#actor locates Frequent Flyer registration form via home page`,
            Navigate.to('/'),
            Click.on(
                Form.buttonCalled('Register')
            ),
        );

    static viaDirectNavigation = () =>
        Task.where(`#actor locates Frequent Flyer registration form via direct navigation`,
            Navigate.to('/register'),
        );
}
