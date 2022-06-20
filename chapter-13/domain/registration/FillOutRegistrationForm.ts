import { QuestionAdapter, Task } from '@serenity-js/core';
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

export class FillOutRegistrationForm {
    static using(travellerDetails: QuestionAdapter<TravellerDetails> | TravellerDetails) {
        return Task.where(`#actor fills out the registration form`,
            SpecifyEmailAddress(travellerDetails.email),
            SpecifyPassword(travellerDetails.password),
            SpecifySalutation(travellerDetails.title),
            SpecifyFirstName(travellerDetails.firstName),
            SpecifyLastName(travellerDetails.lastName),
            SpecifyHomeAddress(travellerDetails.address),
            SpecifyCountryOfResidence(travellerDetails.country),
            SpecifySeatPreference(travellerDetails.seatPreference),
            ToggleNewsletterSubscription.off(),
            ToggleTermsAndConditions.on(),
        );
    }
}