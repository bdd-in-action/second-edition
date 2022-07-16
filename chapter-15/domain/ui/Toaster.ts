import { By, CssClasses, PageElement } from '@serenity-js/web';
import { QuestionAdapter } from '@serenity-js/core';

export class Toaster {
    static component = () =>
        PageElement.located(By.css(`[toast-component]`))
            .describedAs('toaster');

    static message = () =>
        PageElement.located(By.css(`div[role='alert']`))
            .of(Toaster.component())
            .describedAs('message');

    static status = () =>
        CssClasses.of(Toaster.component())
            .filter(cssClass => cssClass.startsWith('toast-'))
            .map(cssClass => cssClass.replace('toast-', ''))
            .slice(0, 1)[0]
            .describedAs('toaster status') as QuestionAdapter<string>
}
