import { Note, Task } from '@serenity-js/core';
import {
    SpecifyCountryOfResidence,
    SpecifyEmailAddress,
    SpecifyFirstName,
    SpecifyHomeAddress,
    SpecifyLastName,
    SpecifyPassword,
    SpecifySalutation,
    SpecifySeatPreference,
    ToggleNewsletterSubscription,
    ToggleTermsAndConditions,
} from './form';
import { TravellerDetails } from '../actors';

export const FillOutRegistrationForm = () =>
    Task.where(`#actor registers their Frequent Flyer membership`,
        SpecifyEmailAddress(Note.of<TravellerDetails>('email')),
        SpecifyPassword(Note.of<TravellerDetails>('password')),
        SpecifySalutation(Note.of<TravellerDetails>('title')),
        SpecifyFirstName(Note.of<TravellerDetails>('firstName')),
        SpecifyLastName(Note.of<TravellerDetails>('lastName')),
        SpecifyCountryOfResidence(Note.of<TravellerDetails>('country')),
        SpecifyHomeAddress(Note.of<TravellerDetails>('address')),
        SpecifySeatPreference(Note.of<TravellerDetails>('seatPreference')),
        ToggleNewsletterSubscription.off(),
        ToggleTermsAndConditions.on(),
    )
