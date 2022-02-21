import { equals } from '@serenity-js/assertions';
import { Answerable, Log, Note, Task } from '@serenity-js/core';
import { Attribute, By, Click, Enter, PageElement, PageElements, Text } from '@serenity-js/web';

export const Fill = {
    emailAddress: (field: Answerable<PageElement>) =>
        Task.where(`#actor fills in their email address`,
            Enter.theValue(Note.of('email')).into(field),
        ),

    password: (field: Answerable<PageElement>) =>
        Task.where(`#actor fills in their password`,
            Enter.theValue(Note.of('password')).into(field),
        ),

    title: (dropdown: Answerable<PageElement>) =>
        Task.where(`#actor fills in their honorific title`,
            Click.on(dropdown),
            Click.on(
                PageElements.located(By.css('mat-option'))
                    .where(Attribute.called('value'), equals(Note.of('title')))
                    .last()
            )
        ),

    firstName: (field: Answerable<PageElement>) =>
        Task.where(`#actor fills in their first name`,
            Enter.theValue(Note.of('firstName')).into(field),
        ),

    lastName: (field: Answerable<PageElement>) =>
        Task.where(`#actor fills in their last name`,
            Enter.theValue(Note.of('lastName')).into(field),
        ),

    address: (field: Answerable<PageElement>) =>
        Task.where(`#actor fills in their address`,
            Enter.theValue(Note.of('address')).into(field),
        ),

    country: (field: Answerable<PageElement>) =>
        Task.where(`#actor fills in their country`,
            Enter.theValue(Note.of('country')).into(field),
        ),

    seatPreference: (radioButtons: PageElements) =>
        Task.where(`#actor fills in their seat preference`,
            Click.on(
                radioButtons.where(
                    Attribute.called('value'),
                    equals(Note.of('seatPreference'))
                ).first()
            ),
        ),
}
