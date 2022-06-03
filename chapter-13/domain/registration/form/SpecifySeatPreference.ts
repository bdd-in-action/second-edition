import { Answerable, Task } from '@serenity-js/core';
import { Attribute, By, Click, PageElements } from '@serenity-js/web';
import { equals } from '@serenity-js/assertions';

class SeatPreference {
    static radioButtons = () =>
        PageElements.located(By.css(`[formcontrolname="seatPreference"]`))
            .describedAs(`seat preference radio buttons`);

    static called = (seatPreference: Answerable<string>) =>
        SeatPreference
            .radioButtons()
            .where(Attribute.called('value'), equals(seatPreference))
            .first();
}

export const SpecifySeatPreference = (seatPreference: Answerable<string>) =>
    Task.where(`#actor specifies their address`,
        Click.on(
            SeatPreference.called(seatPreference),
        ),
    );
