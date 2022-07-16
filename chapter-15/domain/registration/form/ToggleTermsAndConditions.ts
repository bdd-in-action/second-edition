import { By, PageElement } from '@serenity-js/web';
import { Toggle } from '../../ui';

const TermsAndConditions = {
    checkbox: () =>
        PageElement.located(By.id('terms'))
            .describedAs('Terms & Conditions checkbox'),
}

export const ToggleTermsAndConditions = {
    on: () =>
        Toggle.on(TermsAndConditions.checkbox()),

    off: () =>
        Toggle.off(TermsAndConditions.checkbox()),
}
