import { By, PageElement } from '@serenity-js/web';
import { Toggle } from '../../ui';

const NewsletterSubscription = {
    checkbox: () =>
        PageElement.located(By.id('newsletter'))
            .describedAs('newsletter subscription checkbox'),
}

export const ToggleNewsletterSubscription = {
    on: () =>
        Toggle.on(NewsletterSubscription.checkbox()),

    off: () =>
        Toggle.off(NewsletterSubscription.checkbox()),
}
