package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.automobile;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.MoveMouse;
import net.serenitybdd.screenplay.actions.Open;
import net.serenitybdd.screenplay.actions.Switch;

public class ApplyForAutomobileInsurance {
    public static Performable forASingleCar() {
        return Task.where("{0} opens automobile insurance for a single car",
                Open.url("https://www.directline.com"),
                MoveMouse.to(MenuBar.GET_A_QUOTE),
                Click.on(MenuBar.CAR)
//                Switch.toTheOtherWindow()
                );
    }
}
