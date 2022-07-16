import { Task } from '@serenity-js/core';
import { Click, Navigate } from '@serenity-js/web';
import { Form } from '../ui';

export class LocateRegistrationForm {
    static viaMainMenu = () =>
        Task.where(`#actor locates Frequent Flyer registration form`,
            Navigate.to('/'),
            Click.on(
                Form.buttonCalled('Register')
            ),
        );
}
