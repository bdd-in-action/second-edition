import { Duration, Note, q, Task } from '@serenity-js/core';
import { Fill } from '../forms';
import { registrationForm } from './ui/registrationForm';
import { Ensure, includes, isPresent } from '@serenity-js/assertions';
import { Click, Text, Wait } from '@serenity-js/web';
import { AlertDialog } from '../ui';

const ConfirmRegistrationSuccessful = () =>
    Task.where(`#actor confirms their registration was successful`,
        Wait.until(AlertDialog(), isPresent()),
        Ensure.that(Text.of(AlertDialog()), includes(q`User: ${ Note.of('email') } registered successfully`)),
    );

export const RegisterMembership = () =>
    Task.where(`#actor registers their Frequent Flyer membership`,
        Fill.emailAddress(registrationForm.emailField()),
        Fill.password(registrationForm.passwordField()),
        Fill.title(registrationForm.titleDropdown()),
        Fill.firstName(registrationForm.firstNameField()),
        Fill.lastName(registrationForm.lastNameField()),
        Fill.address(registrationForm.addressField()),
        Fill.country(registrationForm.countryField()),
        Fill.seatPreference(registrationForm.seatPreferenceButtons()),
        Click.on(registrationForm.termsAndConditionsCheckbox()),
        Click.on(registrationForm.registerButton()),

        ConfirmRegistrationSuccessful(),
    )
