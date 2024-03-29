package com.manning.bddinaction.flyinghigh.ui.screenplay.ux;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.ensure.Ensure;
import net.serenitybdd.screenplay.waits.WaitUntil;

import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isNotVisible;
import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isVisible;

public class Acknowledge {
    public static Performable success() {
        return Task.where("{0} acknowledges the success notification message",
                WaitUntil.the(Notification.OF_SUCCESS, isVisible()),
                Click.on(Notification.OF_SUCCESS),
                WaitUntil.the(Notification.OF_SUCCESS, isNotVisible())
        );
    }

    public static Performable successMessageOf(String expectedMessage) {
        return Task.where("{0} expects to see a message of '" + expectedMessage + "'",
                WaitUntil.the(Notification.OF_SUCCESS, isVisible()),
                Ensure.that(Notification.OF_SUCCESS).hasTextContent(expectedMessage)
        );
    }
}
