import { Answerable, Task } from '@serenity-js/core';
import { Attribute, By, Click, PageElement, PageElements } from '@serenity-js/web';
import { equals } from '@serenity-js/assertions';

const Salutation = {
    dropdown: () =>
        PageElement.located(By.id('title'))
            .describedAs('salutation dropdown'),

    options: () =>
        PageElements.located(By.css('mat-option'))
            .describedAs('salutation options')
}

export const SpecifySalutation = (title: Answerable<string>) =>
    Task.where(`#actor specifies their salutation`,
        Click.on(
            Salutation.dropdown()
        ),
        Click.on(
            Salutation.options()
                .where(Attribute.called('value'), equals(title))
                .first()
        )
    );
