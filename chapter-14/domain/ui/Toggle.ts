import { not } from '@serenity-js/assertions';
import { Click, isSelected, PageElement } from '@serenity-js/web';
import { Answerable, Check, d, Task } from '@serenity-js/core';

export const Toggle = {
    on: (checkbox: Answerable<PageElement>) =>
        Task.where(d`#actor toggles the "${ checkbox }" on`,
            Check.whether(checkbox, not(isSelected()))
                .andIfSo(Click.on(checkbox)),
        ),

    off: (checkbox: Answerable<PageElement>) =>
        Task.where(d`#actor toggles the "${ checkbox }" off`,
            Check.whether(checkbox, isSelected())
                .andIfSo(Click.on(checkbox)),
        ),
}



