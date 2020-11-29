package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.tasks.automobile;

import net.serenitybdd.screenplay.Performable;

public class ProvideDetails {
    public static ProvideDetails from(DriverDetails driverDetails) {
        return new ProvideDetails();
    }

    public Performable aboutTheirCar() {
        return null;
    }

    public Performable aboutThemselves() {
        return null;
    }
}
