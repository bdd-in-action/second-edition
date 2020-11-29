package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.navigation;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Open;

public class Navigate {
    public static Performable toTheFrequentFlyerRegistrationPage() {
        return Task.where("{0} opens the Frequent Flyer registration page",
                Open.url("https://frequent-flyer.flying-high.com"),
                Click.on(MenuBar.REGISTER)
        );
    }
}
