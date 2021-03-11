package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.automobile;

import net.serenitybdd.screenplay.AnonymousTask;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.SilentTask;

public class ProvideDetails {
    public static ProvideDetails from(DriverDetails driverDetails) {
        return new ProvideDetails();
    }

    public Performable aboutTheirCar() {
        return SilentTask.where();
    }

    public Performable aboutThemselves() {
        return SilentTask.where();
    }
}
