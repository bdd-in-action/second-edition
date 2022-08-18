import { By, Click, CssClasses, PageElement } from '@serenity-js/web';
import { QuestionAdapter, Task, Wait } from '@serenity-js/core';
import { isPresent, not } from '@serenity-js/assertions';

/**
 * Alternative implementation of {@link Toaster}
 *
 * Example usage:
 *
 * ```typescript
 *  const hostComponent = PageElement.located(By.css(`.ngx-toastr`)).describedAs('toaster host')
 *
 *  const toaster = new ToasterCompanionObject(hostComponent);
 *
 *  await actorCalled(name).attemptsTo(
 *      toaster.dismissMessage(),
 *  )
 * ```
 */
export class ToasterCompanionObject {
    constructor(private readonly hostElement: QuestionAdapter<PageElement>) {}

    message = () =>
        PageElement.located(By.css(`.toast-message`))
            .of(this.hostElement).describedAs('message');

    status = () =>
        CssClasses.of(this.hostElement)
            .filter(cssClass => cssClass.startsWith('toast-'))
            .map(cssClass => cssClass.replace('toast-', ''))
            .slice(0, 1)[0]
            .describedAs('toaster status') as QuestionAdapter<string>

    dismissMessage = () =>
        Task.where(`#actor dismisses the message`,
            Wait.until(this.message(), isPresent()),
            Click.on(this.message()),
            Wait.until(this.message(), not(isPresent())),
        )
}
